import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseHintsComponent } from './exercise-hints.component';

describe('ExerciseHintsComponent', () => {
  let component: ExerciseHintsComponent;
  let fixture: ComponentFixture<ExerciseHintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseHintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
