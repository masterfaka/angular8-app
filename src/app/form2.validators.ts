import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Form2Validator{
    mireglavalidacion(control: AbstractControl): ValidationErrors{
        /*ya existe pero para ver lo que podemos hacer pej min length  a pincho*/
        if(control.value.length!== 5){
            /*retorna un obj tipo validation error mirar docu; aqui simulamos min_lentgh */
            return {
                minlength:{
                    requiredLenght: 5,
                    actualLength: control.value.length
                }
            };
        }
    }
    static sinBlackSpaces(control: AbstractControl): ValidationErrors | null{
        if(control.value.indexOf(" ")!== -1){
            return {
                noEspacioEnBlank: true
            }
        }
        return null;
    }
}