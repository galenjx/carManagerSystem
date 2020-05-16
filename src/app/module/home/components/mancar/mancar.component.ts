import { Component, OnInit } from '@angular/core';
import axios from 'axios';

import qs from 'qs';

import { Router } from '@angular/router'

import { StorageService } from '../../services/storage.service';

axios.defaults.withCredentials = true
@Component({
  selector: 'app-mancar',
  templateUrl: './mancar.component.html',
  styleUrls: ['./mancar.component.scss']
})
export class MancarComponent implements OnInit {
  //控制列表是否显示（没车时不显示）
  public flag: boolean = true
  //中间变量，缓存数据
  public middledata: any
  //页码
  public page: any = 1
  //校园分区数据
  public mancardata_category: any
  public mancardata_category_name: string = "所有区域"
  //最终数据
  public mancardata: any = {}
  constructor(public router: Router, public storage: StorageService) { }



  //获取特定页码数据
  getmancarData(page) {
    if (this.mancardata.data && page > this.mancardata.data.finalData.pageControl.pageControlLists.length + 1) {
      page = this.mancardata.data.finalData.pageControl.pageControlLists.length + 1
    }
    if (page < 1) {
      page = 1
    }
    this.storage.axiosGet('http://localhost:3000/settings/edit_post_list?page=' + page)
      .then((res) => {
        this.middledata = res

        this.page = page

        if (this.middledata.data.message) {
          this.flag = false
        } else {
          this.flag = true

          this.mancardata = this.middledata.data.finalData
        }

      })
      .catch(err => alert('获取车辆内容失败'))
  }




  ngOnInit(): void {
    //获取分类数据
    this.storage.axiosGet('http://localhost:3000/category/get')
      .then((res) => {
        this.mancardata_category = res
      })
      .catch(err => alert('获取校园区域内容失败'))
    this.getmancarData(this.page)
  }
  //删除车辆
  dodelete(id) {
    this.storage.axiosGet('http://localhost:3000/posts_delete_post?id=' + id)
      .then((res) => {
        this.getmancarData(this.page)
      })
      .catch(err => alert('删除车辆内容失败'))
  }

  //按分类查询
  docategory() {
    if (this.mancardata_category_name === '所有区域') {
      return this.getmancarData(this.page)
    }

    axios.post('http://localhost:3000/category_car_list_post', qs.stringify({
      page: this.page,
      mancardata_category_name: this.mancardata_category_name,
    }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' } //加上这个
      })
      .then((response) => {
        if (response.data.message) {
          this.flag = false
        } else {
          this.flag = true
          this.mancardata = response.data.finalData
        }

      })
      .catch(err => alert('获取车辆内容失败'));

  }

}


