import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**se le pone este decorador para no tener que injectarlo nosotros en el modules */
export class Servicio1Service {

  constructor() { }
  getDatosFakeUsuario(): any{
    return [
      {"nombre":"juan", "edad":25},
      {"nombre":"adan", "edad":25},
      {"nombre":"pepito", "edad":25},
      {"nombre":"grillo", "edad":25},
    ];
  }
}
