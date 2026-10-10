export type RunStatus = 'completed' | 'failed' | 'running' | 'timed_out' | 'cancelled';
export interface Agent { id: string; name: string; family: string; }
export interface Benchmark { id: string; name: string; category: string; difficulty: 'Easy'|'Medium'|'Hard'; description: string; outputType: string; }
export interface Experiment { id: string; name: string; suite: string; agents: string[]; runs: number; status: RunStatus; createdAt: string; successRate: number | null; }
export interface TraceStep { id: string; time: string; type: string; tool?: string; summary: string; status: 'success'|'failed'|'retry'; durationMs: number | null; input?: string; output?: string; }
export interface Run { id: string; experimentId: string; agent: string; taskId: string; status: RunStatus; success: boolean | null; latencyMs: number | null; inputTokens: number | null; outputTokens: number | null; toolCalls: number | null; retries: number | null; errorCount: number | null; score: number | null; trace: TraceStep[]; }
