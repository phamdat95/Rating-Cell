import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCellComponent } from './rating-cell.component';

describe('RatingCellComponent', () => {
  let component: RatingCellComponent;
  let fixture: ComponentFixture<RatingCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
