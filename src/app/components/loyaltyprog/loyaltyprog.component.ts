import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphCheckComponent } from './graph-svg/check/check.component';
import { GraphMinusComponent } from './graph-svg/minus/minus.component';
import { GraphArrowForwardComponent } from './graph-svg/arrow-forward/arrow-forward.component';
import { GraphArrowRightComponent } from './graph-svg/arrow-right/arrow-right.component';
import { GraphCircleStarComponent } from './graph-svg/circle-star/circle-star.component';
import { GraphCircleStarActiveComponent } from './graph-svg/circle-star-active/circle-star-active.component';
import { SplitedProgresbarComponent } from './splited-progresbar/splited-progresbar.component';
// import {LoadingBarsComponent} from './loading-bar/loading-bar.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';

@Component({
  selector: 'app-loyaltyprog',
  standalone: true,
  imports: [
    CommonModule,
    GraphCheckComponent,
    GraphMinusComponent,
    GraphArrowForwardComponent,
    GraphArrowRightComponent,
    GraphCircleStarComponent,
    GraphCircleStarActiveComponent,
    SplitedProgresbarComponent,
    ProgressbarComponent,
  ],
  templateUrl: './loyaltyprog.component.html',
  styleUrl: './loyaltyprog.component.scss',
  // template: `
  // <app-graph-circle-star
  //   [CurrentColorLoyaltyLevel]="data">
  // </app-graph-circle-star>`
})
export class LoyaltyprogComponent {
  // data = "#EA2727"
}
