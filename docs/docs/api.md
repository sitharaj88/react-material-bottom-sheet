---
sidebar_position: 2
---

# API Reference

## BottomSheet

The main component for displaying a bottom sheet.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | - | Controls whether the bottom sheet is visible |
| `onClose` | `() => void` | - | Callback function called when the bottom sheet should close |
| `children` | `React.ReactNode` | - | The content to display inside the bottom sheet |
| `snapPoints` | `number[]` | `[0.3, 0.8]` | Array of snap points as fractions of screen height |
| `initialSnap` | `number` | `0` | Index of the initial snap point to use |
| `closeOnDragDown` | `boolean` | `true` | If true, dragging the sheet down past `closeOnDragThreshold` will close it |
| `closeOnDragThreshold` | `number` | `0.12` | Fraction of viewport height; sheet closes when visible height is &lt;= this value after drag |

### Example

```tsx
<BottomSheet
  isOpen={true}
  onClose={() => setIsOpen(false)}
  snapPoints={[0.2, 0.5, 0.9]}
  initialSnap={1}
  closeOnDragDown={true}
  closeOnDragThreshold={0.12}
>
  <div>Your content here</div>
</BottomSheet>
```

### Accessibility

The BottomSheet component includes built-in accessibility features:
- **Keyboard Support**: Press `Escape` to close the sheet.
- **Focus Management**: Focus is trapped within the sheet when open and restored when closed.
- **ARIA Attributes**: Proper roles and labels for screen readers.
- **Body Scroll Lock**: Prevents background scrolling when the sheet is open.