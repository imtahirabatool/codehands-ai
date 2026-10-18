// Frozen Fri Oct 23. Changes need a PR approved by every consuming SIG.

export type SessionStatus = "queued" | "running" | "awaiting_approval" | "approved" | "rejected" | "failed" | "stopped";
export type AgentKind = "claude-code" | "codex" | "codehands";
export type CommandKind = "start" | "stop" | "approve" | "reject";

export interface Device   { id: string; userId: string; name: string; lastSeenAt: string }
export interface Project  { id: string; deviceId: string; name: string; path: string }
export interface Session  { id: string; projectId: string; status: SessionStatus; agent: AgentKind; model: string; costUsd: number; diff?: string; createdAt: string }
export interface SessionEvent { id: number; sessionId: string; type: EventType; payload: unknown; at: string }
export interface Command  { id: string; sessionId?: string; projectId: string; kind: CommandKind; createdBy: string; createdAt: string }

export const EVENT_TYPES = [
  "run.started", "phase.started", "tool.called", "model.called",
  "artifact.saved", "phase.finished", "run.finished",
] as const;
export type EventType = (typeof EVENT_TYPES)[number];
