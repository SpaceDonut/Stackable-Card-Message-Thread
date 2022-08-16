export interface Message {
  subject_id: number;
  question_id: number;
  thread_id: string;
  reply_to?: string;
  text: string;
  created_at: string;
  subject: string;
  question: string;
  team: string;
  id: string;
  score?: number;
  acknowledged?: boolean;
}

export type ThreadsList = Message[][];
