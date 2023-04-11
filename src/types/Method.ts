import type { ComputedRef } from 'vue';
import type { FixedMethodEnum, MethodEnum } from '@/enums';

export interface MethodDescription {
  key: MethodEnum;
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
};

export type FixedPercent = number[];

export type MethodsPercents = Record<FixedMethodEnum, FixedPercent>;

export type FixedPercentField = Record<
  FixedMethodEnum,
  {
    value: string;
    fieldsList: ComputedRef<
      {
        id: string;
        name: string;
        amount: string;
      }[]
    >;
  }
>;
