import { Component, OnInit } from '@angular/core';
import { IPost } from '../../shared/menu-item';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-shop-comp',
  templateUrl: './shop-comp.component.html',
  styleUrls: ['./shop-comp.component.css']
})
export class ShopCompComponent implements OnInit {

  public searchText: string;
  public itemcards: IPost[];
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getItems().subscribe((items: IPost[]) => {this.itemcards = items; console.log(this.itemcards);})
  }

}
