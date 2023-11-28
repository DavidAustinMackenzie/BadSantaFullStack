import { Component, Input } from '@angular/core';
import { DrawService } from '../../draw.service';


@Component({
  selector: 'app-add-edit-draw',
  templateUrl: './add-edit-draw.component.html',
  styleUrl: './add-edit-draw.component.css'
})
export class AddEditDrawComponent 
{
  constructor(private drawService:DrawService) {}

  @Input() 
  draw:any;
  DrawId?:string;
  DrawTotal?:string;

  ngOnInit():void
  {
    this.DrawId = this.draw.DrawId;
    this.DrawTotal = this.draw.DrawTotal;
  }

  addDraw()
  {
    var val = 
    {
      DrawId:this.DrawId,
      DrawTotal:this.DrawTotal      
    }
    this.drawService.addDraw(val).subscribe(result=>{
      alert(result.toString());
    });
  }

  updateDraw()
  {
    var val = 
    {
      DrawId:this.DrawId,
      DrawTotal:this.DrawTotal      
    }
    this.drawService.updateDraw(val).subscribe(result=>{
      alert(result.toString());
    });
  }
}
