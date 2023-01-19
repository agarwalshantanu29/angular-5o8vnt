import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="seating-container">
      <div *ngFor="let row of seats">
        <div *ngFor="let seat of row" [class.occupied]="seat === 1">{{seat}}</div>
      </div>
    </div>
    <div>
      <label>Number of seats to reserve:</label>
      <input [(ngModel)]="numSeats" type="number" min="1" max="7">
      <button (click)="reserveSeats()">Reserve</button>
    </div>
  `,
  styles: [
    `
    .seating-container {
      display: flex;
      flex-wrap: wrap;
    }
    .seating-container > div {
      display: flex;
    }
    .seating-container > div > div {
      width: 50px;
      height: 50px;
      border: 1px solid white;
      background-color: green;
      text-align: center;
    }
    .occupied {
      background-color: red;
    }
  `,
  ],
})
export class AppComponent {
  name = 'Angular';

  seats = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  numSeats = 1;

  reserveSeats() {
    let seatsReserved = 0;
    // check if seats are available in one row
    let rowPointer = 0;
    let seatPointer = 0;

    while (rowPointer < this.seats.length) {
      while (seatPointer < this.seats[rowPointer].length) {
        if (this.seats[rowPointer][seatPointer] === 0) {
          seatsReserved++;
          this.seats[rowPointer][seatPointer] = 1;
          if (seatsReserved === this.numSeats) {
            return;
          }
        }
        seatPointer++;
      }
      seatPointer = 0;
      rowPointer++;
    }
  }
}
