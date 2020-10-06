import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { MainModule } from './main/main.module';
import { ShoppingModule } from './shopping/shopping.module';
import { SharedataModule } from './shared/sharemodule/sharedata.module';
import { SharemoduleModule } from './shared/sharemodule/sharemodule.module';
import { OrderModule } from './order/order.module';
import { BlogModule } from './blog/blog.module';
import { AboutModule } from './about/about.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiModule,
    AppRoutingModule,
    SharedataModule,
    SharemoduleModule,
    MainModule,
    ShoppingModule,
    OrderModule,
    BlogModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
