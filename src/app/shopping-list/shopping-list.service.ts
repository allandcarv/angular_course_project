import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);

    this.ingredientsChanged.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);

    this.ingredientsChanged.next(this.ingredients);
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }
}
