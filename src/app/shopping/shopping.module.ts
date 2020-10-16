import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShopCompComponent } from './shop-comp/shop-comp.component';
import { UiModule } from '../ui/ui.module';
import { SharemoduleModule } from '../shared/sharemodule/sharemodule.module';
import { SharedataModule } from '../shared/sharemodule/sharedata.module';
import { SearchPipe } from '../shared/search.pipe';
import { FormsModule} from '@angular/forms';
import { I18nserviceModule } from '../shared/sharemodule/i18nservice.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function shopHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [ShopCompComponent, SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    SharemoduleModule,
    I18nserviceModule,
    UiModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: shopHttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
