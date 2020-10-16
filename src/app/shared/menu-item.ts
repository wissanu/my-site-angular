export interface MenuItem {
  label: string;
  icon: string;
  showOnMobile: boolean;
  showOnTablet: boolean;
  showOnDesktop: boolean;
  link: string;
}

export interface LangTile{
  lang_shortname: string;
  lang_fullname: string;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface IPost {
id: number;
title: string;
content: string;
tag: string;
}

export interface IOrder {
itemId: number;
title: string;
context: string;
tag: string;
}
