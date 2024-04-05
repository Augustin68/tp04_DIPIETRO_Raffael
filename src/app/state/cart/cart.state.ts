import { Action, Select, Selector, State, StateContext } from '@ngxs/store';
import { Tram } from '../../models/tram.type';
import { Injectable } from '@angular/core';
import { AddTramToCart, ClearCart, DeleteTramFromCart } from './cart.actions';

export type CartStateModel = {
  trams: { [tramId: number]: { count: number; model: Tram } };
};

const defaultCartState: CartStateModel = {
  trams: []
};

@State<CartStateModel>({
  name: 'cart',
  defaults: defaultCartState
})
@Injectable()
export class CartState {
  constructor() {}

  @Action(AddTramToCart)
  addTramToCart(ctx: StateContext<CartStateModel>, tram: Tram) {
    const state = ctx.getState();
    const tramId = tram.id;
    const tramCount = state.trams[tramId]?.count || 0;
    ctx.patchState({
      trams: {
        ...state.trams,
        [tramId]: {
          count: tramCount + 1,
          model: tram
        }
      }
    });
  }

  @Action(DeleteTramFromCart)
  removeTramFromCart(ctx: StateContext<CartStateModel>, tram: Tram) {
    const state = ctx.getState();
    delete state.trams[tram.id];
    ctx.patchState({
      trams: {
        ...state.trams
      }
    });
  }

  @Action(ClearCart)
  clearCart(ctx: StateContext<CartStateModel>) {
    ctx.patchState(defaultCartState);
  }

  @Selector()
  static getCart(state: CartStateModel) {
    return state.trams;
  }
}
