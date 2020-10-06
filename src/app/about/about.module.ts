import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { SharemoduleModule } from '../shared/sharemodule/sharemodule.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutCompComponent } from './about-comp/about-comp.component';


@NgModule({
  declarations: [AboutCompComponent],
  imports: [
    CommonModule,
    UiModule,
    SharemoduleModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
