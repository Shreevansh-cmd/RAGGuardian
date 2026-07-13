// ─── Threat / Security Types ───
export type SeverityLevel = 'critical' | 'high' | 'medium' | 'low';
export type ThreatStatus = 'blocked' | 'allowed' | 'flagged';

export interface Threat {
  id: string;
  time: string;
  prompt: string;
  attackType: string;
  severity: SeverityLevel;
  status: ThreatStatus;
}

// ─── Request Types ───
export type RequestResult = 'clean' | 'flagged' | 'blocked';

export interface RecentRequest {
  id: string;
  time: string;
  prompt: string;
  result: RequestResult;
}

// ─── Document Types ───
export type DocumentStatus = 'processing' | 'indexed' | 'failed';

export interface Document {
  id: string;
  name: string;
  size: string;
  sizeBytes: number;
  uploadDate: string;
  status: DocumentStatus;
}

// ─── Stats Types ───
export interface StatCard {
  id: string;
  label: string;
  value: string | number;
  delta?: string;
  deltaType?: 'up' | 'down' | 'neutral';
  iconName: string;
  accentColor: string;
}

// ─── Prompt Analysis Types ───
export type RiskLevel = 'safe' | 'medium' | 'high' | 'critical';

export interface AttackDetected {
  type: string;
  confidence: number;
}

export interface PromptAnalysisResult {
  securityScore: number;
  riskLevel: RiskLevel;
  detectedAttacks: AttackDetected[];
  recommendations: string[];
  analysisTime: string;
}
