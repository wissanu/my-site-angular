import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from '../../shared/i18n.service';
import { GlobalConstants } from '../../common/GlobalConstants';

@Component({
  selector: 'app-comp-blog',
  templateUrl: './comp-blog.component.html',
  styleUrls: ['./comp-blog.component.css']
})
export class CompBlogComponent implements OnInit {

  current:string = GlobalConstants.language;

  constructor(private translate: TranslateService,
    private i18nlang: I18nService
    ) {
    translate.setDefaultLang('th');
    translate.use(this.current);
  }

  ngOnInit(): void {
    console.log(this.i18nlang)
    this.i18nlang.localeEvent.subscribe(locale => this.translate.use(locale));
  }

}
