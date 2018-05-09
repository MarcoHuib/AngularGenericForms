import { InputType } from '../../types';
import { IComponent } from '../component/component.interface';

/**
 * Textcontrol Interface
 *
 * @export
 */
export interface ITextField extends IComponent {
    type: InputType;
    placeholder: string;
    minlength: number;
    maxLength: number;
}
