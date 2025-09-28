import { useState } from 'react'
import { BottomSheet } from 'react-material-bottom-sheet'
import 'react-material-bottom-sheet/style.css'
import './App.css'

function App() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)

  return (
    <div className="app">
      <h1>React Material Bottom Sheet Demo</h1>

      <div className="demo-buttons">
        <button onClick={() => setIsOpen1(true)} className="demo-button">
          Basic Bottom Sheet
        </button>

        <button onClick={() => setIsOpen2(true)} className="demo-button">
          Custom Snap Points
        </button>

        <button onClick={() => setIsOpen3(true)} className="demo-button">
          Content Example
        </button>
      </div>

      {/* Basic Bottom Sheet */}
      <BottomSheet isOpen={isOpen1} onClose={() => setIsOpen1(false)}>
        <div className="sheet-content">
          <h2>Basic Bottom Sheet</h2>
          <p>This is a basic bottom sheet with default snap points (30% and 80% of screen height).</p>
          <p>You can drag it to different positions or click the backdrop to close.</p>
          <button onClick={() => setIsOpen1(false)} className="close-button">
            Close
          </button>
        </div>
      </BottomSheet>

      {/* Custom Snap Points */}
      <BottomSheet
        isOpen={isOpen2}
        onClose={() => setIsOpen2(false)}
        snapPoints={[0.2, 0.5, 0.9]}
        initialSnap={1}
      >
        <div className="sheet-content">
          <h2>Custom Snap Points</h2>
          <p>This bottom sheet has custom snap points: 20%, 50%, and 90% of screen height.</p>
          <p>Initial snap point is set to index 1 (50% height).</p>
          <div className="snap-indicators">
            <div className="snap-point">20%</div>
            <div className="snap-point active">50%</div>
            <div className="snap-point">90%</div>
          </div>
          <button onClick={() => setIsOpen2(false)} className="close-button">
            Close
          </button>
        </div>
      </BottomSheet>

      {/* Content Example (shows close-on-drag behavior) */}
      <BottomSheet
        isOpen={isOpen3}
        onClose={() => setIsOpen3(false)}
        closeOnDragDown={true}
        closeOnDragThreshold={0.12}
      >
        <div className="sheet-content">
          <h2>Content Example</h2>
          <p>This demonstrates how the bottom sheet handles scrollable content.</p>
          <p className="muted">Tip: drag down quickly to fling-close, or drag almost to bottom to close.</p>

          <div className="content-section">
            <h3>Features</h3>
            <ul>
              <li>Material Design inspired</li>
              <li>Touch and mouse drag support</li>
              <li>Configurable snap points</li>
              <li>TypeScript support</li>
              <li>Backdrop click to close</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>Usage</h3>
            <pre className="code-example">
{`import { BottomSheet } from 'react-material-bottom-sheet';

<BottomSheet
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <div>Your content here</div>
</BottomSheet>`}
            </pre>
          </div>

          <div className="content-section">
            <h3>API</h3>
            <ul>
              <li><code>isOpen</code> - Controls visibility</li>
              <li><code>onClose</code> - Close callback</li>
              <li><code>snapPoints</code> - Array of height percentages</li>
              <li><code>initialSnap</code> - Initial snap point index</li>
            </ul>
          </div>

          <button onClick={() => setIsOpen3(false)} className="close-button">
            Close
          </button>
        </div>
      </BottomSheet>
    </div>
  )
}

export default App
