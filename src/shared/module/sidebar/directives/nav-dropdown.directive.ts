import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[navDropdown]',
})
export class NavDropdownDirective {
    public constructor(private el: ElementRef) {}

    public toggle(): void {
        this.el.nativeElement.classList.toggle('open');
    }
}

@Directive({
    selector: '[navDropdownToggle]',
})
export class NavDropdownToggleDirective {
    public constructor(private dropdown: NavDropdownDirective) {}

    @HostListener('click', ['$event'])
    public toggleOpen($event: any): void {
        $event.preventDefault();
        this.dropdown.toggle();
    }
}

export const NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
