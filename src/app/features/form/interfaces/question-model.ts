export type QuestionType = 'text' | 'textarea' | 'select' | 'checkbox' | 'radio' | undefined;

export interface Question {
  id: number;
  label: string;
  type: QuestionType;
  options?: string[];
  required?: boolean;
}
