# SmartPantry Recipe Generator

## Overview

SmartPantry is a full-stack web application that helps users reduce food waste by generating AI-powered recipes from available ingredients. The application combines a React frontend with an Express backend, using PostgreSQL for data persistence and OpenAI's GPT-4 for recipe generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds
- **Animation**: Framer Motion for smooth UI transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful endpoints
- **Middleware**: Express JSON parsing, custom logging, error handling
- **Development**: Hot reloading with Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized in `/shared/schema.ts` for type sharing
- **Migrations**: Drizzle Kit for database schema management
- **Fallback**: In-memory storage implementation for development

### Key Components

#### Database Schema
- **Recipes Table**: Stores generated recipes with ingredients, instructions, nutrition info
- **User Stats Table**: Tracks user engagement metrics and preferences
- **Shared Types**: TypeScript interfaces shared between frontend and backend

#### API Endpoints
- `POST /api/recipes/generate`: Creates recipes from ingredients using OpenAI
- `GET /api/stats`: Returns user and global application statistics
- `GET /api/recipes/recent`: Fetches recently generated recipes

#### AI Integration
- **Provider**: OpenAI GPT-4 model
- **Functionality**: Generates recipes based on ingredients and dietary preferences
- **Features**: Supports vegan, kid-friendly, budget, and quick meal options

## Data Flow

1. User inputs ingredients and preferences in the frontend
2. Frontend sends POST request to `/api/recipes/generate`
3. Backend validates input using Zod schemas
4. OpenAI API generates recipe suggestions based on parameters
5. Generated recipes are stored in PostgreSQL database
6. User stats are updated (recipes generated, food saved metrics)
7. Response sent back to frontend with generated recipes
8. Frontend displays recipes with smooth animations and modal details

## External Dependencies

### Core Dependencies
- **Database**: `@neondatabase/serverless` for PostgreSQL connection
- **ORM**: `drizzle-orm` and `drizzle-kit` for database operations
- **AI**: `openai` package for GPT-4 integration
- **Validation**: `zod` for runtime type checking
- **UI Components**: Radix UI primitives with shadcn/ui styling

### Development Tools
- **TypeScript**: Full type safety across the stack
- **Vite**: Fast development server and build tool
- **PostCSS**: CSS processing with Tailwind
- **ESBuild**: Fast production builds for the backend

## Deployment Strategy

### Build Process
- Frontend: Vite builds to `dist/public` directory
- Backend: ESBuild bundles server code to `dist/index.js`
- Static files served by Express in production

### Environment Configuration
- Development: Vite dev server with Express backend
- Production: Single Express server serving both API and static files
- Database: PostgreSQL connection via `DATABASE_URL` environment variable
- AI: OpenAI API key required for recipe generation

### Development Workflow
- `npm run dev`: Starts development server with hot reloading
- `npm run build`: Creates production build
- `npm run start`: Runs production server
- `npm run db:push`: Updates database schema

## Key Architectural Decisions

### Monorepo Structure
**Problem**: Sharing types between frontend and backend while maintaining clean separation
**Solution**: Shared `/shared` directory with common schemas and types
**Benefits**: Type safety across the entire stack, reduced duplication

### In-Memory Fallback Storage
**Problem**: Database might not be available during development
**Solution**: `MemStorage` class implementing the same interface as database storage
**Benefits**: Graceful degradation, easier local development

### AI-Powered Recipe Generation
**Problem**: Creating relevant, diverse recipes from user ingredients
**Solution**: OpenAI GPT-4 integration with structured prompts
**Benefits**: High-quality, contextual recipe suggestions with nutritional information

### Component-Based UI Architecture
**Problem**: Consistent, reusable UI components
**Solution**: shadcn/ui component library with Radix UI primitives
**Benefits**: Accessible, themeable components with consistent design system

## Recent Changes: Latest modifications with dates

### July 29, 2025 - Recipe Generation System Overhaul
- **Fixed duplicate ingredient naming** (eliminated "Rice & Rice" type issues)
- **Implemented ingredient-specific cooking instructions** that adapt based on main ingredient type (meat vs rice vs vegetables)
- **Streamlined ingredient lists** to only include essentials that are actually used in cooking steps
- **Enhanced instruction generation** to reference all listed ingredients in proper cooking order
- **Improved randomization system** to prevent repetitive recipe generation
- **Heart/favorites functionality** working perfectly in both recipe cards and modals