import { agents, benchmarks, experiments, runs } from '../mocks/demoData';
import type { Benchmark, Experiment, Run } from '../types/domain';
const demo = import.meta.env.VITE_DEMO_MODE !== 'false';
const baseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
export const isDemoMode = () => demo;
async function request<T>(path: string, init?: RequestInit): Promise<T> {
  if (demo) throw new Error('This action is not available in demo mode. Connect the agreed backend to launch real experiments.');
  if (!baseUrl) throw new Error('Backend URL is not configured. Set VITE_API_BASE_URL in .env.local.');
  const controller = new AbortController(); const timer = window.setTimeout(() => controller.abort(), 12000);
  try { const response = await fetch(`${baseUrl}${path}`, {...init, signal: controller.signal, headers:{'Content-Type':'application/json',...init?.headers}}); if (!response.ok) throw new Error(`Backend request failed (${response.status}). Check the API service and try again.`); return await response.json() as T; }
  catch (e) { if (e instanceof DOMException && e.name === 'AbortError') throw new Error('The backend request timed out. Check that the API is running and try again.'); throw e; }
  finally { window.clearTimeout(timer); }
}
export const api = {
 async getExperiments(): Promise<Experiment[]> { return demo ? experiments : request('/experiments'); },
 async getBenchmarks(): Promise<Benchmark[]> { return demo ? benchmarks : request('/benchmarks'); },
 async getAgents() { return demo ? agents : request<{id:string;name:string;family:string}[]>('/agents'); },
 async getRun(id:string): Promise<Run> { if (demo) { const run = runs.find(r=>r.id===id); if (!run) throw new Error('Demo run not found.'); return run; } return request(`/runs/${encodeURIComponent(id)}`); },
 async createExperiment(payload:{name:string;suite:string;agents:string[];tasks:string[]}) { return request<{id:string}>('/experiments',{method:'POST',body:JSON.stringify(payload)}); }
};
