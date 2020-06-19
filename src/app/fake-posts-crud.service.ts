import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FakePost } from './models/fake-post';

@Injectable({
  providedIn: 'root'
})
export class fakePostsCrudService implements OnInit {

  defaultUrl= "https://123jsonplaceholder.typicode.com/posts";
  fakePostsList= [];
  constructor(private http: HttpClient) {
  }
  
  getPosts(): Observable<FakePost[]>{
    /** devolveremos el observable que consumiremos en el padre */
    /*ahora tmbn necesitamos typehintear ke tipo de objeto Observable tenemos */
    return this.http.get<FakePost[]>(this.defaultUrl).pipe(
      catchError(this.miErrorHandler)
    );
  }
  createPost(p: FakePost):Observable<FakePost>{
      return this.http.post(this.defaultUrl, JSON.stringify(p)).pipe(
        catchError(this.miErrorHandler)
      );
  }
  deletePost(id: number):Observable<any>{
      return this.http.delete(this.defaultUrl+'/'+id).pipe(
        catchError(this.miErrorHandler)
      );
  }
  private miErrorHandler(error:HttpErrorResponse){
    console.log("Error desde el servicio");
    return throwError(error);
  }
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    console.log("servicio fakePosts iniciado");
    /*quiero hacer la peticion nada mas inicializar el servicio */


  }
  
}
