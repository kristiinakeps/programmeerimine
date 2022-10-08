import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultichoiceTestComponent } from './multichoice-test.component';

describe('MultichoiceTestComponent', () => {
  let component: MultichoiceTestComponent;
  let fixture: ComponentFixture<MultichoiceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultichoiceTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultichoiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
