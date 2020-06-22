import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass']
})
export class FirstComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    /**devuelve un observable y hay que hacerle .subscribe */
    this.route.paramMap.subscribe(params =>{
      console.log(params);
    });
  }

}
