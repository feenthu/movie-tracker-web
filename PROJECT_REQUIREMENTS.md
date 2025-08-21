Project Context
I'm building a movie tracking application and have successfully completed the backend API service. Now I need to create a Next.js 14+ frontend that connects to my deployed backend infrastructure.
Current Infrastructure

Backend API: Deployed on Railway at movie-tracker-api-production.up.railway.app
Database: PostgreSQL service on Railway
Frontend Repo: https://github.com/feenthu/movie-tracker-web (empty, ready for development)
Local Path: /Users/to920d/Documents/Projects/TSO/movie-tracker-web

Project Requirements
Tech Stack (Must Follow)

Framework: Next.js 14+ with App Router
Language: TypeScript
Styling: Tailwind CSS
GraphQL Client: Apollo Client with Next.js app support
Form Handling: React Hook Form + Zod validation
State Management: React Context + Apollo Client cache

Required Dependencies
json{
"@apollo/client": "^3.8.0",
"@apollo/experimental-nextjs-app-support": "^0.4.0",
"graphql": "^16.8.0",
"react-hook-form": "^7.45.0",
"@hookform/resolvers": "^3.3.0",
"zod": "^3.22.0"
}
Directory Structure Required
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (login/welcome page)
│   └── globals.css
├── components/
│   ├── ui/ (button, input, modal, card, loading, toast)
│   └── layout/ (navbar, sidebar, page-wrapper)
├── providers/
│   ├── apollo-provider.tsx
│   ├── auth-provider.tsx
│   └── toast-provider.tsx
├── lib/
│   └── apollo-client.ts
└── graphql/
├── auth.graphql
└── movies.graphql
Immediate Objectives

Initialize Next.js project in the existing repo directory
Set up Apollo Client to connect to the Railway-deployed GraphQL API
Create a simple login/welcome page for initial testing
Configure providers for authentication and GraphQL state management
Deploy to Railway and verify connection with backend API
Test end-to-end authentication flow

Specific Implementation Needs

Configure Apollo Client with the Railway API endpoint
Set up authentication context with JWT token handling
Create a minimal but functional login form
Implement proper error handling and loading states
Ensure Railway deployment configuration works correctly
Verify CORS and API connectivity between frontend and backend

Railway Integration

Use Railway MCP tools to inspect current project setup
Configure environment variables for API endpoint
Set up automatic deployments from GitHub
Test service communication within Railway project

Development Approach
Please help me:

Set up the project structure following the Phase 4 guidelines exactly
Create the core Apollo/Auth infrastructure for API connectivity
Build a working login page as the entry point
Configure Railway deployment and test the connection
Provide step-by-step guidance for testing and debugging

Focus on creating a minimal but complete foundation that I can immediately test and iterate on. The login page should connect to the backend API and demonstrate successful authentication flow.