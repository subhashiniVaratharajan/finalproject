import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-selectseat',
  templateUrl: './selectseat.component.html',
  styleUrls: ['./selectseat.component.css']
})
export class SelectseatComponent implements OnInit {

	tick=this.serv.seats;
	selectedSeats:number[]=this.serv.selectedSeats;
	d1:any=0;
	 ctr=this.serv.ticCntr;
	constructor(public serv:TicketService) { 

		
		
	}
	ngOnInit(): void {
	}
	count(val1:number){
	
		if(this.selectedSeats.includes(val1)){

		}
		else{
			
			this.selectedSeats.push(val1)
		} 
		
		for(var i=0;i<this.selectedSeats.length;i++){
			console.log(this.serv.seats[this.selectedSeats[i]-1])
		}
	
		console.log(this.selectedSeats)
		this.d1=this.tick[val1-1].count;
		this.d1+=1;
		this.tick[val1-1].count=this.d1;
		this.ctr+=1
			if(this.d1==1 )
			{
			  this.tick[val1-1].flag=true;	
			}
		 else 
		 {
			this.d1=this.tick[val1-1].count;
			this.d1-=1;
			this.tick[val1-1].count=this.d1;
			this.ctr-=1
			this.tick[val1-1].flag=false;
			}
		//this.tick[val1-1].flag=true;
		console.log(this.tick)

	}

}
