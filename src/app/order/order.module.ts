import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { OrderRoutingModule } from './order-routing.module';
import { OrderCompComponent } from './order-comp/order-comp.component';
import { SharemoduleModule } from '../shared/sharemodule/sharemodule.module';
import { SharedataModule } from '../shared/sharemodule/sharedata.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18nserviceModule } from '../shared/sharemodule/i18nservice.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function orderHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [OrderCompComponent],
  imports: [
    CommonModule,
    UiModule,
    I18nserviceModule,
    FormsModule,
    ReactiveFormsModule,
    SharedataModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: orderHttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    OrderRoutingModule
  ]
})
export class OrderModule { }
