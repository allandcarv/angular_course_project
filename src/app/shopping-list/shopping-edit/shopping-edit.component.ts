import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output()
  public addIngredientEvent = new EventEmitter<Ingredient>();

  @ViewChild('nameInput')
  public nameInput: ElementRef

  @ViewChild('amountInput')
  public amountInput: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.addIngredientEvent.emit(
      new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
    )
  }

}
