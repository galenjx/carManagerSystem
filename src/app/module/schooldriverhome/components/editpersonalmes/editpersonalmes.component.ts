import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import qs from 'qs';
import {ActivatedRoute} from '@angular/router'
axios.defaults.withCredentials = true
@Component({
  selector: 'app-editpersonalmes',
  templateUrl: './editpersonalmes.component.html',
  styleUrls: ['./editpersonalmes.component.scss']
})
export class EditpersonalmesComponent implements OnInit {
  public phonenumber:String 
  public new_password:String = ''
  public origin_password:String = ''
  public middlemes:any = ''

  constructor(public route:ActivatedRoute) { 
    this.route.queryParams.subscribe((res)=>{
      this.phonenumber = res.phonenumber
    })
  }

  axiosGet(api) {

    return new Promise((resolve, reject) => {
      axios.get(api)
        .then(function (response) {
          // handle success
          resolve(response);
        })
        .catch(function (error) {
          // handle error
          reject(error);
        })
        .then(function () {
          // always executed
        });
    })
  }

  ngOnInit(): void {

    this.axiosGet('http://localhost:3000/usermes_get?phonenumber='+this.phonenumber).then((res) => {
      this.middlemes = res
    })
  }


  edituser(){

    axios.post('http://localhost:3000/user_edit', qs.stringify({
      name:this.middlemes.data.data.name,
      phonenumber:this.middlemes.data.data.phonenumber,
      new_password:this.new_password,
      origin_password:this.origin_password,
      gender:this.middlemes.data.data.gender,
      license:this.middlemes.data.data.license,
      remarks:this.middlemes.data.data.remarks,
    }),
    {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'} //加上这个
  })
    .then(function (response) {
      alert(response.data.message)
    })
    .catch(function (error) {
      alert(error);
    });
  }

}
