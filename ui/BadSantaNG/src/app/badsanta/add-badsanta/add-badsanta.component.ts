import { Component,Input } from '@angular/core';
import { BadsantaService } from '../../badsanta.service';
import { DrawService } from '../../draw.service';

@Component({
  selector: 'app-add-badsanta',
  templateUrl: './add-badsanta.component.html',
  styleUrl: './add-badsanta.component.css'
})
export class AddBadsantaComponent 
{
  constructor(private badSantaService:BadsantaService, private drawService:DrawService) {}

  @Input()
  badSanta:any;
  BadSantaId?:string;
  BadSantaName?:string;
  BadSantaPlace = '?';
  Draw?:string;

  DrawsList:any=[]
  BadSantaList:any=[]
  numbers:any=[]
  names:any=[]
  
  clicked = false;
  errorMessages:string[] = [];
  successMessage?:string;

  ngOnInit(): void
  {
    alert('ngOnInit():Before load numbers!');
    this.loadDrawList();  
    this.loadNumberList();
    alert('ngOnInit():After load numbers!');
  }

  loadDrawList()
  {
    this.drawService.getDrawList().subscribe((data:any)=>
    {
      this.DrawsList=data;
      console.log(this.DrawsList);

      this.BadSantaId=this.badSanta.BadSantaId;
      this.BadSantaName=this.badSanta.BadSantaName;
      this.BadSantaPlace=this.badSanta.BadSantaPlace;
      this.Draw=this.badSanta.Draw;
    }, err=>{
      console.log(err.message);
    },
    ()=>{
      console.log('completed');
    });
  }

  loadNumberList()
  {
    alert('Before load numbers!');
    this.badSantaService.getBadSantaList().subscribe((data:any)=>
    {
      this.BadSantaList = data;

      for(let badSanta of this.BadSantaList)
      {
        this.numbers.push(badSanta.BadSantaPlace);
        this.names.push(badSanta.BadSantaName);
      }
    }, err=>{
      console.log(err.message);
    },
    ()=>{
      console.log('completed');
    });
    alert('After load numbers!');
  }

  addBadSanta()
  {
    if(this.names.includes(this.BadSantaName))
    {
      if(!this.errorMessages.includes("Name already exists, please enter a new name!"))
      {
        this.errorMessages.push("Name already exists, please enter a new name!");
      } 
    }
    else
    {
      if(this.errorMessages.includes("Name already exists, please enter a new name!"))
      {
        this.errorMessages = this.errorMessages.filter((e, i) => e !== "Name already exists, please enter a new name!"); 
      }
    }
    
    if(this.BadSantaName === undefined || this.BadSantaName === "")
    {
      if(!this.errorMessages.includes("Please enter a name!"))
      {
        this.errorMessages.push("Please enter a name!");
      } 
    }
    else
    {
      if(this.errorMessages.includes("Please enter a name!"))
      {
        this.errorMessages = this.errorMessages.filter((e, i) => e !== "Please enter a name!"); 
      }
    }
    
    if(this.Draw === undefined)
    {
      if(!this.errorMessages.includes("Please select a draw!"))
      {
        this.errorMessages.push("Please select a draw!");
      } 
    }
    else
    {
      if(this.errorMessages.includes("Please select a draw!"))
      {
        this.errorMessages = this.errorMessages.filter((e, i) => e !== "Please select a draw!"); 
      }
    }

    if(this.numbers.length < parseInt(this.Draw!))
    {
      if(this.errorMessages.includes("Cannot generate anymore bad santas, bad santa list is full!"))
      {
        this.errorMessages = this.errorMessages.filter((e, i) => e !== "Cannot generate anymore bad santas, bad santa list is full!"); 
      }
    }
    else
    {
       if(!this.errorMessages.includes("Cannot generate anymore bad santas, bad santa list is full!"))
      {
        this.errorMessages.push("Cannot generate anymore bad santas, bad santa list is full!");
      } 
    }
    
    if(!this.names.includes(this.BadSantaName) &&
      this.BadSantaName !== undefined &&
      this.BadSantaName !== "" &&
      this.Draw !== undefined &&
      this.numbers.length < parseInt(this.Draw!))
    {
      var randomNumber = this.getUniqueRandomNumber();
      this.BadSantaPlace = randomNumber;
      var val = 
      {
        BadSantaId:this.BadSantaId,
        BadSantaName:this.BadSantaName,
        BadSantaPlace:this.BadSantaPlace,
        Draw:this.Draw,
      }
  
      this.badSantaService.addBadSanta(val).subscribe(result=>{
        this.successMessage = result.toString();
      }, err=> {
        console.log(err.message);
      }, ()=>{
        console.log('completed');
      });

      this.loadNumberList();
    }    
  }

  onMousedown() {
    this.clicked = true;
  }

  onMouseup() {
    this.clicked = false;
  }  

  getRandomNumber = (maxVal:number) => 
  {
    var number = Math.floor((Math.random() * maxVal) + 1).toString();
         
    return number;
  }

  checkRandomNumberExists(randomNumber:string)
  {
    if(this.numbers.includes(randomNumber))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  getUniqueRandomNumber()
  {
    var randomNumber = this.getRandomNumber(parseInt(this.Draw!));
    if(this.numbers.length < parseInt(this.Draw!))
    {
      if(this.checkRandomNumberExists(randomNumber))
      {
        do{
          randomNumber = this.getRandomNumber(parseInt(this.Draw!));
        }while(this.checkRandomNumberExists(randomNumber))
      }
  
    }
    
    return randomNumber;
  }
}
