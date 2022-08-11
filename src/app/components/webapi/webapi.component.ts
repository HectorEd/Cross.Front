import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {WebapiService} from 'src/app/services/webapi.service';
import {UserGitModel} from 'src/app/api/models/userGitModel';
import {WebapiAuthService} from 'src/app/services/webapiAuth.service';

@Component({
  selector: 'app-webapi',
  templateUrl: './webapi.component.html',
  styleUrls: ['./webapi.component.css']
})
export class WebapiComponent implements OnInit {
  listRepository: UserGitModel[]=[];
  authenticate:any[]=[];
  autentified:boolean=false;

  constructor(
    public _repositoryService: WebapiService,
    public _repositoryAutService: WebapiAuthService) {}
  ngOnInit() {
    this.getRepository();
  }
  getRepository()
  {
    this._repositoryService.getRepository().subscribe(res=>{
      this.listRepository=res;
    })
  }
  getAuthenticate()
  {
    this._repositoryAutService.getAuthenticate().subscribe(res=>{
      this.authenticate=res;
      if(res.id>=0)
        this.autentified=true;
    })
  }
}
