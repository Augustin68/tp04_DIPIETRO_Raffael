import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Tram } from '../../models/tram.type';

@Component({
  selector: 'app-tram-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tramCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TramCardComponent {
  @Input() declare tram: Tram;
}
