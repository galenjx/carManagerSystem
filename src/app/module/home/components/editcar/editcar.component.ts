import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import qs from 'qs';
import { ActivatedRoute } from '@angular/router';
axios.defaults.withCredentials = true
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-editcar',
  templateUrl: './editcar.component.html',
  styleUrls: ['./editcar.component.scss']
})
export class EditcarComponent implements OnInit {
  //车辆信息
  public carmessage: any
  //校园分区信息
  public mancardata: any

  constructor(private routerinfo: ActivatedRoute, public storage: StorageService) { }
  private id: any
  ngOnInit(): void {

    this.id = this.routerinfo.snapshot.queryParams["id"]
    //根据id获取车辆信息
    this.storage.axiosGet('http://localhost:3000/topic/edit?id=' + this.id)
      .then((res) => {
        this.carmessage = res
      })
      .catch(err => alert('获取车辆内容失败'))

    //校园分区信息
    this.storage.axiosGet('http://localhost:3000/category/get')
      .then((res) => {
        this.mancardata = res
      })
      .catch(err => alert('获取校园区域内容失败'))

  }


  //编辑车辆
  editcarsum() {
    console.log(this.carmessage)
    axios.post('http://localhost:3000/topic/editp', qs.stringify({
      _id: this.id,
      carnum: this.carmessage.data.result.carnum,
      carowner: this.carmessage.data.result.carowner,
      car_category: this.carmessage.data.result.car_category,
      area_category_name: this.carmessage.data.result.area_category_name,
      phonenumber: this.carmessage.data.result.phonenumber,
      time_slot: this.carmessage.data.result.time_slot,
      remark: this.carmessage.data.result.remark,
      status: this.carmessage.data.result.status
    }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' } //加上这个
      })
      .then(err => alert('更改车辆信息成功'))
      .catch(err => alert('更改车辆信息失败'));
  }
}
