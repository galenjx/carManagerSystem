import { Component, OnInit } from '@angular/core';
import axios from 'axios';

import { StorageService } from '../../services/storage.service';
axios.defaults.withCredentials = true
@Component({
  selector: 'app-cardata',
  templateUrl: './cardata.component.html',
  styleUrls: ['./cardata.component.scss']
})
export class CardataComponent implements OnInit {
  //中间变量
  public middledata: any
  //最终数据
  public mancardata: Array<any> = []
  public cate_car_num: any
  public flag: boolean = false
  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    this.getAllData()

  }

  async getAllData() {
    try {
      this.middledata = await this.storage.axiosGet('http://localhost:3000/category/get')
      //根据校园区域获取所有实时车辆数量信息
      this.middledata.data.lists.map((element, index) => {
        this.storage.axiosGet('http://localhost:3000/category/get_carnum?name=' + element.name)
          .then((res) => {

            this.cate_car_num = res
            //判断是否需要显示提示信息的标识符
            if (this.cate_car_num.data.count >= element.num * 0.9) {
              this.cate_car_num.data.flag = true
            }
            //将综合数据整合到一个数组中
            this.mancardata.push({ ...element, ...this.cate_car_num.data })
            console.log(this.mancardata)
          })
      });
    } catch (error) {
      alert('获取数据失败')
    }


  }


}
