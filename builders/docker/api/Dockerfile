FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /hexagonal-architecture-practical-example-typescript
COPY package.json package-lock.json ./
RUN npm install

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /hexagonal-architecture-practical-example-typescript
COPY . .
COPY --from=deps /hexagonal-architecture-practical-example-typescript/node_modules ./node_modules
RUN npm run api:build


# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /hexagonal-architecture-practical-example-typescript
ENV NODE_ENV production
COPY --from=builder /hexagonal-architecture-practical-example-typescript/.build/api .
COPY --from=builder /hexagonal-architecture-practical-example-typescript/node_modules ./node_modules
RUN ls -la

CMD ["node", "bootstrap/index.js"]
