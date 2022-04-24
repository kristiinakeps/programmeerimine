import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChoiceTestComponent } from './single-choice-test.component';

describe('SingleChoiceTestComponent', () => {
  let component: SingleChoiceTestComponent;
  let fixture: ComponentFixture<SingleChoiceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleChoiceTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleChoiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
