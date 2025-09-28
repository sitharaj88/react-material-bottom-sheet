# React Material Bottom Sheet

[![npm version](https://badge.fury.io/js/react-material-bottom-sheet.svg)](https://badge.fury.io/js/react-material-bottom-sheet)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A React component library for Material Design bottom sheets with drag support and smooth animations.

## Features

- **Material Design**: Follows Android Material Design guidelines
- **Drag Support**: Users can drag the bottom sheet to different snap points
- **TypeScript**: Fully typed for better development experience
- **Customizable**: Configurable snap points and styling
- **Lightweight**: Minimal dependencies

## Installation

```bash
npm install react-material-bottom-sheet
```

**Peer Dependencies**: React 18+ and React DOM 18+

The library supports both React 18 and React 19.

## Usage

```tsx
import { BottomSheet } from 'react-material-bottom-sheet'
import 'react-material-bottom-sheet/style.css' // Import the styles

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div>Your content here</div>
    </BottomSheet>
  );
}
```

## Basic Usage

```tsx
import React, { useState } from 'react';
import { BottomSheet } from 'react-material-bottom-sheet';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Bottom Sheet</button>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <h2>Bottom Sheet Content</h2>
          <p>This is the content of the bottom sheet.</p>
        </div>
      </BottomSheet>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | - | Controls whether the bottom sheet is visible |
| `onClose` | `() => void` | - | Callback when the bottom sheet should close |
| `children` | `React.ReactNode` | - | Content to display inside the bottom sheet |
| `snapPoints` | `number[]` | `[0.3, 0.8]` | Snap points as fractions of screen height |
| `initialSnap` | `number` | `0` | Index of initial snap point |

## Documentation

For more detailed documentation, examples, and API reference, visit [our documentation site](https://yourusername.github.io/react-material-bottom-sheet/).

## Example

Check out the `example/` directory for a complete React application demonstrating various usage patterns of the BottomSheet component.

To run the example:
```bash
cd example
npm install
npm run dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
