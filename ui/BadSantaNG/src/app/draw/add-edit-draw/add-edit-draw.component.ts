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

  errorMessages:string[] = []
  successMessage?:string;
  ngOnInit():void
  {
    this.DrawId = this.draw.DrawId;
    this.DrawTotal = this.draw.DrawTotal;
  }

  addDraw()
  {
    if(this.DrawTotal === undefined || this.DrawTotal === "")
    {
      if(!this.errorMessages.includes("Please enter a draw of total people!"))
      {
        this.errorMessages.push("Please enter a draw of total people!");
      } 
    }
    else
    {
      if(this.errorMessages.includes("Please enter a draw of total people!"))
      {
        this.errorMessages = this.errorMessages.filter((e, i) => e !== "Please enter a draw of total people!"); 
      }
    }

    if(this.DrawTotal !== undefined &&
      this.DrawTotal !== "")
      {
        alert('Add Draw!');
        var val = 
        {
          DrawId:this.DrawId,
          DrawTotal:this.DrawTotal      
        }
        this.drawService.addDraw(val).subscribe(
          result=>
          {
            this.successMessage = result.toString();
            alert(result.toString());
        });
      }
  }

  updateDraw()
  {
    if(this.DrawTotal === undefined || this.DrawTotal === "")
    {
      if(!this.errorMessages.includes("Please enter a draw of total people!"))
      {
        this.errorMessages.push("Please enter a draw of total people!");
      } 
    }
    else
    {
      if(this.errorMessages.includes("Please enter a draw of total people!"))
      {
        this.errorMessages = this.errorMessages.filter((e, i) => e !== "Please enter a draw of total people!"); 
      }
    }
    
    if(this.DrawTotal !== undefined &&
      this.DrawTotal !== "")
      {
        var val = 
        {
          DrawId:this.DrawId,
          DrawTotal:this.DrawTotal      
        }
        this.drawService.updateDraw(val).subscribe(result=>
          {
            this.successMessage = result.toString();
        });
      }
  }
}
