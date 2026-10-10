# AgentArena Frontend (Member 3)

React + TypeScript + Vite frontend starter for the AgentArena AI-agent benchmarking platform. The public repository README describes the project as being in initial development and the repository currently exposes no frontend source or agreed backend API contract. This package is intentionally separate so it can be reviewed and copied into the shared repository without overwriting teammates' work.

## Features in this starter

- Responsive developer-tool layout and navigation.
- Overview dashboard with sample metrics and charts.
- Experiment list with search, status filtering and sorting.
- Experiment configuration form with required-field validation.
- Agent comparison and sortable leaderboard views.
- Benchmark explorer with category/difficulty filters.
- Experiment details and run trace inspector with expandable recorded steps.
- Explicit demo-mode banner and isolated mock data.
- Typed API boundary, configurable base URL, timeout and actionable errors.

## Important data boundary

`VITE_DEMO_MODE=true` is the default. All shown experiment, metric and trace values are **illustrative demo data**, not measured outcomes. Demo mode intentionally blocks experiment creation rather than pretending the backend accepted a request. With demo mode disabled, the service layer expects the following *provisional* routes:

- `GET /experiments`
- `POST /experiments`
- `GET /benchmarks`
- `GET /agents`
- `GET /runs/{run_id}`

These paths and response schemas have **not** been verified with Member 2. Confirm the actual API routes, payload fields, status enum, pagination strategy and error response shape before integrating. Do not treat these provisional endpoints as an agreed contract. The current `Experiment` and `Run` types are frontend display models and must be adapted to real backend schemas at the service boundary.

## Run locally

Requires Node.js 20+ (Node.js 22 recommended).

```bash
npm install
cp .env.example .env.local
npm run dev
```

Vite prints the local development address. The UI uses demo data by default and does not need a backend to browse the screens.

## Connect the backend (after contract agreement)

Edit `.env.local`:

```env
VITE_DEMO_MODE=false
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

Set the base URL to the address Member 2 confirms. Do not place provider credentials or secrets in frontend environment variables. When the backend is unreachable in real mode, the app displays an error instead of silently falling back to mock data.

## Quality checks

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

Checks have not been run in this environment because package installation/network access is unavailable here. Run them after installing dependencies and fix any reported issues before merging. This package does not yet include a complete automated test suite.

## Suggested integration steps

1. Review this package against the shared repository and create a feature branch.
2. Agree endpoint paths and response schemas with Member 2; agree benchmark metadata semantics with Member 1.
3. Add the real response adapters and endpoint-specific loading/pagination behavior.
4. Add Vitest/Testing Library coverage for form validation, table filtering, missing metrics, service errors and trace expansion.
5. Run all checks and test against the live backend before creating a pull request.

## Ownership boundaries

The frontend formats and visualizes backend-provided measurements only. It does not implement agent execution, benchmark validation, scoring, database access, or backend observability. It does not display hidden ground truth or private chain-of-thought.
