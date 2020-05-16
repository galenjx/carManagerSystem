import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import qs from 'qs';
import { StorageService } from '../../services/storage.service';
axios.defaults.withCredentials = true
@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.scss']
})
export class AddcarComponent implements OnInit {
  //分类数据
  public mancardata: any
  //车辆数据
  public carmessage: any = {
    carnum: '',
    carowner: '',
    car_category: '',
    area_category_name: '',
    phonenumber: '',
    time_slot: '',
    remark: '',
    status
  }
  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    this.storage.axiosGet('http://localhost:3000/category/get')
      .then((res) => {
        this.mancardata = res
      })
      .catch(err => alert('获取校园区域内容失败'))
  }

  //添加车辆
  addcarsum() {
    axios.post('http://localhost:3000/posts/new', qs.stringify({
      carnum: this.carmessage.carnum,
      carowner: this.carmessage.carowner,
      car_category: this.carmessage.car_category,
      area_category_name: this.carmessage.area_category_name,
      phonenumber: this.carmessage.phonenumber,
      time_slot: this.carmessage.time_slot,
      remark: this.carmessage.remark,
      status: this.carmessage.status
    }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' } //加上这个
      })
      .then(res => {
        if (res.data.err_code == 0) {
          alert("添加车辆成功")
        }
        if(res.data.err_code == 2){
          alert(res.data.message)
        }
      })
      .catch(err => alert('添加车辆失败，请重试'));
  }
}
