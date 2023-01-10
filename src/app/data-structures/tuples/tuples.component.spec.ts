import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuplesComponent } from './tuples.component';

describe('TuplesComponent', () => {
  let component: TuplesComponent;
  let fixture: ComponentFixture<TuplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
