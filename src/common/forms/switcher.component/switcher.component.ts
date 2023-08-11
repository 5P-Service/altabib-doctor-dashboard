import { Component, Input } from '@angular/core';

@Component({
  selector: 'altb-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {
  @Input() style: 'round' | 'solid' | undefined;
}
