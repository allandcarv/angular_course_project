import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);

    this.ingredientsChanged.emit(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);

    this.ingredientsChanged.emit(this.ingredients);
  }
}
