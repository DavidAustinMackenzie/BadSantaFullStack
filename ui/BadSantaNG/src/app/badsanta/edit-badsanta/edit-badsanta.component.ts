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

  updateBadSanta(){
    var val = 
    {
      BadSantaId:this.BadSantaId,
      BadSantaName:this.BadSantaName,
      BadSantaPlace:this.BadSantaName,
      Draw:this.Draw,
    }

    this.badSantaService.updateBadSanta(val).subscribe(result=>{alert(result.toString());});
  }
}
