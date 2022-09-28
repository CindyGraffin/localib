import { Component, OnInit, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {

  @Input() buttonText!: string;
  @Input() buttonColor!: string;
  @Input() icon!: IconProp;
}
