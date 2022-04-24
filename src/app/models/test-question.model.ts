import {TestAnswer} from "./test-answer.model";

export class TestQuestion {
  constructor(
    public question: string,
    public text: string,
    public answers: TestAnswer[]
  ) {}
}
