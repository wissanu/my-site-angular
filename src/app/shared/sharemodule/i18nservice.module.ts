import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { I18nService } from '../i18n.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [I18nService]

})
export class I18nserviceModule { }
