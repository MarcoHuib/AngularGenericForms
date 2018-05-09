import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { FormHooks } from '@angular/forms/src/model';
import { ControlTypes } from '../../enum';

/**
 * Control Interface
 * base interface of a control
 *
 * @export
 */
export interface IControl {
    controlName: string;
    value: string;
    validators: ValidatorFn[];
    asyncValidators: AsyncValidatorFn[];
    updateOn: FormHooks;
    controlType: ControlTypes;
    disabled: boolean;
  }
