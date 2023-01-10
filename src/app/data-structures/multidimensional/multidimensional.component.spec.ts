import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultidimensionalComponent } from './multidimensional.component';

describe('MultidimensionalComponent', () => {
  let component: MultidimensionalComponent;
  let fixture: ComponentFixture<MultidimensionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultidimensionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultidimensionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
