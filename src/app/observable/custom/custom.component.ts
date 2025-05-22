import { Component, OnInit } from '@angular/core';
import { count, Observable, Subscription, toArray } from 'rxjs';
import { DesignUtilitService } from '../../appService/design-utilit.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom',
  imports: [CommonModule],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent implements OnInit {
  takeStatus: any;
  takeStatus2: any;
  names: any;
  nameStatus: any;
  subs2?: Subscription;

  constructor(private _designUtiliry: DesignUtilitService) { }

  ngOnInit(): void {
    // ex 01(Manual)

    const cusObs1 = new Observable((observer: any) => {
      setTimeout(() => {
        observer.next("Angular")
      }, 1000);

      setTimeout(() => {
        observer.next("TypeScript")
      }, 2000);

      setTimeout(() => {
        observer.next("javascript")
        observer.complete()
      }, 3000);

      setTimeout(() => {
        observer.next("Data emit 4")

      }, 4000);
    })

    cusObs1.subscribe((res: any) => {
      // console.log(res);
      this._designUtiliry.print(res, 'alContainer')
    },
      (err) => {
        this.takeStatus = 'error'
      },
      () => {
        this.takeStatus = 'completed'
      }
    )



    // ex - ======================  2 (( Custom Interval))
    const arr = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
    const cusObs2 = new Observable((observer: any) => {
      let count = 0
      setInterval(() => {
        observer.next(arr[count])
        if (count >= 2) {
          observer.complete()
        }
        count++
      }, 1000)

    })

    this.subs2 = cusObs2.subscribe((res: any) => {
      // console.log(res);
      this._designUtiliry.print(res, 'alContainer1')
    }, (err) => {
      this.takeStatus2 = 'error'
    },
      () => {
        this.takeStatus2 = 'completed'
      }
    )



    // Ex = 03 (random names)
    const arr2 = ['Abc', 'XYZ', 'A2Z', 'Hello', 'Boy'];
    const cusObs3 = new Observable((observer: any) => {
      let count = 0;
      const intervalId = setInterval(() => {
        observer.next(arr2[count])
        if (count >= 2) {
          observer.error("error emit")
        }
        if (count >= 4) {
          observer.complete()
          clearInterval(intervalId)
        }
        count++
      }, 1000);
    })

    cusObs3.subscribe((res: any) => {
      console.log(res);
      this.names = res
    }, (err) => {
      this.nameStatus = 'error'
    },
      () => {
        this.nameStatus = 'completed'
      }
    )

  }

  ngOnDestroy(): void {
    this.subs2?.unsubscribe()
  }

}
