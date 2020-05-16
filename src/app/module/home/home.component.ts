import { Component, OnInit } from '@angular/core';

import axios from 'axios';
axios.defaults.withCredentials = true
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public res:any
  constructor() { }
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
