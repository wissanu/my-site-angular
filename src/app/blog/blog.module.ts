import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { SharemoduleModule } from '../shared/sharemodule/sharemodule.module';
import { BlogRoutingModule } from './blog-routing.module';
import { CompBlogComponent } from './comp-blog/comp-blog.component';
import { I18nserviceModule } from '../shared/sharemodule/i18nservice.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function resourceHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [CompBlogComponent],
  imports: [
    CommonModule,
    SharemoduleModule,
    UiModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: resourceHttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    BlogRoutingModule
  ]
})
export class BlogModule { }
