import {Component, Input} from '@angular/core';
import {ExerciseHint} from "../../models/exercise-hint.model";
import {fadeInOutAnimation} from "../../animations";

@Component({
  selector: 'app-exercise-hints',
  templateUrl: './exercise-hints.component.html',
  styleUrls: ['./exercise-hints.component.scss'],
  animations: [fadeInOutAnimation]
})
export class ExerciseHintsComponent {

  @Input()
  hints!: ExerciseHint[];
  currentLevel = 0;
  hidden = true;

  toggleHints(): void {
    this.hidden = !this.hidden;
  }

  nextHint(): void {
    if (this.currentLevel < this.hints.length)
      this.currentLevel++;
  }

  previousHint(): void {
    if (this.currentLevel > 0)
      this.currentLevel--;
  }

}
