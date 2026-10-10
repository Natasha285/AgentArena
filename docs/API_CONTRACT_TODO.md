# Backend contract questions — Member 2

Before enabling real backend mode, confirm:

1. Actual API base path and routes for listing experiments, creating experiments, listing agents/benchmarks, retrieving experiment details and retrieving a run/trace.
2. Request body for experiment creation, including whether `suite`, `agents`, and `tasks` are IDs or embedded objects.
3. Exact response schemas, required/nullable fields, status enums, timestamp format and pagination/filter/sort parameters.
4. Whether experiment creation creates and starts a run, or requires a separate start endpoint.
5. How status updates are delivered (polling route, interval/rate limits, or another supported mechanism).
6. Error response schema and how validation errors should be rendered.
7. Official definitions/units for success, correctness, latency, tool error rate, recovery, resource use and cost.
8. Trace event schema and available dependency/order fields for a workflow graph. Until graph dependencies exist, render an ordered timeline.

# Benchmark questions — Member 1

- Confirm benchmark task IDs, display names, categories, difficulty values, expected output type and safe public descriptions.
- Confirm which metadata is safe to expose; never send hidden ground truth or private fixtures to the frontend.

The route names in `src/services/api.ts` are provisional integration placeholders, not an agreed contract.
