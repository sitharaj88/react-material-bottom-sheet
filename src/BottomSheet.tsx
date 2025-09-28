import React, { useState, useRef, useEffect, useCallback } from 'react';
import './BottomSheet.css';

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  snapPoints?: number[]; // percentages from bottom, e.g. [0.3, 0.8]
  initialSnap?: number; // index of initial snap point
  /**
   * If true, dragging the sheet down past `closeOnDragThreshold` closes it.
   */
  closeOnDragDown?: boolean;
  /**
   * Fraction of the viewport height; if the sheet's visible height is below this
   * value after a drag, the sheet will close. Default 0.12 (12%).
   */
  closeOnDragThreshold?: number;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children,
  snapPoints = [0.3, 0.8],
  initialSnap = 0,
  closeOnDragDown = true,
  closeOnDragThreshold = 0.12,
}) => {
  const [currentSnap, setCurrentSnap] = useState(initialSnap);
  const [isDragging, setIsDragging] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const currentY = useRef(0);
  const lastMoveTime = useRef<number | null>(null);
  const lastMoveY = useRef<number | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  const closeOnDragDownRef = useRef(closeOnDragDown);
  const closeOnDragThresholdRef = useRef(closeOnDragThreshold);

  const handleStart = useCallback((clientY: number) => {
    setIsDragging(true);
    startY.current = clientY;
    currentY.current = clientY;
    lastMoveTime.current = Date.now();
    lastMoveY.current = clientY;
  }, []);

  const handleMove = useCallback((clientY: number) => {
    if (!isDragging) return;
    const now = Date.now();
    lastMoveTime.current = now;
    lastMoveY.current = clientY;
    currentY.current = clientY;
    const deltaY = currentY.current - startY.current;
    const sheet = sheetRef.current;
    if (sheet) {
      const maxHeight = window.innerHeight;
      const currentHeight = snapPoints[currentSnap] * maxHeight;
      const newHeight = Math.max(0, Math.min(maxHeight, currentHeight - deltaY));
      sheet.style.height = `${newHeight}px`;
    }
  }, [isDragging, currentSnap, snapPoints]);

  const handleEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    const deltaY = currentY.current - startY.current;
    // compute velocity (px/ms)
    let velocity = 0;
    if (lastMoveTime.current && lastMoveY.current != null) {
      const dt = Date.now() - lastMoveTime.current || 1;
      velocity = (currentY.current - lastMoveY.current) / dt;
    }
    const sheet = sheetRef.current;
    if (sheet) {
      const maxHeight = window.innerHeight;
      const currentHeight = snapPoints[currentSnap] * maxHeight;
      const newHeight = currentHeight - deltaY;
      // If user flung downward quickly, close the sheet
      const flingThreshold = 0.6; // px/ms downward velocity threshold
      if (velocity > flingThreshold) {
        // close on fast downward fling
        onCloseRef.current?.();
        return;
      }
      // close if dragged almost all the way down
      if (closeOnDragDownRef.current) {
        const visibleFraction = newHeight / maxHeight; // fraction of viewport still visible
        if (visibleFraction <= closeOnDragThresholdRef.current!) {
          onCloseRef.current?.();
          return;
        }
      }
      // Find closest snap point
      const closestSnap = snapPoints.reduce((prev, curr) => {
        const prevHeight = prev * maxHeight;
        const currHeight = curr * maxHeight;
        return Math.abs(currHeight - newHeight) < Math.abs(prevHeight - newHeight) ? curr : prev;
      });
      const snapIndex = snapPoints.indexOf(closestSnap);
      setCurrentSnap(snapIndex);
      sheet.style.height = `${closestSnap * maxHeight}px`;
    }
  }, [isDragging, currentSnap, snapPoints]);

  // accessibility: trap focus and restore
  useEffect(() => {
    onCloseRef.current = onClose;
    closeOnDragDownRef.current = closeOnDragDown;
    closeOnDragThresholdRef.current = closeOnDragThreshold;
    if (isOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      // focus the sheet for keyboard events
      setTimeout(() => sheetRef.current?.focus(), 0);
      // lock body scroll
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
        previouslyFocused.current?.focus();
      };
    }
  }, [isOpen]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientY);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    handleMove(e.clientY);
  }, [handleMove]);

  const handleMouseUp = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientY);
  };

  const handleTouchMove = useCallback((e: TouchEvent) => {
    handleMove(e.changedTouches[0].clientY);
  }, [handleMove]);

  const handleTouchEnd = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  useEffect(() => {
    if (sheetRef.current) {
      const height = snapPoints[currentSnap] * window.innerHeight;
      sheetRef.current.style.height = `${height}px`;
    }
  }, [currentSnap, snapPoints]);

  if (!isOpen) return null;

  return (
    <>
      <div className="bottom-sheet-backdrop" onClick={onClose} data-testid="bottom-sheet-backdrop" />
      <div
        ref={sheetRef}
        className="bottom-sheet"
      >
        <div
          className="bottom-sheet-handle"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="handle-bar" />
        </div>
        <div className="bottom-sheet-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default BottomSheet;