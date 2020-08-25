import { Action, createAction, props } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';
export const ADD_INGREDIENT = '[ShoppingList Component] Add Ingredient';
export const ADD_INGREDIENTS = '[ShoppingList Component] Add Ingredients';
export const UPDATE_INGREDIENT = '[ShoppingList Component] Update Ingredient';
export const DELETE_INGREDIENT = '[ShoppingList Component] Delete Ingredient';
export const START_EDIT = '[ShoppingList Component] Start Edit';
export const STOP_EDIT = '[ShoppingList Component] Stop Edit';

export const addIngredient = createAction(ADD_INGREDIENT, props<{ingredient: Ingredient}>());
export const addIngredients = createAction(ADD_INGREDIENTS, props<{ingredients: Ingredient[]}>());
export const updateIngredient = createAction(UPDATE_INGREDIENT, props<{ingredient: Ingredient}>());
export const deleteIngredient = createAction(DELETE_INGREDIENT);
export const startEdit = createAction(START_EDIT, props<{index: number}>());
export const stopEdit = createAction(STOP_EDIT);
