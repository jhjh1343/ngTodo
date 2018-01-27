import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminRoutingModule} from '../../admin-routing.module';
import {AdminService} from '../../admin.service';
import {NewsVo} from '../../../domain/news.vo';
import {NewsViewDialogComponent} from './news.view.dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  news = new NewsVo();
  constructor(private route: ActivatedRoute, private adminService: AdminService, private dialog: MatDialog) {
    console.log("constructor");
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log(param);
      this.adminService.findOneNews(+param['news_id']).subscribe((body: NewsVo) => this.news = body); // +를 붙이면 string -> number로 변환

    });
  }
  confirmRemove() {
    // 컨펌 다이어로그 띄우기
    const dialogRef = this.dialog.open(NewsViewDialogComponent, {data: {content: '삭제하시겠습니까?'}});
    dialogRef.afterClosed().subscribe(data => {
     console.log(data);
    });
  }
}
