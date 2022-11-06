import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TestQuestion} from "../../models/test-question.model";
import {TestAnswer} from "../../models/test-answer.model";

@Component({
  selector: 'app-single-choice-test',
  templateUrl: './single-choice-test.component.html',
  styleUrls: ['./single-choice-test.component.scss']
})
export class SingleChoiceTestComponent implements OnChanges {

  @Input() question!: TestQuestion;
  lastGuess: TestAnswer | null = null;

  ngOnChanges(changes: SimpleChanges) {
    this.lastGuess = null;
  }

  changeAnswer(answer: TestAnswer): void {
    this.lastGuess = answer;
  }

}
