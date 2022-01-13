## File Structure 🗃

All components are located in the components folder. Each component is generic, readable and resuable. Each component has an accompanying styles and test file.

The sass folder consists global style files that should be made available across our application.

The data folder contains a mock data file to test if the application works.

## Testing ⚗️

This project utilises Jest with React Testing Library (RTL), which are built into Create React App (CRA).

All component folders will have an associated test file within the same folder. Each component is tested independently (unit testing) to ensure they work in isolation and aren't affected by external factors(such as other components).

Any test that would use the 'render' function from RTL, use the 'customRender' function from testUtils.js. This adds routing by default so we can easily test components that include route/link logic.

## Routing🚦

## Code Quality 🎨

This project uses prettier and ESlint to increase code readibility and consistancy.

## Styles

Using CSS variables which are being updated in layout.jsx. The defaults for these variabels are in layout.scss. this means theme colours can updated dynamically.