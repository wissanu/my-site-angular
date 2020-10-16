import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { UiModule } from '../ui/ui.module';
import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from '../layout/layout.component';
import { SharemoduleModule } from '../shared/sharemodule/sharemodule.module';
import { I18nserviceModule } from '../shared/sharemodule/i18nservice.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



export function defaultHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [DefaultComponent, LayoutComponent],
  imports: [
    CommonModule,
    UiModule,
    SharemoduleModule,
    I18nserviceModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: defaultHttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    MainRoutingModule
  ]
})
export class MainModule { }
