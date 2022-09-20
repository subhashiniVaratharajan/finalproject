import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
@Component({
  selector: 'app-dispticket',
  templateUrl: './dispticket.component.html',
  styleUrls: ['./dispticket.component.css']
})
export class DispticketComponent implements OnInit {

  selectedSeats = this.serv.selectedSeats

  constructor(public serv:TicketService) {
    for(var i=0;i<this.selectedSeats.length;i++){

      this.arr.push(this.serv.seats[this.selectedSeats[i]-1].seatNo);
      // console.log(this.serv.seats[this.selectedSeats[i]-1].seatNo)

    }
   }
   arr:string[]=[ ]; 
   valu = this.serv.valu;

  ngOnInit(): void {
  }
  fcn(){
console.log(this.arr);
console.log(this.serv.valu);


    

  }

}
