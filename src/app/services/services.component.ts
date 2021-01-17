import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  private slug: string;
  text:string = "";
  photo:string = "";
  title:string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.setItem(params['slug'])
    });
  }

  setItem(slug){

    if(slug === "water"){
      this.title = "Water & Sewer"
      let content = "<h2>Water and Sewer Billing</h2>";
      content += `<h3>Water and Sewer Rates</h3>`

      this.text = content
    }
  }

}
