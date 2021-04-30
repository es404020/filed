import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  qoutes: { text1: string; text2: string; quote: string; src: string; name: string; role: string; twittername: string; }[];

 

  constructor() { }

  ngOnInit() {

    this.qoutes=[

      {
        "text1":"It surpassed our",
        "text2":"expectations",
        "quote":"Filed has completely surpassed our expectations. I will refer everyone I know. Filed is worth much more than I paid.",
        "src":"assets/img.jpg",
        "name":"Tania Y.",
        "role":"Flexi Content",
        "twittername":"@Hello"
  
      },
      {
        "text1":"The essential",
        "text2":"marketing tool",
        "quote":"Filed is the most valuable business resource we have EVER purchased. I was amazed at the quality of filed. We were treated like royalty.",
        "src":"assets/img.jpg",
        "name":"Jack Francis",
        "role":"Manager",
        "twittername":"@ Accidents Direct"
  
      },
      {
        "text1":"Your company is",
        "text2":"truly upstanding",
        "quote":"The service was excellent. After using filed my business skyrocketed! It really saves me time and effort.",
        "src":"assets/img.jpg",
        "name":"Dawna N.",
        "role":"Editor",
        "twittername":"@ Museum of Typography"
  
      }
  
    ]
  }

}
