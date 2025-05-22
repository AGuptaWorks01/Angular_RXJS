import { Component } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  imports: [],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss'
})
export class ToArrayComponent {
  sourcesub?: Subscription;

  users = [
    { name: "abc", skill: "ang" },
    { name: "xyz", skill: "ret" },
    { name: "nmo", skill: "sfs" },
    { name: "atz", skill: "gkl" }
  ]

  ngOnInit(): void {
    // ===============  E.X. 1
    const source = interval(500)
    this.sourcesub = source.pipe(
      take(5),
      toArray()).subscribe((res: any) => {
        console.log(res);
        // if (res >= 5) {
        //   this.sourcesub?.unsubscribe()
        // }
      })

    // =================== Eg.2
    const source2 = from(this.users)
    source2.pipe(toArray()).subscribe((res: any) => {
      console.log(res);
    })

    // ============= Eg.3
    const source3 = of('XyZ', "AbC", "MnO")
    source3.pipe(toArray()).subscribe((res: any) => {
      console.log(res);
    })
  }
}
