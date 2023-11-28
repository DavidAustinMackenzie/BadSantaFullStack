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
  BadSantaPlace?:string;
  Draw?:string;

  DrawsList:any=[]

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

  addBadSanta(){
    var val = 
    {
      BadSantaId:this.BadSantaId,
      BadSantaName:this.BadSantaName,
      BadSantaPlace:this.BadSantaPlace,
      Draw:this.Draw,
    }

    this.badSantaService.addBadSanta(val).subscribe(result=>{alert(result.toString());});
  }
}
