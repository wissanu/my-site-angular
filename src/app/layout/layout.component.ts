import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/menu-item';
import { Tile } from '../shared/menu-item';
import { LangTile } from '../shared/menu-item';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { GlobalConstants } from '../common/GlobalConstants';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from '../shared/i18n.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  current:string = GlobalConstants.language;

  lang_tile: LangTile[] = [];

  tiles1: Tile[] = [
    {text: 'Home', cols: 1, rows: 1, color: '#404040'},
    {text: 'Privacy', cols: 1, rows: 1, color: '#404040'},
    {text: 'Terms', cols: 1, rows: 1, color: '#404040'},
    {text: 'Contact', cols: 1, rows: 1, color: '#404040'}
  ];
  tiles2: Tile[] = [
    {text: 'Copyright © 2020 Tor', cols: 4, rows: 1, color: '#A0A0A0'}
  ];
  menuitem: MenuItem[] = [
    {
      label: 'Shopping',
      icon: 'shopping_cart',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      link: '/shopping'
    },
    {
      label: 'Resource',
      icon: 'book',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      link: '/blog'
    },
    {
      label: 'Contact Us',
      icon: 'accessibility',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      link: '/about'
    },
    {
      label: 'My Log-in',
      icon: 'sync',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      link: ''
    }
  ];
  constructor(translate: TranslateService, private i18nlang: I18nService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'logo',
        sanitizer.bypassSecurityTrustResourceUrl('assets/logo/logo_transparent.svg'));
    translate.setDefaultLang('en');
    translate.use(this.current);
  }

  ngOnInit(): void {
    if(GlobalConstants.language === 'th')
      this.lang_tile = [
                          {lang_shortname: 'th', lang_fullname:'thai'},
                          {lang_shortname:'en',lang_fullname:'english'}
                        ];
    else if(GlobalConstants.language === 'en')
      this.lang_tile = [
                          {lang_shortname:'en',lang_fullname:'english'},
                          {lang_shortname: 'th', lang_fullname:'thai'}
                        ];
  }

  switchlanguage(locale: string) {
    GlobalConstants.language = locale;
    this.i18nlang.changeLocale(locale);
    console.log(GlobalConstants.language);
  }
}
