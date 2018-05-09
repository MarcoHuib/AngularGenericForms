import { IComponent } from '../component/component.interface';
import { ISelectValue } from '../selectvalue/selectvalue.interface';

/**
 * Selectcontrol Interface
 *
 * @export
 * @interface SelectInterface
 * @extends {IComponent}
 */
export interface SelectInterface extends IComponent {
    multiple: boolean;
    size: number;
    defaultText: string;
    values: ISelectValue[];
}
