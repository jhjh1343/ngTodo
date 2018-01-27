import { Component, OnInit } from '@angular/core';
import {NewsVo} from '../../../domain/news.vo';
import {AdminService} from '../../admin.service';
import {ResultVo} from '../../../domain/result.vo';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  news = new NewsVo() ;
  fileList: FileList; // html 내장
  constructor(private adminService: AdminService, private snackBar: MatSnackBar, private route: Router) { }

  ngOnInit() {
  }

  addNews() {
    this.adminService.addNews(this.news).subscribe((body: ResultVo) => {
      console.log(body);
      if (body.result === 0) {
        this.snackBar.open("글쓰기가 성공하였습니다.", null, {duration: 2000});
        this.route.navigateByUrl('/admin/news');
      }else {
        this.snackBar.open(body.value, null, {duration: 2000});
      }
    });
  }

  fileChange(event: any) {
    this.fileList = event.target.files;
    console.log(this.fileList);
// show thumbnail
    const reader = new FileReader();
    reader.readAsDataURL((this.fileList[0]));
    reader.onload = () => {
// this.thumbnailSrc = reader.result;
      this.imageUpload();
    };
  }

  imageUpload() {

  }
}
