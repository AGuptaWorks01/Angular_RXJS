import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NetworkService } from '../network.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOnline: boolean = true;
  constructor(private NetworkService: NetworkService) { }

  ngOnInit(): void {
    this.NetworkService.connectionStatus$.subscribe((status: any) =>
      this.isOnline = status)
  }
}
