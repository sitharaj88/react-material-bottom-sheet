# React Material Bottom Sheet Example

This is an example React application demonstrating the usage of the `react-material-bottom-sheet` library.

## Features Demonstrated

- **Basic Bottom Sheet**: Default configuration with standard snap points
- **Custom Snap Points**: Configurable snap points and initial position
- **Content Example**: Shows how the component handles scrollable content and various UI elements

## Running the Example

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

## Testing the Library

This example serves as an integration test to ensure the library works correctly in a real React application. You can:

- Click the buttons to open different bottom sheet variants
- Drag the sheets to test snap points
- Click the backdrop to close sheets
- Test on different screen sizes

## Library Installation

The example installs the library locally using:
```bash
npm install ../
```

In a real application, you would install it from npm:
```bash
npm install react-material-bottom-sheet
```

And import both the component and styles:
```tsx
import { BottomSheet } from 'react-material-bottom-sheet'
import 'react-material-bottom-sheet/style.css'
```
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
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

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
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
