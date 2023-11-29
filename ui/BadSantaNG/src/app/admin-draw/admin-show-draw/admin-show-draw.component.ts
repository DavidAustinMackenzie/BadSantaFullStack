import { Component } from '@angular/core';
import { DrawService } from '../../draw.service';

@Component({
  selector: 'app-admin-show-draw',
  templateUrl: './admin-show-draw.component.html',
  styleUrl: './admin-show-draw.component.css'
})

export class AdminShowDrawComponent 
{
  constructor(private drawService:DrawService){}

  DrawList:any=[];
  ModalTitle?:string;
  ActivateAddEditDrawComp:boolean=false;
  draw:any;

  successMessage?:string;

  ngOnInit():void
  {
    this.refreshDrawList();
  }

  addClick()
  {
    this.draw = 
    {
      DrawId:0,
      DrawTotal:""
    }
    this.ModalTitle = "Add Draw";
    this.ActivateAddEditDrawComp = true;
  }

  editClick(item:any)
  {
    this.draw=item;
    this.ModalTitle="Edit Draw";
    this.ActivateAddEditDrawComp = true;
  }

  deleteClick(item:any)
  {
    if(confirm('Are you sure??'))
    {
      this.drawService.deleteDraw(item.DrawId).subscribe(
        data=>
        {
        this.successMessage = data.toString();
        this.refreshDrawList();
      })
    }
  }

  closeClick()
  {
    this.ActivateAddEditDrawComp = false;
    this.refreshDrawList();
  }

  refreshDrawList()
  {
    this.drawService.getDrawList().subscribe(
    data=>
      {
      this.DrawList = data;
    });
  }
}
