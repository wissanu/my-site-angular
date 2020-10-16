import { Component, OnInit } from '@angular/core';
import { IPost } from '../../shared/menu-item';
import { DataService } from '../../shared/data.service';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from '../../shared/i18n.service';
import { GlobalConstants } from '../../common/GlobalConstants';

@Component({
  selector: 'app-shop-comp',
  templateUrl: './shop-comp.component.html',
  styleUrls: ['./shop-comp.component.css']
})
export class ShopCompComponent implements OnInit {
  current:string = GlobalConstants.language;
  public searchText: string;
  public itemcards: IPost[];
  constructor(private dataservice: DataService, private translate: TranslateService, private i18nlang: I18nService) {
    translate.setDefaultLang('th');
    translate.use(this.current);
  }

  ngOnInit() {
    this.dataservice.getItems().subscribe((items: IPost[]) => {this.itemcards = items; console.log(this.itemcards);})
    this.i18nlang.localeEvent.subscribe(locale => this.translate.use(locale));
  }



}
