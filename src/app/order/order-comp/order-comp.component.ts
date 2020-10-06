import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { IOrder, IPost } from '../../shared/menu-item';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-order-comp',
  templateUrl: './order-comp.component.html',
  styleUrls: ['./order-comp.component.css']
})
export class OrderCompComponent implements OnInit {

  public orders: IOrder[] = [];
  public item: IPost;
  isLinear = true;
  profileForm = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this._formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      zip: ['', Validators.required]
    }),
    phone: ['', Validators.required],
  });
  constructor(private dataservice: DataService, private route: ActivatedRoute, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // service invoked
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.params.id);
    this.dataservice.getOrders(id).subscribe((orders: IOrder[]) => {
      this.orders = orders;
    });

    this.dataservice.getItem(id).subscribe((item: IPost) => {
      this.item= item;
    });

    // form builder
    /*this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });*/
  }

  onSubmit() {
    console.log(this.profileForm.value)
  }

}
