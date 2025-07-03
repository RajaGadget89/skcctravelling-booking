# Technical Context: Travel Booking Platform
*Version: 1.0*
*Created: 2025-04-06*
*Last Updated: 2025-04-06*

## Technology Stack
- Frontend: Next.js (React Framework)
- Backend: Next.js API Routes (for future dynamic needs)
- Database: Google Sheets (initially, for ease of integration and beginner-friendliness) or Postgres (for future scalability)
- Infrastructure: Vercel (for deployment and hosting)

## Development Environment Setup (Updated)
- Node.js (LTS, ARM-compatible) installed
- Git installed and configured
- Docker Desktop running (Next.js container set up, codebase copied, default page served)
- Cursor IDE in use for development
- Local debugging via Docker environment
- Vercel CLI setup deferred until later deployment phase

## Dependencies
- next: latest (React framework)
- react: latest
- googleapis: latest (for Google Sheets integration)
- pg: latest (for Postgres, if/when needed)
- dotenv: latest (for environment variable management)

## Technical Constraints
- Must work on ARM (Apple Silicon/M4) architecture
- Must be easily deployable to Vercel
- Avoid complex or incompatible tools

## Build and Deployment
- Build Process: `next build` (Next.js standard)
- Deployment Procedure: Push to GitHub, connect to Vercel for auto-deploy
- CI/CD: Vercel's built-in pipeline

## Testing Approach
- Manual testing for initial phase
- Automated testing (Jest, Playwright, etc.) can be added in future phases

---

*This document describes the technologies used in the project and how they're configured.* 