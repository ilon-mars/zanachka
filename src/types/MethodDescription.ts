export interface MethodDescription {
  key: string;
  name: string;
  description: string;
  steps: string[];
  tips?: string[];
  note?: string;
}

export interface MethodWithActivity extends MethodDescription {
  isActive: boolean;
}
