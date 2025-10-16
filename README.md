# Perkily Website

A modern, responsive website for Perkily - reimagining healthcare through AI-powered solutions, intuitive design, and seamless experiences.

## Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Beautiful UI Components**: Using shadcn/ui components with Tailwind CSS
- **Responsive Design**: Optimized for all device sizes
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Blog System**: Dynamic blog with filtering and search capabilities
- **Supabase Integration**: Backend services and database connectivity

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Supabase
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
└── services/           # API and service layer
```

## Deployment

The website is deployed on Vercel. Any changes pushed to the main branch will automatically trigger a deployment.

### Custom Domain

To connect a custom domain, configure your DNS settings to point to your Vercel deployment.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Perkily.