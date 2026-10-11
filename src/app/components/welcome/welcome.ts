import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ChangeDetectorRef, ViewChildren } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { RouterLink } from "@angular/router";
import { Countdown } from "../countdown/countdown";

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, Countdown],
  templateUrl: './welcome.html',
  styleUrl: './welcome.less',
})
export class Welcome implements AfterViewInit,OnInit {
  @ViewChild('welcomeDiv') welcomeDiv!: ElementRef;
  //@ViewChildren('itemList') itemList!: QueryList<ElementRef>;
  index = 0;
  sizeItems = 0;
  partyTime :Date = new Date('2026-12-05T16:00:00'); 
  get partyTimeFormatDate(): any{
    return this.partyTime.toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });
  };
  get partyTimeFormatHours(): any{
    return this.partyTime.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  };

  constructor(private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
      //this.timeRemaning();
  }

  ngAfterViewInit(): void {
    this.welcomeDiv?.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',    
          inline: 'nearest'  
        });
    this.welcomeDiv?.nativeElement.classList.add('visible');
  }

  /*onTransitionChange(event: any){
    if(this.index < this.sizeItems){
        this.index++;
        const nextItem = this.itemList.get(this.index)
        nextItem?.nativeElement.classList.add('visible');

        nextItem?.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',    
          inline: 'nearest'  
        });
    }
  }*/

  openWindow(url: string) {
    window.open(url);
  }
}
