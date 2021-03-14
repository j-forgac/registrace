import {Directive, ElementRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
@Directive({
  selector: '[appMin]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true}]
})
export class MaxDirective implements Validator {
  pMin!: number | string;
  constructor(
    private readonly el: ElementRef<HTMLElement>
  ) {
  }
  @Input('appMin')
  set min(value: number | string) {
    this.pMin = value;
    this.el.nativeElement.setAttribute('max', `${value}`);
  }
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (typeof value === 'number' && value > this.pMin) {
      return {min: {min: this.pMin}};
    }
    return null;
  }
}
