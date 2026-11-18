# Collapesia POS Monorepo

Modern POS (Point of Sale) system built as a monorepo powered by **pnpm workspaces**, **Next.js**, **NestJS**, and shared TypeScript contracts.

---

## 📁 Repository Structure

```text
├── apps/
│   ├── web/         # Frontend POS application (Next.js 16, React 19, Tailwind CSS v4)
│   └── api/         # Backend REST API (NestJS 12, Vitest, Oxlint)
├── packages/
│   └── contracts/   # Shared TypeScript types & validation schemas (Zod)
├── package.json     # Root workspace configuration & orchestration scripts
├── pnpm-workspace.yaml
└── README.md
```

---

## 🛠️ Prerequisites

- **Node.js**: `v20.x` or higher (tested with `v20` - `v24`)
- **pnpm**: `v10.x` or higher (e.g. `npm install -g pnpm`)

---

## 🚀 Getting Started

### 1. Install Dependencies

Install all dependencies across the entire workspace:

```bash
pnpm install
```

### 2. Environment Setup (Optional)

Default fallback values are pre-configured, but you can customize environment variables by creating `.env` files:

- **Web Frontend (`apps/web/.env.local`)**:
  ```env
  API_URL=http://localhost:3001
  ```
- **API Backend (`apps/api/.env`)**:
  ```env
  PORT=3001
  ```

---

## 💻 Running the Project with `pnpm run`

### Development Mode

You can run development servers directly from the root workspace:

| Command | Description | URL |
| :--- | :--- | :--- |
| `pnpm run dev` | Runs **both** API and Web apps in parallel | Web: `http://localhost:3000`<br>API: `http://localhost:3001` |
| `pnpm run dev:web` | Runs only the **Next.js frontend** | `http://localhost:3000` |
| `pnpm run dev:api` | Runs only the **NestJS backend API** (watch mode) | `http://localhost:3001` |
| `pnpm run dev:contracts`| Runs the **contracts compiler** in watch mode | — |

> **Tip:** You can omit `run` with pnpm: `pnpm dev`, `pnpm dev:web`, etc.

---

### Alternative: Using `pnpm --filter`

You can also target specific workspace projects from the root using `--filter`:

```bash
# Run web frontend
pnpm --filter collapesia-pos run dev

# Run api backend
pnpm --filter api run dev

# Run contracts in watch mode
pnpm --filter @collapesia/contracts run dev
```

---

### Alternative: Running within package subdirectories

You can `cd` directly into any package folder and execute standard scripts:

```bash
# For Web
cd apps/web
pnpm run dev

# For API
cd apps/api
pnpm run dev
```

---

## 🏗️ Building the Project

Before creating a production build, contracts must be built so dependent apps have access to type declarations. The root `pnpm run build` command handles this sequence automatically:

```bash
# Build contracts, api, and web in topological order
pnpm run build

# Or build individual packages:
pnpm run build:contracts
pnpm run build:api
pnpm run build:web
```

To run built production artifacts:
```bash
# Start API in production
pnpm --filter api run start:prod

# Start Web in production
pnpm --filter collapesia-pos run start
```

---

## 🧪 Linting and Testing

### Linting

Lint code across all packages (oxlint for API, ESLint for Web):

```bash
pnpm run lint
```

Or individually:
```bash
pnpm --filter api run lint
pnpm --filter collapesia-pos run lint
```

### Testing

Run unit and integration tests:

```bash
# Run backend unit tests (Vitest)
pnpm run test

# Run e2e tests
pnpm --filter api run test:e2e

# Run tests in watch mode
pnpm --filter api run test:watch
```
