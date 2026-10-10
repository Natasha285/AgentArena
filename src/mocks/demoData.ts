import type { Agent, Benchmark, Experiment, Run } from '../types/domain';
export const agents: Agent[] = [
 {id:'react-agent',name:'React Agent',family:'Tool-using'}, {id:'plan-execute',name:'Plan & Execute',family:'Planning'}, {id:'reflexion-agent',name:'Reflexion Agent',family:'Self-correcting'}
];
export const benchmarks: Benchmark[] = [
 {id:'web-001',name:'Multi-page information lookup',category:'Web navigation',difficulty:'Medium',description:'Find and cross-check information across multiple pages.',outputType:'Structured JSON'},
 {id:'tool-002',name:'Tool argument validation',category:'Tool use',difficulty:'Easy',description:'Select a tool and provide arguments matching its schema.',outputType:'JSON'},
 {id:'reason-003',name:'Multi-constraint planning',category:'Reasoning',difficulty:'Hard',description:'Complete a task while respecting a set of explicit constraints.',outputType:'Text'},
 {id:'recover-004',name:'Recover from tool failure',category:'Reliability',difficulty:'Hard',description:'Recover from a transient tool failure and finish the task.',outputType:'Structured JSON'},
 {id:'extract-005',name:'Table data extraction',category:'Data extraction',difficulty:'Medium',description:'Extract selected fields from a semi-structured source.',outputType:'CSV'}
];
export const experiments: Experiment[] = [
 {id:'exp-demo-104',name:'Tool reliability baseline',suite:'Core reliability',agents:['react-agent','plan-execute'],runs:48,status:'completed',createdAt:'2026-10-09T14:22:00Z',successRate:79.2},
 {id:'exp-demo-103',name:'Reasoning task comparison',suite:'Reasoning v1',agents:['plan-execute','reflexion-agent'],runs:30,status:'completed',createdAt:'2026-10-08T11:05:00Z',successRate:83.3},
 {id:'exp-demo-102',name:'Web navigation smoke test',suite:'Web navigation',agents:['react-agent'],runs:12,status:'failed',createdAt:'2026-10-07T16:42:00Z',successRate:58.3},
 {id:'exp-demo-101',name:'Recovery strategy evaluation',suite:'Core reliability',agents:['reflexion-agent','react-agent'],runs:24,status:'running',createdAt:'2026-10-10T09:12:00Z',successRate:null}
];
export const runs: Run[] = [
 {id:'run-demo-8101',experimentId:'exp-demo-104',agent:'React Agent',taskId:'tool-002',status:'completed',success:true,latencyMs:1820,inputTokens:1240,outputTokens:382,toolCalls:3,retries:0,errorCount:0,score:1,trace:[{id:'s1',time:'00:00.000',type:'Planning',summary:'Selected the schema validation path.',status:'success',durationMs:120,input:'Task request',output:'Plan created'},{id:'s2',time:'00:00.120',type:'Tool call',tool:'schema_validator',summary:'Validated tool arguments against the declared schema.',status:'success',durationMs:460,input:'{"query":"status"}',output:'Arguments valid'},{id:'s3',time:'00:00.580',type:'Validation',summary:'Checked the returned output against task requirements.',status:'success',durationMs:310,input:'Tool result',output:'All constraints satisfied'},{id:'s4',time:'00:00.890',type:'Completion',summary:'Returned the final structured result.',status:'success',durationMs:90,input:'Validated result',output:'{"success":true}'}]},
 {id:'run-demo-8102',experimentId:'exp-demo-104',agent:'Plan & Execute',taskId:'tool-002',status:'failed',success:false,latencyMs:2940,inputTokens:1520,outputTokens:430,toolCalls:4,retries:1,errorCount:1,score:0,trace:[{id:'s1',time:'00:00.000',type:'Planning',summary:'Planned the tool invocation.',status:'success',durationMs:150,input:'Task request',output:'Plan created'},{id:'s2',time:'00:00.150',type:'Tool call',tool:'schema_validator',summary:'Submitted an argument with a missing required field.',status:'failed',durationMs:620,input:'{"query":null}',output:'Missing required field: query'},{id:'s3',time:'00:00.770',type:'Retry',summary:'Retried after correcting the argument.',status:'retry',durationMs:700,input:'Corrected argument',output:'Retry attempted'},{id:'s4',time:'00:01.470',type:'Validation',summary:'The final output did not satisfy the expected schema.',status:'failed',durationMs:380,input:'Tool result',output:'Required field missing'}]}
];
