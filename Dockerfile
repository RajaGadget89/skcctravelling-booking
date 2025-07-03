# Stage 1: Base Image for Development and Build Process
FROM node:20-alpine AS development

# Update APK repositories and install build tools for native modules
RUN apk update && apk upgrade && \
    apk add --no-cache \
    build-base \
    python3 \
    git \
    vips-dev \
    autoconf \
    automake \
    libtool \
    libffi-dev \
    nasm \
    gcompat \
    jpeg-dev \
    cairo-dev \
    pango-dev \
    gdk-pixbuf-dev \
    libwebp-dev

# Set working directory
WORKDIR /app

# Copy package.json and lockfile to leverage Docker's cache
COPY package.json package-lock.json ./

# Install all dependencies (dev and prod)
RUN npm ci --loglevel verbose

# Copy all source code
COPY . .

# Set environment variables for Next.js build
ENV NEXT_OUTPUT="standalone"
ENV NEXT_SHARP_PATH="/usr/local/lib/node_modules/sharp"

# =========================================================
# PRODUCTION BUILD STAGE (optional for development, but good practice)
# This stage will build the production output
FROM development AS builder_prod

# Run Next.js build command
RUN npm run build


# =========================================================
# FINAL IMAGE FOR DEVELOPMENT (running npm run dev)
# This image will be used by docker-compose for local development with hot-reloading
FROM development AS final_dev

# No specific changes needed here as 'development' stage already has everything
# just renamed it for clarity as the final stage for dev

# Expose the port for the Next.js development server
EXPOSE 7111

# Command to run the Next.js development server
# This is what `npm run dev` typically executes
CMD ["npm", "run", "dev"]


# =========================================================
# FINAL IMAGE FOR PRODUCTION (for later deployment, e.g., Vercel / self-hosting)
# This stage is commented out for now as you are focusing on development
# Uncomment and use this stage when you are ready for production deployment
# FROM node:20-alpine AS production

# ENV NODE_ENV production
# WORKDIR /app

# COPY --from=builder_prod /app/.next/standalone ./

# EXPOSE 7111
# CMD ["node", "server.js"]
