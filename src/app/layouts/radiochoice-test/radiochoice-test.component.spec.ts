import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiochoiceTestComponent } from './radiochoice-test.component';

describe('RadiochoiceTestComponent', () => {
  let component: RadiochoiceTestComponent;
  let fixture: ComponentFixture<RadiochoiceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiochoiceTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiochoiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
