# Food Delivery App

A modern, responsive food delivery web application built with React.

![Food Delivery App](https://img.shields.io/badge/App-Food%20Delivery-orange)
![React](https://img.shields.io/badge/React-18.x-blue)

## Features

- 🍔 Browse food items with detailed information
- 🛒 Add and remove items from cart
- 💫 Modern UI with responsive design
- 💰 View cart with pricing details
- 🌱 Vegetarian/Non-vegetarian indicators
- ⭐ Rating and review display
- 🔔 Toast notifications

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/food-delivery.git
   cd food-delivery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Tech Stack

- **React** - Frontend library
- **React Router** - Navigation
- **Context API** - State management
- **React Hot Toast** - Notifications
- **React Icons** - UI icons
- **Tailwind CSS** - Styling

## Project Structure

```
food-delivery/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cart.jsx
│   │   └── ...
│   ├── context/
│   │   └── cartContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Usage

### Cart Functionality

The app provides a user-friendly cart system where you can:
- Add items to your cart
- Remove specific items
- View total price
- Clear the entire cart
- Place orders with success notifications

### Context API

The app uses React's Context API for state management:
```jsx
// Using the cart context
const { cart, addToCart, removeFromCart, getTotalPrice, clearCart } = useContext(CartContext);
```

## Customization

You can customize the app by:

1. Modifying theme colors in the Tailwind config
2. Adding new food categories
3. Implementing additional features like user authentication, order history, etc.

## License

MIT

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Toast notifications by [React Hot Toast](https://react-hot-toast.com/)
