import { Component } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilitService } from '../../appService/design-utilit.service';

@Component({
  selector: 'app-interval',
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent {
  obsMsg: any;
  videoSubscription!: Subscription;

  constructor(private _designUtilityService: DesignUtilitService) { }

  ngOnInit(): void {
    // const broadCastVideos = interval(500)
    const broadCastVideos = timer(2000, 1000)

    this.videoSubscription = broadCastVideos.subscribe((res: any) => {
      console.log(res);

      this.obsMsg = "Video" + res;
      this._designUtilityService.print(this.obsMsg, 'alContainer')
      this._designUtilityService.print(this.obsMsg, 'alContainer1')
      this._designUtilityService.print(this.obsMsg, 'alContainer2')

      if (res >= 5) {
        this.videoSubscription.unsubscribe()
      }
    })
  }
}
