# React Calculator App

A sleek, responsive calculator web application built with React, TypeScript, and Tailwind CSS.

![Calculator Screenshot](https://github.com/user-attachments/assets/7c1f05f7-efc6-4924-a5a5-8b2eecc4d796)


## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Percentage calculations
- Clear entry and all-clear functions
- Responsive design for both desktop and mobile devices
- Modern, dark-themed UI
- Error handling for invalid calculations

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite (assumed build tool)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-calculator.git
   cd react-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure

```
src/
├── components/
│   ├── Calculator.tsx  # Main calculator component
│   └── Keys.tsx       # Button component for calculator keys
├── App.tsx            # Root component
└── main.tsx          # Entry point
```

## Component Architecture

### Calculator.tsx
The main component that manages the calculator's state and logic, including:
- Display value management
- Operation handling
- Result calculation
- Responsive adaptations for different screen sizes

### Keys.tsx
A reusable button component that:
- Renders individual calculator keys
- Handles click events
- Applies appropriate styling based on key type
- Adapts to different screen sizes

## Usage

The calculator functions similar to most standard calculators:

1. Click numeric keys to input numbers
2. Click operation keys (+, -, *, /) to perform calculations
3. Press "EQUALS" to calculate the result
4. Use "AC" to clear all input
5. Use "C" to delete the last character
6. The "%" key calculates percentages

## Customization

You can customize the calculator's appearance by modifying the Tailwind CSS classes in the component files:

- Color scheme: Update the hex color values in the className properties
- Sizing: Adjust the min-width, padding, and grid gap values
- Typography: Modify the text size and tracking classes

## License

[MIT License](LICENSE)

## Author

Ktlvi

## Acknowledgements

- Tailwind CSS documentation
- React TypeScript documentation
