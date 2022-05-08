import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorderTestComponent } from './reorder-test.component';

describe('ReorderTestComponent', () => {
  let component: ReorderTestComponent;
  let fixture: ComponentFixture<ReorderTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReorderTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReorderTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
