import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBlankDropdownTestComponent } from './fill-blank-dropdown-test.component';

describe('FilBlankDropdownTestComponent', () => {
  let component: FillBlankDropdownTestComponent;
  let fixture: ComponentFixture<FillBlankDropdownTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillBlankDropdownTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBlankDropdownTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
