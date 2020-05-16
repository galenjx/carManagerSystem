import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import qs from 'qs';
axios.defaults.withCredentials = true
import { Router, NavigationExtras } from '@angular/router';
// import { Router} from '@angular/router'

// //定义点击事件
// gotoDevicePay(key):void{
//     //跳转路径 实现的是动态跳转数据
//     this.router.navigate(['/devicepay/'],{queryParams:{id:key}})
//   }

@Component({
  selector: 'app-logres',
  templateUrl: './logres.component.html',
  styleUrls: ['./logres.component.scss']
})
export class LogresComponent implements OnInit {
  public phonenumber: any
  public password: any
  public status: number = 0

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  dologin() {
    axios.post('http://localhost:3000/login', qs.stringify({
      phonenumber: this.phonenumber,
      password: this.password,
      status: this.status
    }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' } //加上这个
      })
      .then((response) => {
        //普通用户
        if (response.data.err_code == 0 && response.data.user.status == 0) {
          sessionStorage.setItem("session_id", response.data.user.status)
          let navigationExtras: NavigationExtras = {
            queryParams: {
              'phonenumber': response.data.user.phonenumber,
              'name': response.data.user.name
            },
          };
          this.router.navigate(['/generalhome'], navigationExtras);
        }
        //公车驾驶员
        if (response.data.err_code == 0 && response.data.user.status == 2) {
          sessionStorage.setItem("session_id", response.data.user.status)
          let navigationExtras: NavigationExtras = {
            queryParams: {
              'phonenumber': response.data.user.phonenumber,
              'name': response.data.user.name
            },
          };
          this.router.navigate(['/schooldriverhome'], navigationExtras);
        }
        //系统管理员
        if (response.data.err_code == 0 && response.data.user.status == 1) {
          sessionStorage.setItem("session_id", response.data.user.status)
          this.router.navigate(['/home']);
        }

        //登录失败
        if (response.data.err_code == 1){
          alert('登录失败，请检查所有信息重试')
        }
        
      })
      .catch(err => alert('程序出错'));

  }
  doregister() {
    axios.post('http://localhost:3000/register', qs.stringify({
      phonenumber: this.phonenumber,
      password: this.password,
      status: this.status
    }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' } //加上这个
      })
      .then(res => {
        if (res.data.err_code == 0) {
          alert("注册成功")
        }
        if(res.data.err_code == 1){
          alert(res.data.message)
        }
        
      })
      .catch(err => alert('程序出错'));
  }

}
