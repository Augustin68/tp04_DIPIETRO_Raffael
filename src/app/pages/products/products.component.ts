import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject
} from '@angular/core';
import { TramsService } from './trams.service';
import { Observable } from 'rxjs';
import { Tram } from '../../models/tram.type';
import { TramCardComponent } from '../../components/tramCard/tramCard.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, TramCardComponent],
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  tramsService = inject(TramsService);

  declare trams$: Observable<Tram[]>;

  ngOnInit() {
    this.trams$ = this.tramsService.getTrams();
  }
}
