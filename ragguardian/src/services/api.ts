import type { PromptAnalysisResult } from '@/types';
import { getAnalysisForPrompt } from '@/data/mockData';

/**
 * Simulates a backend API call to analyze a prompt for security threats.
 * Replace the implementation with a real fetch() call when backend is ready.
 */
export async function analyzePrompt(prompt: string): Promise<PromptAnalysisResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return getAnalysisForPrompt(prompt);
}

/**
 * Simulates uploading a document to the backend.
 * Replace with real FormData + fetch() when backend is ready.
 */
export async function uploadDocument(_file: File): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return { success: true, message: 'Document uploaded successfully' };
}

/**
 * Simulates deleting a document by ID.
 */
export async function deleteDocument(_id: string): Promise<{ success: boolean }> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { success: true };
}
