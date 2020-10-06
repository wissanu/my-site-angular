import { NgModule } from '@angular/core';
import { CardelevetionDirective } from '../cardelevetion.directive';
import { LayoutComponent } from '../../layout/layout.component';



@NgModule({
  declarations: [CardelevetionDirective],
  exports: [CardelevetionDirective]

})
export class SharemoduleModule { }
