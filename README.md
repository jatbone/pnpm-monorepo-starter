# PNPM Monorepo Starter Project

This starter project is a pre-configured PNPM monorepo that uses Nx, Drizzle ORM and tRPC.

## Features

- **Nx**: Powerful build framework to manage monorepository workflows and tasks.
- **Drizzle ORM**: Object-relational mapping library for TypeScript and JavaScript, designed to work seamlessly in a Node.js environment.
- **tRPC**: End-to-end typesafe APIs that empower developers to build reliable RPC-style APIs quickly.
- **Fastify**: Fast and low overhead web framework for Node.js.

## Quick Start

### Prerequisites

Before you can run this project, you'll need to install:

- [Node.js](https://nodejs.org/en/) (Preferably the latest LTS version)
- [PNPM](https://pnpm.io/) for efficient dependency management.

### Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

### Running the Project

This project comes with several commands configured in `package.json` to facilitate development and building processes:

- **Database Operations**:

  - `pnpm db:generate` - Generate types and schemas for the database.
  - `pnpm db:pull` - Pull the latest database schema.
  - `pnpm db:push` - Push the local database schema to the remote database.
  - `pnpm db:dev` - Run database in the development mode.
  - `pnpm db:build` - Build the database project.

- **API Development**:

  - `pnpm api:dev` - Run the API in the development mode.
  - `pnpm api:build` - Build the API for production.

- **tRPC Development**:

  - `pnpm trpc:dev` - Run tRPC services in the development mode.
  - `pnpm trpc:build` - Build tRPC services for production.

- **Combined Commands**:
  - `pnpm be:dev` - Run API, database, and tRPC router in parallel in development mode.
  - `pnpm build` - Build all projects within the monorepo.
  - `pnpm lint` - Lint all projects.
  - `pnpm test` - Run tests across all projects.

## Testing

To run all tests in the repository:

```bash
pnpm test
```

## Linting

Ensure code quality and consistency by linting:

```bash
pnpm lint
```

## Building for Production

To build all applications and libraries for production:

```bash
pnpm build
```

## Contributing

Contributions are welcome! Please feel free to submit pull requests, create issues, or provide feedback.

## License

This project is licensed under the ISC License.
