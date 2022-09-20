import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit{

  val1= this.serv.val1;
       selectedSeats:number[]=this.serv.selectedSeats;
        dta= this.serv.valu;
       constructor(public serv:TicketService , public router:Router) {

   
    
        }

       ngOnInit(): void {
       }
       fnc(){
        
        console.log("wedrf");
        console.log(this.val1.value);
        this.dta.v1 = JSON.stringify(this.val1.value.v1);
        this.dta.v2 = JSON.stringify(this.val1.value.v2);
        this.dta.v3 = JSON.stringify(this.val1.value.v3);
        this.dta.v4 = JSON.stringify(this.val1.value.v4);

        for(var i=0;i<this.selectedSeats.length;i++){
          console.log(this.serv.seats[this.selectedSeats[i]-1].seatNo)
        }


          this.router.navigate(['dispticket']);

       }
     
     }
     
     
    
    
  
