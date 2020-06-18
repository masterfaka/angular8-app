import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipeResumir'
})
export class MiPipeResumirPipe implements PipeTransform {

  transform(valor: string, limite? : any) {
    /*!!1Aseguramos ejecucion en caso de null asi no nos peta!! */
    if(!valor){/*null(empty) || undefined === false */
      return null;
    }
    /** lo mismo aqui pero para el parametro OPCIONAL, 
    nos aseguramos su valor(si lo proporciona y sino tambien)
    + valor default!! */
    let cantidadLimite= (limite) ? limite : 40 ;/**40 chars por default pej */
    /*resumimos a los primeros 40 chars pej*/
    return valor.substring(0, cantidadLimite) + "...";
  }

}
