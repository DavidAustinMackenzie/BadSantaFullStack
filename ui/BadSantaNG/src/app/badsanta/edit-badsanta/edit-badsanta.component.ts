import { Component,Input } from '@angular/core';
import { BadsantaService } from '../../badsanta.service';
import { DrawService } from '../../draw.service';

@Component({
  selector: 'app-edit-badsanta',
  templateUrl: './edit-badsanta.component.html',
  styleUrl: './edit-badsanta.component.css'
})
export class EditBadsantaComponent 
{
  constructor(private badSantaService:BadsantaService, private drawService:DrawService) {}

  @Input()
  badSanta:any;
  BadSantaId?:string;
  BadSantaName?:string;
  BadSantaPlace?:string;
  Draw?:string;

  DrawsList:any=[]

  errorMessages:string[] = []
  successMessage?:string;

  ngOnInit(): void
  {
    this.loadDrawList();  
  }

  loadDrawList()
  {
    this.drawService.getDrawList().subscribe((data:any)=>
    {
      this.DrawsList=data;

      this.BadSantaId=this.badSanta.BadSantaId;
      this.BadSantaName=this.badSanta.BadSantaName;
      this.BadSantaPlace=this.badSanta.BadSantaPlace;
      this.Draw=this.badSanta.Draw;
    });
  }

  updateBadSanta()
  {
    this.successMessage = "";

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

    if(this.Draw === undefined || this.Draw==="--Select--")
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

    if(this.errorMessages.length == 0)
      {
        var val = 
        {
          BadSantaId:this.BadSantaId,
          BadSantaName:this.BadSantaName,
          BadSantaPlace:this.BadSantaPlace,
          Draw:this.Draw,
        }
    
        this.badSantaService.updateBadSanta(val).subscribe(result=>{this.successMessage = result.toString();});
      }
  }
}
