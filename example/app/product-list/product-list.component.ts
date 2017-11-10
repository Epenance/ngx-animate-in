import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      title: 'CITTA DI MILANO',
      image: 'https://www.kaufmannstatic.com/Images/146768_charcoal_00-T20171005083903.jpg?i=146768_charcoal_00-T20171005083903.jpg&w=320&h=450'
    },
    {
      title: 'HUGO - Grey',
      image: 'https://www.kaufmannstatic.com/Images/148455_gr%C3%A5_00-T20171024085447.jpg?i=148455_gr%C3%A5_00-T20171024085447.jpg&w=320&h=450'
    },
    {
      title: 'SAND - Blue',
      image: 'https://www.kaufmannstatic.com/Images/148338_navy_00-T20170825012601.jpg?i=148338_navy_00-T20170825012601.jpg&w=320&h=450'
    },
    {
      title: 'Tiger of Sweden - Blue',
      image: 'https://www.kaufmannstatic.com/Images/148828_bl%C3%A5_00-T20171023092247.jpg?i=148828_bl%C3%A5_00-T20171023092247.jpg&w=320&h=450'
    },
    {
      title: 'Hugo Boss - Grey',
      image: 'https://www.kaufmannstatic.com/Images/148620_gr%C3%A5_00-T20170801113655.jpg?i=148620_gr%C3%A5_00-T20170801113655.jpg&w=320&h=450'
    },
    {
      title: 'Tiger of Sweden - Black',
      image: 'https://www.kaufmannstatic.com/Images/148592_gr%C3%A5_00-T20170629113941.jpg?i=148592_gr%C3%A5_00-T20170629113941.jpg&w=320&h=450'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addMore() {
    const newProducts = [
      {
        title: 'CITTA DI MILANO',
        image: 'https://www.kaufmannstatic.com/Images/146768_charcoal_00-T20171005083903.jpg?i=146768_charcoal_00-T20171005083903.jpg&w=320&h=450'
      },
      {
        title: 'HUGO - Grey',
        image: 'https://www.kaufmannstatic.com/Images/148455_gr%C3%A5_00-T20171024085447.jpg?i=148455_gr%C3%A5_00-T20171024085447.jpg&w=320&h=450'
      },
      {
        title: 'SAND - Blue',
        image: 'https://www.kaufmannstatic.com/Images/148338_navy_00-T20170825012601.jpg?i=148338_navy_00-T20170825012601.jpg&w=320&h=450'
      },
      {
        title: 'Tiger of Sweden - Blue',
        image: 'https://www.kaufmannstatic.com/Images/148828_bl%C3%A5_00-T20171023092247.jpg?i=148828_bl%C3%A5_00-T20171023092247.jpg&w=320&h=450'
      },
      {
        title: 'Hugo Boss - Grey',
        image: 'https://www.kaufmannstatic.com/Images/148620_gr%C3%A5_00-T20170801113655.jpg?i=148620_gr%C3%A5_00-T20170801113655.jpg&w=320&h=450'
      },
      {
        title: 'Tiger of Sweden - Black',
        image: 'https://www.kaufmannstatic.com/Images/148592_gr%C3%A5_00-T20170629113941.jpg?i=148592_gr%C3%A5_00-T20170629113941.jpg&w=320&h=450'
      }
    ];

    this.products = this.products.concat(this.products);
  }

}
