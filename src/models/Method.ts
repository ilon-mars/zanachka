import { Outcome } from '@/types';

class MethodModel {
  income: number;

  constructor(income: string) {
    this.income = +income;
  }
}

export class ClassicEnvelopeModel extends MethodModel {
  outcomes: Outcome[];
  moneyLeft: number;

  constructor(income: string, outcomes: Outcome[]) {
    super(income);

    this.outcomes = outcomes;
  }
}

export class FixedEnvelopesModel extends MethodModel {
  outcomes: Outcome[];

  constructor(income: string) {
    super(income);
  }
}
