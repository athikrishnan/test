import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit, OnChanges {
  @Input('title') title: string = '';
  @Input('progress') progress: number = 0;
  @Input('count') count: number = 0;

  get modifiedCount(): number {
    return this.count * 5;
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

}
