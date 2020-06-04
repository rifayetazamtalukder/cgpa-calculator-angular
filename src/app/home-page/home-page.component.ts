import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private videoUrl = 'https://youtube.com/embed/ZJYQEnyzNT8'; // WPF - C# : CGPA-GPA Calculator Demo Video

  public safeVideoUrl: any;

  constructor(private sanitizer: DomSanitizer) {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  ngOnInit(): void {
  }

}
