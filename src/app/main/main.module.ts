import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { UiModule } from '../ui/ui.module';
import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from '../layout/layout.component';
import { SharemoduleModule } from '../shared/sharemodule/sharemodule.module';




@NgModule({
  declarations: [DefaultComponent, LayoutComponent],
  imports: [
    CommonModule,
    UiModule,
    SharemoduleModule,
    MainRoutingModule
  ]
})
export class MainModule { }
