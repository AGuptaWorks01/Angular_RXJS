import { Component } from '@angular/core';
import { of } from 'rxjs';
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
      console.log(res);
      this._designUtiltiyService.print(res, 'alContainer')
    })

    const Obs2 = of({ a: 'abc', b: 'xyz', c: 'a2z' })

    Obs2.subscribe((res: any) => {
      console.log(res);
      this.ObsMsg = res
      // this._designUtiltiyService.print(res, 'alContainer1')
    })
  }
}
