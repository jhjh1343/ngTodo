export class PageVO {
  // typescript 문법이다.
  constructor(public pageIndex: number,
              public pageSize: number,
              public totalCount: number,
              public pageSizeOptions?: any) {
    if (!this.pageSizeOptions) {
      this.pageSizeOptions = [5, 15, 30, 60, 90];
    }
  }
}
