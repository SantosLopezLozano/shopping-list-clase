import { Router } from '@angular/router';
import { ItemService } from './../../services/item.service';
import { Item } from './../../model/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  item: Item = {itemId: '', name: '', amount: 1, imageUrl: ''}
  

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit() {
  }

  addItem() {
    this.itemService.addItem(this.item);
    this.router.navigateByUrl('/list');
  }

}
