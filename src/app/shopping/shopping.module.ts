import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShopCompComponent } from './shop-comp/shop-comp.component';
import { UiModule } from '../ui/ui.module';
import { SharemoduleModule } from '../shared/sharemodule/sharemodule.module';
import { SharedataModule } from '../shared/sharemodule/sharedata.module';
import { SearchPipe } from '../shared/search.pipe';
import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ShopCompComponent, SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    SharemoduleModule,
    UiModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
