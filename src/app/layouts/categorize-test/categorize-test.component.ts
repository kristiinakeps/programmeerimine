import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {CategorizeTestCategory} from "../../models/categorize-test-category.model";
import {CategorizeTestItem} from "../../models/categorize-test-item.model";
import {shuffle} from "../../utils";

@Component({
  selector: 'app-categorize-test',
  templateUrl: './categorize-test.component.html',
  styleUrls: ['./categorize-test.component.scss']
})
export class CategorizeTestComponent implements OnInit {

  @Input()
  categories!: CategorizeTestCategory[]
  @Input()
  items!: CategorizeTestItem[];
  @Input()
  correctAnwser: string = 'Tubli! Kõik väärtused on õigetes tulpades!';

  showFeedback = false;
  isCorrect = false;
  feedbackText = '';

  ngOnInit(): void {
    this.items = shuffle([...this.items]);
    let i = 0
    for (const item of this.items) {
      this.categories[i].items.push(item);
      if (i < this.categories.length - 1) i++;
      else i = 0;
    }
  }

  drop(event: CdkDragDrop<CategorizeTestItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  check(): void {
    for (const categroy of this.categories) {
      for (const item of categroy.items) {
        if (item.category !== categroy.category) {
          this.isCorrect = false;
          this.feedbackText = 'Kas oled kindel, et ' + item.text + ' on õiges tulbas?';
          this.showFeedback = true;
          return;
        }
      }
    }
    this.feedbackText = this.correctAnwser;
    this.isCorrect = true;
    this.showFeedback = true;
  }

}
