import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartState, TramInCart } from '../../state/cart/cart.state';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  private readonly store = inject(Store);

  cart$: Observable<TramInCart[]> = this.store.select((state) => state.cart);

  @Select(CartState.getCartTrams) declare tramsInCart$: Observable<
    TramInCart[]
  >;
}
