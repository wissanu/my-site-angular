import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { SharemoduleModule } from '../shared/sharemodule/sharemodule.module';
import { BlogRoutingModule } from './blog-routing.module';
import { CompBlogComponent } from './comp-blog/comp-blog.component';


@NgModule({
  declarations: [CompBlogComponent],
  imports: [
    CommonModule,
    SharemoduleModule,
    UiModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
