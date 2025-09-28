# React Material Bottom Sheet

[![npm version](https://img.shields.io/npm/v/react-material-bottom-sheet.svg)](https://www.npmjs.com/package/react-material-bottom-sheet)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18%2B-61dafb.svg)](https://reactjs.org/)

A modern, accessible React component library for Material Design bottom sheets with smooth drag gestures, snap points, and TypeScript support.


<div style={{textAlign: 'center', margin: '2rem 0'}}>
  <img src="./docs/static/demo.gif" alt="Bottom Sheet Demo" width="200" />
  <p><em>Watch the demo to see the drag and snap behavior in action.</em></p>
</div>

## ✨ Features

- **🎨 Material Design Compliant**: Follows Android Material Design 3 guidelines
- **👆 Touch & Drag Support**: Smooth drag-to-close and fling gestures
- **📏 Configurable Snap Points**: Multiple snap positions with customizable heights
- **♿ Accessibility First**: Full keyboard navigation and screen reader support
- **🔷 TypeScript Ready**: Complete type definitions included
- **🎯 Zero Dependencies**: Lightweight with no external dependencies
- **📱 Mobile Optimized**: Touch-friendly interactions and responsive design
- **🎭 Customizable Styling**: Easy theming and CSS customization

## 🚀 Installation

```bash
npm install react-material-bottom-sheet
```

### Peer Dependencies

This library requires React 18+ and React DOM 18+:

```bash
npm install react@^18.0.0 react-dom@^18.0.0
```

> **Note**: The library is compatible with both React 18 and React 19.

## 📖 Quick Start

```tsx
import React, { useState } from 'react';
import { BottomSheet } from 'react-material-bottom-sheet';
import 'react-material-bottom-sheet/style.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Bottom Sheet
      </button>

      <BottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div style={{ padding: '20px' }}>
          <h2>Bottom Sheet Content</h2>
          <p>This is the content of the bottom sheet.</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </BottomSheet>
    </div>
  );
}
```

## 🎯 Advanced Usage

### Custom Snap Points

```tsx
import { BottomSheet } from 'react-material-bottom-sheet';

function CustomSnaps() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      snapPoints={[0.2, 0.5, 0.9]} // 20%, 50%, 90% of screen height
      initialSnap={1} // Start at 50% height
    >
      <div style={{ padding: '20px' }}>
        <h3>Custom Snap Points</h3>
        <p>Drag me to different heights!</p>
      </div>
    </BottomSheet>
  );
}
```

### With Form Content

```tsx
function FormSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div style={{ padding: '20px' }}>
        <h3>Contact Form</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission
          setIsOpen(false);
        }}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows={4} />
          <button type="submit">Send</button>
        </form>
      </div>
    </BottomSheet>
  );
}
```

## 📚 API Reference

### BottomSheet Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | - | **Required.** Controls bottom sheet visibility |
| `onClose` | `() => void` | - | **Required.** Called when user closes the sheet |
| `children` | `React.ReactNode` | - | **Required.** Content to display inside the sheet |
| `snapPoints` | `number[]` | `[0.3, 0.8]` | Array of snap points as screen height fractions (0-1) |
| `initialSnap` | `number` | `0` | Index of initial snap point to show |
| `closeOnDragDown` | `boolean` | `true` | Allow closing by dragging down from top snap |
| `closeThreshold` | `number` | `0.3` | Drag distance threshold for close (as fraction) |
| `velocityThreshold` | `number` | `0.3` | Velocity threshold for fling gestures (pixels/ms) |

### TypeScript Support

```tsx
import type { BottomSheetProps } from 'react-material-bottom-sheet';

const customProps: BottomSheetProps = {
  isOpen: true,
  onClose: () => console.log('Closed'),
  snapPoints: [0.25, 0.5, 0.75],
  initialSnap: 1,
  children: <div>Content</div>
};
```

## 🎨 Styling & Theming

The component uses CSS custom properties for easy theming:

```css
/* Override default styles */
:root {
  --bottom-sheet-background: #ffffff;
  --bottom-sheet-border-radius: 16px;
  --bottom-sheet-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  --bottom-sheet-handle-color: #e0e0e0;
}
```

### Custom CSS Classes

```tsx
<BottomSheet
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  className="my-custom-sheet"
>
  {/* Your content */}
</BottomSheet>
```

```css
.my-custom-sheet {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
```

## 🧪 Testing

### Unit Tests

```bash
npm test
```

### End-to-End Tests

```bash
npm run test:e2e
```

## 📁 Project Structure

```
react-material-bottom-sheet/
├── src/
│   ├── BottomSheet.tsx      # Main component
│   ├── BottomSheet.css      # Styles
│   ├── index.ts            # Exports
│   └── __tests__/          # Unit tests
├── example/                # Demo application
├── docs/                   # Documentation site
├── dist/                   # Built library
└── tests/                  # E2E tests
```

## 🛠️ Development

### Setup

```bash
# Clone the repository
git clone https://github.com/sitharaj88/react-material-bottom-sheet.git
cd react-material-bottom-sheet

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Building the Library

```bash
npm run build
```

This creates optimized bundles in the `dist/` directory.

### Running the Example

```bash
cd example
npm install
npm run dev
```

Visit `http://localhost:5173` to see the demo.

## 📖 Documentation

For comprehensive documentation, API reference, and more examples, visit our [documentation site](https://sitharaj88.github.io/react-material-bottom-sheet).

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Run the test suite: `npm test`
5. Submit a pull request

### Code Style

This project uses ESLint for code linting. Please run:

```bash
npm run lint
```

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Material Design 3 guidelines
- Built with modern React patterns and TypeScript
- Thanks to the React community for excellent tooling

## 📞 Support

- 📖 [Documentation](https://sitharaj88.github.io/react-material-bottom-sheet)
- 🐛 [Issues](https://github.com/sitharaj88/react-material-bottom-sheet/issues)
- 💬 [Discussions](https://github.com/sitharaj88/react-material-bottom-sheet/discussions)

---

Made with ❤️ by [sitharaj88](https://github.com/sitharaj88)
```
