import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TileComponent } from './tile/tile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NumberTransformPipe } from './number-transform.pipe';
import { CounterComponent } from './counter/counter.component';
import { TimerModule } from './timer/timer.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TileComponent,
    NumberTransformPipe,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    TimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
