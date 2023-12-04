##############
# BASE STAGE #
##############

FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"
RUN corepack enable

WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

##############
# DEPENDENCY #
##############

# Install dependencies
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

###############
# BUILD STAGE #
###############

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

#################
# RELEASE STAGE #
#################

FROM base AS runtime

WORKDIR /app

# Copy package.json
COPY ./package.json ./

# Copy production dependencies
COPY --from=prod-deps /app/node_modules ./node_modules

# Copy dist/app folder from build stage
COPY --from=build /app/dist/app ./dist/app

EXPOSE 3000
CMD ["npm", "start"]