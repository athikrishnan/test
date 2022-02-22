import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onCount(count: number) {
    this.count = count;
  }
}
