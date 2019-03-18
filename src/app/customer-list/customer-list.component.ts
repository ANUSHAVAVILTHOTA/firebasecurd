import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../shared/customer.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerArray = [];
  constructor(private customerservice: CustomerService) { }

  ngOnInit() {
    this.customerservice.getCustomer().subscribe(
      list => {
        this.customerArray = list.map(item => {
            return {
                $key: item.key,
                ...item.payload.val()
            };
        });
      });
    
  }
  onDelete($key){
    if(confirm('Are u sure wana delete?')){
      this.customerservice.deleteCustomer($key);
    }
  }
}
