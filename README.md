# Movie Tracker Frontend

A Next.js 14+ frontend application for tracking movies and managing watchlists, built with TypeScript, Tailwind CSS, and Apollo Client.

## Features

- 🔐 User authentication with JWT tokens
- 🎬 Movie browsing and search
- 📋 Personal watchlist management  
- ❤️ Favorite movies tracking
- 📱 Responsive design with Tailwind CSS
- 🚀 Modern React patterns with hooks
- 📡 GraphQL API integration with Apollo Client

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **GraphQL Client**: Apollo Client
- **Form Handling**: React Hook Form + Zod validation
- **State Management**: React Context + Apollo Client cache

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd movie-tracker-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Update the GraphQL API URL in `.env.local` if needed.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/          # Dashboard page
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home/login page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx      # Button component
│   │   ├── input.tsx       # Input component
│   │   ├── card.tsx        # Card components
│   │   ├── modal.tsx       # Modal components
│   │   ├── loading.tsx     # Loading components
│   │   └── toast.tsx       # Toast notifications
│   ├── layout/             # Layout components
│   │   ├── navbar.tsx      # Navigation bar
│   │   ├── sidebar.tsx     # Sidebar navigation
│   │   └── page-wrapper.tsx # Page wrapper
│   └── login-form.tsx      # Login form component
├── providers/              # React context providers
│   ├── apollo-provider.tsx # Apollo Client provider
│   ├── auth-provider.tsx   # Authentication context
│   └── toast-provider.tsx  # Toast notifications context
├── lib/
│   ├── apollo-client.ts    # Apollo Client configuration
│   └── utils.ts            # Utility functions
└── graphql/
    ├── auth.graphql        # Authentication queries/mutations
    ├── movies.graphql      # Movie queries/mutations
    └── generated.ts        # Generated GraphQL types
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Authentication

The app uses JWT token-based authentication:

- Tokens are stored in localStorage
- Automatic token validation on app initialization
- Automatic logout on token expiration
- Protected routes redirect to login when unauthenticated

## GraphQL Integration

Apollo Client is configured with:

- Automatic authentication headers
- Error handling and network error responses
- Optimized caching strategies
- Real-time updates support

## Deployment

### Railway Deployment

1. Connect your GitHub repository to Railway
2. Set the `NEXT_PUBLIC_GRAPHQL_URL` environment variable
3. Railway will automatically deploy using the `railway.json` configuration

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Environment Variables

- `NEXT_PUBLIC_GRAPHQL_URL` - GraphQL API endpoint URL

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and type checking
5. Submit a pull request

## License

MIT License