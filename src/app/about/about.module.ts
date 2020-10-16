import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { SharemoduleModule } from '../shared/sharemodule/sharemodule.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutCompComponent } from './about-comp/about-comp.component';
import { I18nserviceModule } from '../shared/sharemodule/i18nservice.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function aboutHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AboutCompComponent],
  imports: [
    CommonModule,
    UiModule,
    SharemoduleModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: aboutHttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    AboutRoutingModule
  ]
})
export class AboutModule { }
