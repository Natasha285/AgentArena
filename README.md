# AgentArena — An Open-Source AI Agent Benchmarking Platform

**Evaluate AI agents. Compare their performance. Understand why they fail.**

AgentArena is a benchmarking platform designed to evaluate how reliably AI agents complete multi-step tasks in a controlled environment. It enables users to run different agent implementations against the same benchmark tasks and compare their correctness, task completion rate, execution time, resource usage and ability to recover from errors.

The initial release focuses on evaluating **existing open-source agents and freely available models**. A future release will support custom-built agents and additional machine-learning-based performance prediction.

## Project Goals

- Benchmark existing AI agents using standardized tasks.
- Evaluate task completion using objectively verifiable outcomes.
- Compare agent performance, latency, resource consumption and reliability.
- Capture execution traces, including tool calls, errors and recovery attempts.
- Identify common failure patterns and compare different agent architectures.
- Provide an interactive dashboard with experiment results and leaderboards.
- Establish an extensible framework for evaluating custom agents in future releases.

## Key Features

### 1. Agent Benchmarking
Run multiple agent implementations against the same set of tasks under controlled conditions.

### 2. Objective Evaluation
Validate agent outputs using deterministic checks wherever possible, rather than relying solely on subjective LLM judgments.

### 3. Performance Metrics
Measure task success rate, correctness, latency, tool errors, retry behavior and resource usage.

### 4. Execution Trace Visualization
Inspect the sequence of agent actions, tool calls, errors and recovery attempts.

### 5. Experiment Comparison
Compare agents across tasks, difficulty levels and repeated trials.

### 6. Interactive Leaderboard
Rank agents using configurable evaluation criteria, with separate views for reliability, speed, cost and recovery.

### 7. Extensible Architecture
Support additional agent implementations, benchmark tasks and evaluation methods without redesigning the platform.

## Scope

### Release 1 — Existing Agent Benchmarking

The first release will focus on:

- Integrating compatible open-source agent implementations.
- Running locally available, freely usable models where supported.
- Creating a controlled benchmark suite.
- Implementing objective task validation and performance metrics.
- Recording execution traces and experiment results.
- Building a dashboard for comparing agents.

### Release 2 — Custom Agents and Predictive Analytics

Future enhancements may include:

- Integrating custom-built agents.
- Comparing planning, memory and retry strategies.
- Training a model to predict task success from execution traces.
- Recommending suitable agent configurations for different task types.
- Expanding the benchmark suite and statistical analysis.

## Technology Stack

| Component | Technology |
|---|---|
| Agent orchestration | Python, LangGraph where appropriate |
| Backend API | FastAPI |
| Database | PostgreSQL |
| Agent execution isolation | Docker |
| Observability | OpenTelemetry |
| Frontend | React and TypeScript |
| Workflow visualization | React-compatible graph visualization library |
| Machine learning extension | scikit-learn |
| Version control | Git and GitHub |

The stack may be simplified during the initial prototype to keep development manageable and entirely free.

## Proposed Architecture

1. **Benchmark Manager:** Selects tasks, agent configurations and experiment settings.
2. **Agent Adapter Layer:** Integrates different agent implementations through a common interface.
3. **Execution Runner:** Executes tasks with controlled tools, timeouts and resource limits.
4. **Trace Collector:** Records actions, tool calls, timings, errors and retries.
5. **Evaluation Engine:** Validates outputs and calculates benchmark scores.
6. **Results Store:** Persists tasks, runs, traces and metrics.
7. **Analytics Layer:** Aggregates results and identifies failure patterns.
8. **Dashboard:** Displays experiment progress, execution graphs, comparisons and leaderboards.

## Evaluation Metrics

| Metric | Purpose |
|---|---|
| Task success rate | Measures the proportion of tasks completed correctly |
| Output correctness | Checks whether results satisfy task-specific requirements |
| Execution latency | Measures the time required to complete a task |
| Tool error rate | Measures the frequency of failed tool calls |
| Recovery rate | Measures how often an agent recovers from recoverable failures |
| Resource usage | Tracks tokens, memory or compute usage when measurable |
| Cost per successful task | Compares monetary costs when applicable pricing data exists |
| Constraint violations | Detects failures to follow task requirements |

Metrics will be calculated from recorded executions and independently validated results wherever possible.

## Zero-Budget Development Principle

AgentArena is being developed without a paid model or API budget.

The project prioritizes:

- Open-source software and compatible licenses.
- Local inference using freely available models.
- Free development tools and local infrastructure.
- Synthetic or bundled benchmark datasets.
- Reproducible experiments with transparent resource requirements.

A model being open-weight does not automatically mean that its license permits every use. Model licenses, agent licenses, dependencies, hardware requirements and usage restrictions must be checked before integration.

Some models may require substantial RAM or GPU memory. Free hosted inference services may also impose usage limits, so local execution is preferred when feasible.

## Initial Repository Structure

```text
agentarena/
├── agents/              # Agent adapters and integrations
├── benchmarks/          # Task definitions and datasets
├── evaluation/          # Validators and scoring functions
├── backend/             # API and experiment management
├── frontend/            # Dashboard and workflow visualization
├── tests/               # Unit, integration and system tests
├── docs/                # Architecture and development documentation
├── docker-compose.yml
├── requirements.txt
├── .env.example
├── .gitignore
└── README.md
```

The repository structure may evolve as the implementation develops.

## Development Roadmap

- [ ] Define the common agent interface.
- [ ] Select compatible open-source agents and local models.
- [ ] Implement the first benchmark tasks and validators.
- [ ] Build the experiment execution pipeline.
- [ ] Record execution traces and performance metrics.
- [ ] Integrate the results database and backend API.
- [ ] Build the dashboard and leaderboard.
- [ ] Run controlled, repeated experiments.
- [ ] Document results and limitations.
- [ ] Add custom-agent integration and predictive analytics in a future release.

## Research and Evaluation Principles

- Give compared agents equivalent tasks, tools and resource limits.
- Record the model, configuration and environment used in each experiment.
- Include failures and timeouts in reported results.
- Repeat nondeterministic experiments where feasible.
- Separate objective correctness checks from subjective quality judgments.
- Report limitations and avoid claiming that a small benchmark represents all AI-agent capabilities.

## Team Development

The project is divided into three workstreams:

1. **Agent Integration and Benchmark Tasks**
2. **Backend, Evaluation and Observability**
3. **Frontend and Visualization**

Team members will coordinate through GitHub issues, feature branches, pull requests and documented API contracts.

## Contributing

Contributions should follow the agreed project structure and common interfaces. New agents and benchmark tasks should include setup instructions, license information and appropriate tests.

## License

The project license will be selected and added before the first public release. Third-party agent implementations, models and datasets may have separate licenses and restrictions.

## Project Status

**Status:** Initial development and architecture planning.

Agent integrations, benchmark results and performance claims will be documented as they are implemented and tested.
