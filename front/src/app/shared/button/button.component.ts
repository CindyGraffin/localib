import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type ButtonSize = 'large' | 'medium' | 'small'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {

  @Input() buttonText!: string;
  @Input() buttonColor!: string;
  @Input() icon!: IconProp;
  @Input() buttonSize!: ButtonSize;

}
