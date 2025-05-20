import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilitService } from '../../appService/design-utilit.service';

@Component({
  selector: 'app-form-event',
  imports: [],
  templateUrl: './form-event.component.html',
  styleUrl: './form-event.component.scss'
})
export class FormEventComponent implements OnInit {
  @ViewChild('addbtn') addbtn?: ElementRef;

  constructor(private _designUtility: DesignUtilitService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    
    let count = 1;
    fromEvent(this.addbtn?.nativeElement, 'click').subscribe((res: any) => {

      let countval = "Video" + count++
      this._designUtility.print(countval, "alContainer1")
      this._designUtility.print(countval, "alContainer2")
      // this.print(countval, "alContainer1")
      // this.print(countval, "alContainer2")
    })
  }

  // print(val: any, containerId:any) {
  //   let el = document.createElement('li')
  //   el.innerText = val;
  //   document.getElementById(containerId)?.appendChild(el)
  // }

}
