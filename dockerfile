# Use an official Ubuntu base image
FROM ubuntu:22.04

# Set environment variables to prevent interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Update system and install necessary dependencies
RUN apt-get update && apt-get install -y \
  curl \
  git \
  build-essential \
  unzip \
  && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs

# Verify npm installation
RUN npm --version

# Install Bun (JavaScript runtime)
RUN curl https://bun.sh/install | bash

# Add Bun to the PATH
ENV PATH="/root/.bun/bin:$PATH"

# Create app directory and copy project files
WORKDIR /app
COPY . .

# Install dependencies and generate Prisma client
RUN bun install --frozen-lockfile && bun prisma generate

# Expose the internal port 3000
EXPOSE 3000

# Start the Next.js app using Bun
CMD ["bun", "run", "start"]
