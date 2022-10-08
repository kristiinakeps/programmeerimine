import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizeTestComponent } from './categorize-test.component';

describe('CategorizeTestComponent', () => {
  let component: CategorizeTestComponent;
  let fixture: ComponentFixture<CategorizeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorizeTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorizeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
