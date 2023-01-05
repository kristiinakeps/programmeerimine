import {Component, Input, OnInit} from '@angular/core';
import {TestAnswer} from "../../models/test-answer.model";
import {UntypedFormBuilder, UntypedFormControl} from "@angular/forms";
import {shuffle} from "../../utils";

@Component({
  selector: 'app-multichoice-test',
  templateUrl: './multichoice-test.component.html',
  styleUrls: ['./multichoice-test.component.scss']
})
export class MultichoiceTestComponent implements OnInit {

  @Input() title!: string;
  @Input() code: string | null = null;
  @Input() items!: TestAnswer[];
  @Input() formControlNameBase!: string;
  @Input() fileName: string | null = null;
  @Input() fileContents: string | null = null;

  correct = 'Tubli! Kõik on õigesti valitud!'
  incorrect = 'Esineb veel mõni viga. Proovi uuesti!'
  isCorrect = false;
  showFeedback = false;
  form = this.fb.group({});

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.items = shuffle([...this.items]);
    for (let i = 0; i < this.items.length; i++) {
      this.form.addControl(this.formControlNameBase + i, new UntypedFormControl(false));
    }
  }

  check(): void {
    this.showFeedback = false;
    this.isCorrect = true;
    for (let i = 0; i < this.items.length; i++) {
      if (this.form.controls[this.formControlNameBase + i].value != this.items[i].correct) {
        this.isCorrect = false;
        this.incorrect = 'Esineb veel mõni viga. ' + this.items[i].explanation + ' Proovi uuesti!';
        break;
      }
    }
    this.showFeedback = true;
  }

}
