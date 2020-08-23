import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';
import { createReducer, on, Action } from '@ngrx/store';

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1
};

const updateProcedure = (state: State, payload: Ingredient) => {
  const ingredient = state.ingredients[state.editedIngredientIndex];
  const updatedIngredient = {
    ...ingredient,
    ...payload
  };
  const updatedIngredients = [...state.ingredients];
  updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

  return updatedIngredients
};

const shoppingListReducer = createReducer(
  initialState,
  on(ShoppingListActions.addIngredient, (state, {ingredient}) => ({
    ...state,
    ingredients: [...state.ingredients, ingredient]
  })),
  on(ShoppingListActions.addIngredients, (state, {ingredients}) => ({
    ...state,
    ingredients: [...state.ingredients, ...ingredients]
  })),
  on(ShoppingListActions.updateIngredient, (state, {ingredient}) => ({
    ...state,
    ingredients: updateProcedure(state, ingredient),
    editedIngredientIndex: -1,
    editedIngredient: null
  })),
  on(ShoppingListActions.deleteIngredient, state => ({
    ...state,
    ingredients: state.ingredients.filter((ig, igIndex) => igIndex !== state.editedIngredientIndex),
    editedIngredientIndex: -1,
    editedIngredient: null
  })),
  on(ShoppingListActions.startEdit, (state, {index}) => ({
    ...state,
    editedIngredientIndex: index,
    editedIngredient: {...state.ingredients[index]}
  })),
  on(ShoppingListActions.stopEdit, state => ({
    ...state,
    editedIngredientIndex: -1,
    editedIngredient: null
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return shoppingListReducer(state, action);
}

// export function shoppingListReducer(
//   state: State = initialState,
//   action: ShoppingListActions.ShoppingListActions
// ) {
//   switch (action.type) {
//     case ShoppingListActions.ADD_INGREDIENT:
//       return {
//         ...state,
//         ingredients: [...state.ingredients, action.payload]
//       };
//     case ShoppingListActions.ADD_INGREDIENTS:
//       return {
//         ...state,
//         ingredients: [...state.ingredients, ...action.payload]
//       };
//     case ShoppingListActions.UPDATE_INGREDIENT:
//       const ingredient = state.ingredients[state.editedIngredientIndex];
//       const updatedIngredient = {
//         ...ingredient,
//         ...action.payload
//       };
//       const updatedIngredients = [...state.ingredients];
//       updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

//       return {
//         ...state,
//         ingredients: updatedIngredients,
//         editedIngredientIndex: -1,
//         editedIngredient: null
//       };
//     case ShoppingListActions.DELETE_INGREDIENT:
//       return {
//         ...state,
//         ingredients: state.ingredients.filter((ig, igIndex) => {
//           return igIndex !== state.editedIngredientIndex;
//         }),
//         editedIngredientIndex: -1,
//         editedIngredient: null
//       };
//     case ShoppingListActions.START_EDIT:
//       return {
//         ...state,
//         editedIngredientIndex: action.payload,
//         editedIngredient: { ...state.ingredients[action.payload] }
//       };
//     case ShoppingListActions.STOP_EDIT:
//       return {
//         ...state,
//         editedIngredient: null,
//         editedIngredientIndex: -1
//       };
//     default:
//       return state;
//   }
// }
