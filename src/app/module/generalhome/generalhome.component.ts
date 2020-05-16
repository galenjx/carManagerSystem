import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import axios from 'axios';
axios.defaults.withCredentials = true
@Component({
  selector: 'app-generalhome',
  templateUrl: './generalhome.component.html',
  styleUrls: ['./generalhome.component.scss']
})
export class GeneralhomeComponent implements OnInit {
  public res:any
  public middledata:any
  public queryParams :any = {}

  constructor(public route: ActivatedRoute) {
    this.middledata = this.route.queryParams
    this.queryParams = {...this.middledata._value}
    if(!this.queryParams.name){
      this.queryParams.name = ''
    }
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
  }
  dologout(){
    this.axiosGet('http://localhost:3000/logout').then((res) => {
      this.res = res
      if(this.res.data.err_code === 1){
        sessionStorage.clear()
      }
    })
  }

}
