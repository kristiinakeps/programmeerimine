import {Component, Input} from '@angular/core';
import {FillBlankDropdownItem} from "../../models/fill-blank-dropdown-item.model";
import {CORRECT, INCORRECT, NONE} from "../../constants";

@Component({
  selector: 'app-fill-blank-dropdown-test',
  templateUrl: './fill-blank-dropdown-test.component.html',
  styleUrls: ['./fill-blank-dropdown-test.component.scss']
})

export class FillBlankDropdownTestComponent {

  @Input()
  items!: FillBlankDropdownItem[];
  @Input()
  title!: string;
  @Input()
  showArrow = false;
  correct = 'Tubli! Kõik lüngad on õigesti täidetud.'
  incorrect = 'Mõnes lüngas pole veel päris õige vastus. Proovi uuesti!'
  isCorrect = false;
  showFeedback = false;

  changeSelectedOption(item: FillBlankDropdownItem, option: string): void {
    item.selectedOption = option;
    item.color = NONE;
    this.showFeedback = false;
  }

  check(): void {
    this.isCorrect = true
    for (const item of this.items) {
      if (item.selectedOption === item.correctAnswer) item.color = CORRECT;
      else {
        this.isCorrect = false;
        item.color = INCORRECT;
      }
    }
    this.showFeedback = true;
  }

}
