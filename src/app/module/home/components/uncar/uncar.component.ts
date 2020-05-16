import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import { Router } from '@angular/router'

import { StorageService } from '../../services/storage.service';
axios.defaults.withCredentials = true
@Component({
  selector: 'app-uncar',
  templateUrl: './uncar.component.html',
  styleUrls: ['./uncar.component.scss']
})
export class UncarComponent implements OnInit {
  //控制车辆列表是否显示
  public flag: boolean = true
  //中间数据
  public middledata: any = {}
  public page: any = 1
  //最终数据
  public mancardata: any = {}
  constructor(public router: Router, public storage: StorageService) { }


  //获取所有
  getmancarData(page) {
    if (this.middledata.data && page > this.mancardata.pageControl.pageControlLists.length) {
      page = this.mancardata.pageControl.pageControlLists.length
    }
    if (page < 1) {
      page = 1
    }
    this.storage.axiosGet('http://localhost:3000/settings/edit_uncar_list_get?page=' + page)
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
      .catch(err => alert('获取车辆信息失败'))
  }



  ngOnInit(): void {
    this.getmancarData(this.page)
  }

  //编辑
  doedituncar(id) {
    this.storage.axiosGet('http://localhost:3000/topic/uncar_edit_get?id=' + id)
      .then((res) => {
        this.getmancarData(this.page)
      })
      .catch(err => alert('获取车辆信息失败'))
  }

  //删除
  dodelete(id) {
    this.storage.axiosGet('http://localhost:3000/posts_delete_post?id=' + id).then((res) => {
      this.getmancarData(this.page)
    })
      .catch(err => alert('删除车辆信息失败'))
  }

}
