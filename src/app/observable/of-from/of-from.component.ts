import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilitService } from '../../appService/design-utilit.service';

@Component({
  selector: 'app-of-from',
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.scss'
})
export class OfFormComponent {
  ObsMsg: any;
  constructor(private _designUtiltiyService: DesignUtilitService) { }

  ngOnInit(): void {
    const Obs1 = of('abc', 'xyz', 'a2z')

    Obs1.subscribe((res: any) => {
      // console.log(res);
      this._designUtiltiyService.print(res, 'alContainer')
    })

    const Obs2 = of({ a: 'abc', b: 'xyz', c: 'a2z' })

    Obs2.subscribe((res: any) => {
      // console.log(res);
      this.ObsMsg = res
      // this._designUtiltiyService.print(res, 'alContainer1')
    })



    const Obs3 = from(["Abc", "A2Z", "XYZ"])
    Obs3.subscribe((res: any) => {
      console.log(res);
      this._designUtiltiyService.print(res, "alContainer3")
    })


    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve("Promsise resolve")
      }, 2000);
    })

    const Obs4 = from(promise)
    Obs4.subscribe((res => {
      // console.log("from promise", res);
      this._designUtiltiyService.print(res, "alContainer4")
    }))

    // From - string
    const Obs5 = from("FROMTOSTRING")
    Obs5.subscribe((res => {
      console.log("From String=>", res);
      this._designUtiltiyService.print(res, "alContainer5")
    }))
  }
}
