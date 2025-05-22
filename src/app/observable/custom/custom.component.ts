import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom',
  imports: [],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent implements OnInit{


  ngOnInit(): void {
    // ex 01(Manual)

    const cusObs1 = new Observable((observer: any) => {
      setTimeout(() => {
        observer.next("Data emit 1")
      }, 1000);
      setTimeout(() => {
        observer.next("Data emit 1")
      }, 2000);
      setTimeout(() => {
        observer.next("Data emit 1")
      }, 3000);
    })

    cusObs1.subscribe((res: any) => {
      console.log(res);
    })
  }
}
