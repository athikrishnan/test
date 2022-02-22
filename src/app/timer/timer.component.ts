import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  @Input() from = '2022-02-22T02:25:57.652Z';
  date?: Date;
  timer: string = '';

  constructor() { }

  ngOnInit(): void {
    this.date = new Date(this.from);

    interval(1000).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      if (this.date) {
        this.date.setSeconds(this.date.getSeconds() + 10)
        this.timer = this.date.toLocaleString();
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
