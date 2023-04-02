export interface Method {
  key: string;
  name: string;
  description: string;
  steps: string[];
  tips?: string[];
  note?: string;
}

export interface MethodWithActivity extends Method {
  isActive: boolean;
}
