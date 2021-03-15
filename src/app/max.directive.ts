import {Directive, ElementRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
@Directive({
  selector: '[appMax]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true}]
})
export class MaxDirective implements Validator {
  pmax!: number | string;
  constructor(
    private readonly el: ElementRef<HTMLElement>
  ) {
  }
  @Input('appMax')
  set max(value: number | string) {
    this.pmax = value;
    this.el.nativeElement.setAttribute('max', `${value}`);
  }
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (typeof value === 'number' && value > this.pmax) {
      return {max: {max: this.pmax}};
    }
    return null;
  }
}
