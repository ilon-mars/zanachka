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

interface MethodField {}

export interface ClassicEnvelopeField extends MethodField {
  id: string;
  placeholder: string;
  envelopeName: string;
  envelopeAmount: number;
}

export type Outcome = {
  name: string;
  amount: number;
}
