import { Observable } from 'rxjs';
import { ItemService } from './../../services/item.service';
import { Item } from './../../model/item';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  ngOnInit() {}

  items: Observable<Item[]>

  constructor(private itemService: ItemService, private router: Router) {
    this.items = this.itemService.getItems()
  }

  addItem() {
    this.router.navigateByUrl('/create-item')
  }

  deleteProduct() {
    this.deleteProduct
  }

}
