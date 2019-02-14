import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

interface IRatingUnit {
  value: number;
  status: boolean;
}
@Component({
  selector: 'app-rating-cell',
  templateUrl: './rating-cell.component.html',
  styleUrls: ['./rating-cell.component.scss']
})
export class RatingCellComponent implements OnInit, OnChanges {
  @Input()
  max: String;
  @Input()
  ratingValue = 0;
  @Output()
  enterValue = new EventEmitter<number>();
  ratingUnit: Array<IRatingUnit> = [];
  constructor() { }

  ngOnInit() {
    this.calculator(this.max);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('max' in changes) {
      let max = changes.max.currentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
    }
  }
  calculator (max) {
    this.ratingUnit = Array.from({length: max},
      (_, index) => ({
          value: index + 1,
          status: false
      }));
  }
  select (index) {
    this.ratingValue = index + 1;
    this.enterValue.emit(this.ratingValue);
  }
  enter (index) {
    this.ratingUnit.forEach( (item, inx) => item.status = inx <= index);
  }
  reset () {
    this.ratingUnit.forEach((item, inx) => item.status = inx < this.ratingValue);
  }
}
