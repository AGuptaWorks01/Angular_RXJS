import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  imports: [],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss'
})
export class PromiseComponent {


  constructor() { }

  DellAvilable() {
    return false
  }

  HpAvilable() {
    return false
  }

  promiseval: any;
  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
  }
  hp = {
    brand: 'HP',
    hardDisk: '2 TB',
    color: 'Grey'
  }
  notAvil = {
    brand: 'Not avilable',

  }

  ngOnInit(): void {
    let proms = new Promise((resolve, reject) => {
      // resolve("Promise Resolve")
      // reject("Promise Rejected")

      if (this.DellAvilable()) {
        return setTimeout(() => {
          // resolve("Dell is Purchased!")
          resolve(this.dell)
        }, 2000);
      } else if (this.HpAvilable()) {
        return setTimeout(() => {
          // resolve("HP is Purchased")
          resolve(this.hp)
        }, 2000);
      } else {
        return setTimeout(() => {
          // reject("Not Purchase!")
          reject(this.notAvil)
        }, 2000);
      }
    })

    proms.then(res => {
      console.log("Success!", res);
      this.promiseval = res
    }).catch(res => {
      console.log("failed!", res);
      this.promiseval = res
    })
  }
}
