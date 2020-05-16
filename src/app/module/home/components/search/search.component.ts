import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  //搜索关键字
  public carmessage: string = ''
  //车辆数据结果
  public mancardata: any

  public flag: boolean = false

  constructor(public storage: StorageService) { }

  ngOnInit(): void {
  }
  //搜索
  searchcar() {
    this.storage.axiosGet('http://localhost:3000/search_get?carmessage=' + this.carmessage)
      .then((res) => {
        this.mancardata = res
        
        if(this.mancardata.data.lists.length == 0){
          alert('没有符合该条件的车辆，请重试')
        }else{
          this.flag = true
        }
      })
      .catch(err => alert('获取车辆内容失败'))
  }
  //删除
  dodelete(id) {
    this.storage.axiosGet('http://localhost:3000/posts_delete_post?id=' + id).then((res) => {
      this.flag = false
    })
      .catch(err => alert('删除车辆内容失败'))
  }
}
