import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Hal2Component } from '../hal2/hal2.component';
import { Hal1Component } from '../hal1/hal1.component';


const rout = [
  { path: ':nama', component: Hal2Component },
  { path: '**', component: Hal1Component }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rout)
  ]
})
export class RoutingModule { }
