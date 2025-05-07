# 🚢 OceanVoyage - Premium Cruise Booking Platform
Visit: https://hunterho07.github.io/d1-fe-Travel

![OceanVoyage](https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1920)

## Overview

OceanVoyage is a modern, responsive web application for booking luxury cruise experiences. Built with Next.js and React, this platform offers a seamless booking experience with an intuitive user interface and smooth animations.

## ✨ Key Features

- **Interactive Homepage**: Engaging landing page showcasing featured cruise packages
- **Cruise Package Browsing**: Browse through various cruise destinations and packages
- **Multi-step Booking Process**: User-friendly booking flow with personal info, trip details, and payment
- **Interactive Maps**: View cruise routes and destinations with Leaflet integration
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Sleek design with animations powered by Framer Motion

## 🛠️ Technologies Used

- **Frontend Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Maps**: [React Leaflet](https://react-leaflet.js.org/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Date Picking**: [React DatePicker](https://reactdatepicker.com/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) 1.0 or later (preferred)
- Or: Node.js 18.0 or later with npm, yarn, or pnpm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/travel3.git
   cd travel3
   ```

2. Install dependencies
   ```bash
   bun install
   ```

3. Start the development server
   ```bash
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## 📁 Project Structure

```
src/
├── app/                # Next.js App Router pages
├── components/         # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer)
│   └── ui/             # UI components (Button, AnimatedSection)
├── lib/                # Utility libraries and functions
└── utils/              # Helper functions
public/                 # Static assets
```

## 📝 Usage

### Browsing Cruises

Visit the homepage to see featured cruise packages. Click on "Explore Packages" to view all available cruises.

### Booking a Cruise

1. Click "Book Your Cruise" on the homepage or navigate to the booking page
2. Fill out the three-step booking form:
   - Personal Information
   - Trip Details (destination, dates, cabin type)
   - Payment Information
3. Submit your booking to receive a confirmation

## 🔧 Configuration

The application uses Next.js configuration in `next.config.ts`. You can modify this file to adjust:

- Environment variables
- Build settings
- API routes
- Image optimization

## 🌐 Deployment

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://yourusername.github.io/d1-fe-Travel/`

#### Manual Deployment

You can also deploy manually:

```bash
# Install gh-pages if you haven't already
bun add -d gh-pages

# Build and deploy
bun run export
bun run deploy
```

### Alternative Deployment: Vercel

For the best Next.js experience, you can also deploy on [Vercel](https://vercel.com/):

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure your deployment settings
4. Deploy

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions or feedback, please reach out to us at contact@oceanvoyage.com

---

Built with ❤️ by the OceanVoyage Team
