import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {shuffle} from "../../utils";
import {ReorderTestQuestion} from "../../models/reorder-test-question.model";
import {ReorderTestItem} from "../../models/reorder-test-item.model";

@Component({
  selector: 'app-reorder-test',
  templateUrl: './reorder-test.component.html',
  styleUrls: ['./reorder-test.component.scss']
})
export class ReorderTestComponent implements OnInit {

  @Input() question!: ReorderTestQuestion;
  shuffledItems!: ReorderTestItem[];
  showFeedback = false;
  isCorrect = false;
  feedbackText = '';

  ngOnInit(): void {
    this.shuffledItems = shuffle([...this.question.items]);
  }

  drop(event: CdkDragDrop<ReorderTestItem[]>) {
    moveItemInArray(this.shuffledItems, event.previousIndex, event.currentIndex);
  }

  submitAnwser(): void {
    for (let i = 0; i < this.shuffledItems.length; i++) {
      if (this.shuffledItems[i].text != this.question.items[i].text) {
        this.isCorrect = false;
        this.feedbackText = this.shuffledItems[i].wrongOrderHint;
        this.showFeedback = true;
        return;
      }
    }
    this.isCorrect = true;
    this.feedbackText = this.question.correctOrder;
    this.showFeedback = true;
  }

}
