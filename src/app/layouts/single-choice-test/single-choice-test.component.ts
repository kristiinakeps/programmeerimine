import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TestQuestion} from "../../models/test-question.model";
import {TestAnswer} from "../../models/test-answer.model";

@Component({
  selector: 'app-single-choice-test',
  templateUrl: './single-choice-test.component.html',
  styleUrls: ['./single-choice-test.component.scss']
})
export class SingleChoiceTestComponent implements OnInit, OnChanges {

  @Input() question!: TestQuestion;
  lastGuess: TestAnswer | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.lastGuess = null;
  }

  changeAnswer(answer: TestAnswer): void {
    this.lastGuess = answer;
  }

}
