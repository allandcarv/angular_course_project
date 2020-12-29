import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')
  public nameInput: ElementRef

  @ViewChild('amountInput')
  public amountInput: ElementRef

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.shoppingListService.addIngredient({ name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value })
  }

}
