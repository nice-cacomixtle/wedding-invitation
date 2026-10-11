import { Component, OnInit, OnDestroy, input,ChangeDetectorRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.html',
  styleUrl: './countdown.less',
})

export class Countdown implements OnInit, OnDestroy {
  @Input() targetDate!: string | Date;
  timeData!: { days: number; hours: number; minutes: number; seconds: number };
  private subscription!: Subscription;
  constructor(private cdr: ChangeDetectorRef){}
  ngOnInit() {
    const target = new Date(this.targetDate).getTime();

    this.subscription = interval(1000).pipe(
      map(() => {
        
        const now = new Date().getTime();
        const distance = target - now;

        if (distance < 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        
        return {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        };
      })
    ).subscribe(data => {this.cdr.detectChanges();this.timeData = data;});
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
