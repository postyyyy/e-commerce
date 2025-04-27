import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from './models/cart.model';
import { CartService } from './services/cart.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };
  options: FormGroup;
  constructor(private cartService: CartService,fb: FormBuilder) {
    this.options = fb.group({
     
      floatLabel: 'never',
    });
  }

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
  

  abc:any = [
    {name:'Anand',id:1,surname:'Jha'},
    {name:'Anand2',id:2,surname:'Jha4'},
    {name:'Anand3',id:3,surname:'Jha5'}
  ]
  // dropdownOptions: any[] = [
  //   [{ value: 'option1', viewValue: 'Option 1', disabled: false }, { value: 'option2', viewValue: 'Option 2', disabled: false }],
  //   [{ value: 'option3', viewValue: 'Option 3', disabled: false }, { value: 'option4', viewValue: 'Option 4', disabled: false }]
  // ];

  // Array to hold selected options for each row
  // selectedOptions: string[] = [];

  // Method to disable selected options in other dropdowns
  // disableOptions(selectedValue: string, index: number) {
  //   this.dropdownOptions.forEach((options, i) => {
  //     if (i !== index) {
  //       options.forEach(option => {
  //         if (option.value === selectedValue) {
  //           option.disabled = true;
  //         } else {
  //           option.disabled = false;
  //         }
  //       });
  //     }
  //   });
  // }
}
 

