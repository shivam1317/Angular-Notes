import { AbstractControl, ValidationErrors } from '@angular/forms';
export class noSpace {
  // we are getting the form control as parameter
  static noSpaceValidation(control: AbstractControl): ValidationErrors | null {
    let controlValue = control.value as string;
    // if there is a blank space then it will return custom object else null
    if (controlValue.indexOf(' ') >= 0) {
      // use the same object key in your html while checking errors
      return { noSpaceValidator: true };
    } else {
      return null;
    }
  }
}
