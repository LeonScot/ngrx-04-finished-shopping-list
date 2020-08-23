import { Action, createAction, props } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

// export const ADD_INGREDIENT = 'ADD_INGREDIENT';
// export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
// export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
// export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
// export const START_EDIT = 'START_EDIT';
// export const STOP_EDIT = 'STOP_EDIT';

// export class AddIngredient implements Action {
//   readonly type = ADD_INGREDIENT;

//   constructor(public payload: Ingredient) {}
// }

// export class AddIngredients implements Action {
//   readonly type = ADD_INGREDIENTS;

//   constructor(public payload: Ingredient[]) {}
// }

// export class UpdateIngredient implements Action {
//   readonly type = UPDATE_INGREDIENT;

//   constructor(public payload: Ingredient ) {}
// }

// export class DeleteIngredient implements Action {
//   readonly type = DELETE_INGREDIENT;
// }

// export class StartEdit implements Action {
//   readonly type = START_EDIT;

//   constructor(public payload: number) {}
// }

// export class StopEdit implements Action {
//   readonly type = STOP_EDIT;
// }

// export type ShoppingListActions =
//   | AddIngredient
//   | AddIngredients
//   | UpdateIngredient
//   | DeleteIngredient
//   | StartEdit
//   | StopEdit;

export const ADD_INGREDIENT = '[ShoppingList Component] Add Ingredient';
export const ADD_INGREDIENTS = '[ShoppingList Component] Add Ingredients';
export const UPDATE_INGREDIENT = '[ShoppingList Component] Updare Ingredient';
export const DELETE_INGREDIENT = '[ShoppingList Component] Delete Ingredient';
export const START_EDIT = '[ShoppingList Component] Start Edit';
export const STOP_EDIT = '[ShoppingList Component] Stop Edit';

export const addIngredient = createAction(ADD_INGREDIENT, props<{ingredient: Ingredient}>());
export const addIngredients = createAction(ADD_INGREDIENTS, props<{ingredients: Ingredient[]}>());
export const updateIngredient = createAction(UPDATE_INGREDIENT, props<{ingredient: Ingredient}>());
export const deleteIngredient = createAction(DELETE_INGREDIENT);
export const startEdit = createAction(START_EDIT, props<{index: number}>());
export const stopEdit = createAction(STOP_EDIT);
