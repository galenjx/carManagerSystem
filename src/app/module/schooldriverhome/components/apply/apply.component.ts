import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import qs from 'qs';
import { ActivatedRoute } from '@angular/router';
axios.defaults.withCredentials = true

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  //校园分区内容
  public mancardata: any
  //个人车辆信息
  public usercardata: any
  //中间变量
  public middledata: any
  public flag: boolean = true
  //车主
  public carowner: String
  public phonenumber: String
  public carnum: String = ''
  public car_category: String = ''
  public area_category_name: String = ''
  //申请时间
  public time_slot: any = ''
  public remark: any = ''


  constructor(public route: ActivatedRoute) {
    //获取传过来的数据
    this.route.queryParams.subscribe((res) => {
      this.phonenumber = res.phonenumber
      this.carowner = res.name
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

  //获取个人车辆信息
  getmancarData() {
    this.axiosGet('http://localhost:3000/personal_car_list?phonenumber=' + this.phonenumber)
      .then((res) => {

        console.log(res)
        this.middledata = res
        // console.log(this.middledata.data.message)
        if (this.middledata.data.message) {
          this.flag = false
        } else {
          this.flag = true
          this.usercardata = this.middledata.data.finalData
          console.log(this.usercardata)
        }
      })
      .catch(err => alert('获取车辆内容失败'))
  }





  ngOnInit(): void {
    this.axiosGet('http://localhost:3000/category/get')
      .then((res) => {
        this.mancardata = res
      })
      .catch(err => alert('获取校园分区内容失败'))
    this.getmancarData()
  }

  //添加车辆
  addcarsum() {

    axios.post('http://localhost:3000/posts/new', qs.stringify({
      carnum: this.carnum,
      carowner: this.carowner,
      car_category: this.car_category,
      area_category_name: this.area_category_name,
      phonenumber: this.phonenumber,
      time_slot: this.time_slot,
      remark: this.remark,
      status: 0
    }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' } //加上这个
      })
      .then(res => {
        if (res.data.err_code == 0) {
          alert("添加车辆成功")
          this.getmancarData()
        }
        if(res.data.err_code == 2){
          alert(res.data.message)
        }
      })
      .catch(err => alert('添加车辆失败，请重试'));

  }

  //删除
  dodelete(id) {
    this.axiosGet('http://localhost:3000/posts_delete_post?id=' + id)
      .then((res) => {
        this.getmancarData()
      })
      .catch(err => alert('删除车辆内容失败'))
  }

}
