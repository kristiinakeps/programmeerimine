import {Component, Input} from '@angular/core';
import {TestAnswer} from "../../models/test-answer.model";

@Component({
  selector: 'app-radiochoice-test',
  templateUrl: './radiochoice-test.component.html',
  styleUrls: ['./radiochoice-test.component.scss']
})
export class RadiochoiceTestComponent {

  @Input() title!: string;
  @Input() code: string | null = null;
  @Input() items!: TestAnswer[];
  @Input() formControlNameBase!: string;

  correctText: string = 'Tubli! Kõik on õigesti valitud!';
  incorrectText: string = 'Esineb veel mõni viga. Proovi uuesti!'

  isCorrect = false;
  showFeedback = false;
  selection: TestAnswer | undefined;

  check(): void {
    this.showFeedback = false;
    this.isCorrect = this.selection ? this.selection.correct : false;
    if (this.isCorrect) this.correctText = this.selection!.explanation;
    else if (!this.selection) this.incorrectText = 'Ühtegi vastusevarianti pole valitud.'
    else this.incorrectText = this.selection.explanation
    this.showFeedback = true;
  }

}
