import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout'
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { BarChartComponent } from './widgets/bar-chart/bar-chart.component';
import { LineChartComponent} from './widgets/line-chart/line.component';
import {BasicColumnComponent} from './widgets/basic-column/basic.component';
import {PercentageAreaComponent} from './widgets/percentage-area/percentage.component';
import {StackedAreaComponent} from './widgets/stacked-area/stacked.component';








@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    BarChartComponent,
    LineChartComponent,
    BasicColumnComponent,
    PercentageAreaComponent,
    StackedAreaComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    BarChartComponent,
    LineChartComponent,
    BasicColumnComponent,
    PercentageAreaComponent,
    StackedAreaComponent
  ]
})
export class SharedModule { }
