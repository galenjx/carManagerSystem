import { Injectable } from '@angular/core';

import axios from 'axios';

axios.defaults.withCredentials = true

@Injectable({
  providedIn: 'root'
})
export class StorageService {


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


}
