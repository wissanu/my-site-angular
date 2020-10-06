import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { OrderRoutingModule } from './order-routing.module';
import { OrderCompComponent } from './order-comp/order-comp.component';
import { SharemoduleModule } from '../shared/sharemodule/sharemodule.module';
import { SharedataModule } from '../shared/sharemodule/sharedata.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OrderCompComponent],
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    SharedataModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
