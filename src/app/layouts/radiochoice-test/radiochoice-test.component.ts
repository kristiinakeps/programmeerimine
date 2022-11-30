import {Component, Input, OnInit} from '@angular/core';
import {TestAnswer} from "../../models/test-answer.model";
import {shuffle} from "../../utils";

@Component({
  selector: 'app-radiochoice-test',
  templateUrl: './radiochoice-test.component.html',
  styleUrls: ['./radiochoice-test.component.scss']
})
export class RadiochoiceTestComponent implements OnInit {

  @Input() title!: string;
  @Input() code: string | null = null;
  @Input() items!: TestAnswer[];
  @Input() formControlNameBase!: string;
  @Input() fileName: string | null = null;
  @Input() fileContents: string | null = null;

  correctText: string = 'Tubli! Kõik on õigesti valitud!';
  incorrectText: string = 'Esineb veel mõni viga. Proovi uuesti!'

  isCorrect = false;
  showFeedback = false;
  selection: TestAnswer | undefined;

  ngOnInit(): void {
    this.items = shuffle([...this.items]);
  }

  check(): void {
    this.showFeedback = false;
    this.isCorrect = this.selection ? this.selection.correct : false;
    if (this.isCorrect) this.correctText = this.selection!.explanation;
    else if (!this.selection) this.incorrectText = 'Ühtegi vastusevarianti pole valitud.'
    else this.incorrectText = this.selection.explanation
    this.showFeedback = true;
  }

}
