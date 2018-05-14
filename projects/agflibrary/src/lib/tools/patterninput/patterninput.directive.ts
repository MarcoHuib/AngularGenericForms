import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[agfInputPattern]'
})
export class PatternInputDirective {
    // Allow key codes for special events. Reflect :
    // Backspace, tab, end, home
    private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Shift', 'Control', 'Delete'];

    @Input() appInputPattern: RegExp;

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        const key: string = event.key; // what key is pressed?

        // enable control + a or command + a (metakey should catch the command on Apple)
        if (((event.ctrlKey || event.metaKey) && event.keyCode === 65) || // ctrl + a
            ((event.ctrlKey || event.metaKey) && event.keyCode === 67) || // ctrl + c
            ((event.ctrlKey || event.metaKey) && event.keyCode === 88) || // ctrl + x
            ((event.ctrlKey || event.metaKey) && event.keyCode === 86)) { // ctrl + v
            return;
        }

        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(key) !== -1) {
            return;
        }


        // if the next character does not match the pattern, prevent the event (not add the next character)
        if (this.checkPattern(key)) {
            event.preventDefault();
        }
    }

    @HostListener('paste', ['$event'])
    onPaste(event: ClipboardEvent) {
        const nextCharacters: string = event.clipboardData.getData('text');
        if (this.checkPattern(nextCharacters)) {
            event.preventDefault();
        }
    }
    /**
     * Checks if the next character that is added to a textfield matches the pattern.
     * If the pattern is not matched, then return false, so the caller knows to prevent adding the character.
     * @param nextCharacters
     * @returns {boolean}
     * @memberof PatternInputDirective
     */
    checkPattern(nextCharacters: string): boolean {
        const current: string = this.el.nativeElement.value;
        const next: string = current.concat(nextCharacters);
        const pattern = this.appInputPattern;
        if (next && !String(next).match(pattern)) {
            return true;
        }
        return false;
    }
}
