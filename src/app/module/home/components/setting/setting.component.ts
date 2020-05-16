import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import qs from 'qs';
axios.defaults.withCredentials = true

import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  //校园区域名称
  public name: string
  //可容纳车辆数
  public num: number
  //综合信息
  public mancardata: any
  constructor(public storage: StorageService) {

  }

  ngOnInit(): void {
    //获取所有校园区域信息
    this.storage.axiosGet('http://localhost:3000/category/get')
    .then((res) => {
      this.mancardata = res
    })
    .catch(err => alert('获取校园信息失败'))
  }


  // addtopic() {
  //   axios.post('http://localhost:3000/category/new', qs.stringify({
  //     name: this.name,
  //     num: this.num,
  //   }),
  //   {
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' } //加上这个
  //   })
  //     .then((response) => {
  //       this.storage.axiosGet('http://localhost:3000/category/get').then((res) => {
  //         this.mancardata = res

  //       })

  //     })
  //     .catch(function (error) {
  //       alert(error);
  //     });
  // }



  //尝试改为async，await
  //添加校园区域
  async addtopic() {
    try {
      // 添加数据
      await axios.post('http://localhost:3000/category/new', qs.stringify({
        name: this.name,
        num: this.num,
      }),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
      // 更新数据
      this.mancardata = await this.storage.axiosGet('http://localhost:3000/category/get')
    }
    catch (error) {
      alert('添加校园信息失败')
    }
  }

  // edittopic(){
  //   axios.post('http://localhost:3000/category/edit', qs.stringify({
  //     name: this.name,
  //     num: this.num,
  //   }),
  //     {
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' } //加上这个
  //     })
  //     .then((response) => {
  //       this.storage.axiosGet('http://localhost:3000/category/get').then((res) => {
  //         this.mancardata = res

  //       })

  //     })
  //     .catch(function (error) {
  //       alert(error);
  //     });
  // }


  // 编辑
  async edittopic() {
    try {
      // 添加数据
      await axios.post('http://localhost:3000/category/edit', qs.stringify({
        name: this.name,
        num: this.num,
      }),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
      // 更新数据
      this.mancardata = await this.storage.axiosGet('http://localhost:3000/category/get')
    }
    catch (error) {
      alert('更改校园信息失败')
    }
  }





  // dodelete(id){
  //   this.storage.axiosGet('http://localhost:3000/category/delete?id='+id)
  //   .then((res) => {

  //     this.storage.axiosGet('http://localhost:3000/category/get').then((res) => {
  //       this.mancardata = res
  //     })
  //   })

  // }


  async dodelete(id) {
    try {
      await this.storage.axiosGet('http://localhost:3000/category/delete?id=' + id)
      this.mancardata = await this.storage.axiosGet('http://localhost:3000/category/get')
    } catch (error) {
      alert('删除校园信息失败')
    }


  }


}
