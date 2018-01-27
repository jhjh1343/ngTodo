import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {NewsVo} from '../../domain/news.vo';
import {PageVO} from '../../domain/page.vo';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsList: Array<NewsVo>;
  page = new PageVO( 0, 5, 0);
  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit() {
    this.findNews();
  }

  findNews() {
    const params = {
      start_index: this.page.pageIndex * this.page.pageSize,
      page_size: this.page.pageSize
    }
    this.adminService.findNews(params).subscribe(body => {
      // console.log(body);
      this.newsList = body['data'];
      this.page.totalCount = body['total'];
      // console.log(this.newsList);
    });
  }

  pageChanged(event: PageVO) {
    // console.log(event);
    this.page.pageIndex = event.pageIndex;
    this.page.pageSize = event.pageSize;
    this.findNews();
  }

  gotoView(news: NewsVo) {
    this.router.navigateByUrl(`/admin/news/view/${news.news_id}`);
    // this.router.navigateByUrl('/admin/news/view/', [news.news_id]);
  }

  gotoWrite() {
    this.router.navigateByUrl('/admin/news/write');
  }


}
