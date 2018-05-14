import { IFormGroup } from '../../interfaces/formgroup/formgroup';
import { IControl } from '../../../control';

export class FormGroup implements IFormGroup {
    control?: IControl[];
}
