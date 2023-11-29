import { Component } from '@angular/core';
import { BadsantaService } from '../../badsanta.service';

@Component({
  selector: 'app-admin-show-badsanta',
  templateUrl: './admin-show-badsanta.component.html',
  styleUrl: './admin-show-badsanta.component.css'
})
export class AdminShowBadsantaComponent 
{
  constructor(private badSantaService:BadsantaService){}

  BadSantaList:any=[];
  ModalTitle?:string;
  ActivateEditBadSantaComp:boolean=false;
  badSanta:any;  

  successMessage?:string;
  
  ngOnInit():void
  {
    this.refreshBadSantaList();
  }

  editClick(item:any)
  {
    this.badSanta=item;
    this.ModalTitle="Edit Bad Santa"
    this.ActivateEditBadSantaComp = true;
  }

  deleteClick(item:any)
  {
    if(confirm('Are you sure??'))
    {
      this.badSantaService.deleteBadSanta(item.BadSantaId).subscribe(
        data=>
        {
          this.successMessage = data.toString();
          this.refreshBadSantaList();
        });
    }
  }

  closeClick()
  {
    this.ActivateEditBadSantaComp=false;
    this.refreshBadSantaList();
  }

  exportResults()
  {
    this.badSantaService.downloadFile(this.BadSantaList);
  }

  refreshBadSantaList()
  {
    this.badSantaService.getBadSantaList().subscribe(
      (data: any)=>
      {
        this.BadSantaList=data;
      });
  }
}
