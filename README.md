# PetPalace Kenya 🐾

A modern e-commerce platform for pet products and services in Kenya. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🛍️ Shop by pet category (dogs, cats, fish, birds, etc.)
- 🏷️ Browse products by category
- 🔍 Search functionality
- 🛒 Shopping cart
- ❤️ Wishlist
- 👤 User authentication
- 📱 Responsive design
- 🌟 Product reviews and ratings
- 🚚 Order tracking
- 💳 Secure checkout

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Supabase (Authentication & Database)
- React Router
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/petpalace-kenya.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/       # React Context providers
├── data/         # Static data and types
├── hooks/        # Custom React hooks
├── lib/          # Utility functions and services
├── pages/        # Page components
└── utils/        # Helper functions
```

## Key Features

### Authentication
- Email/password authentication
- Protected routes
- User profile management

### Shopping Experience
- Product filtering and sorting
- Cart management
- Wishlist functionality
- Order history
- Recently viewed products

### Admin Features
- Product management
- Order management
- User management
- Analytics dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Supabase](https://supabase.io)
- [Vite](https://vitejs.dev)