import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FakePost } from './models/fake-post';

@Injectable({
  providedIn: 'root'
})
export class fakePostsCrudService implements OnInit {

  defaultUrl= "https://jsonplaceholder.typicode.com/posts";
  fakePostsList= [];
  constructor(private http: HttpClient) {
  }
  
  getPosts(): Observable<FakePost[]>{
    /** devolveremos el observable que consumiremos en el padre */
    /*ahora tmbn necesitamos typehintear ke tipo de objeto Observable tenemos */
    return this.http.get<FakePost[]>(this.defaultUrl);
  }
  createPost(p: FakePost):Observable<FakePost>{
      return this.http.post(this.defaultUrl, JSON.stringify(p));
  }
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    console.log("servicio fakePosts iniciado");
    /*quiero hacer la peticion nada mas inicializar el servicio */


  }
  
}
