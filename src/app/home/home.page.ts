// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {

//   constructor() {}

// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ComuniService } from '../services/comuni.service';

interface Comune {
  Sigla: string;
  Provincia: string;
  Superficie: number;
  Residenti: number;
  NumComuni: number;
  IdRegione: number;
  CodIstat: string;
  Image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  items: Comune[] = [];
  page = 1;
  perPage = 20;

  constructor(private comuniService: ComuniService) {}

  ngOnInit() {
    this.loadComuni();
  }

  loadComuni() {
    this.comuniService.getComuni(this.page, this.perPage).subscribe(res => {
      this.items.push(...res);
      this.page++;
    });
  }

  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const offsetHeight = event.target.offsetHeight;
    const isEndOfScroll = (scrollTop + offsetHeight) >= scrollHeight;

    if (isEndOfScroll) {
      this.loadComuni();
    }
  }
}


