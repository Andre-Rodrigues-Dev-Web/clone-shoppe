import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-auth',
  templateUrl: './button-auth.component.html',
  styleUrls: ['./button-auth.component.scss']
})
export class ButtonAuthComponent {
  @Input()
  ariaButton!: string;
  @Input()
  textButton!: string;
}
