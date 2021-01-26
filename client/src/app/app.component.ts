import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  images: any;
  list:any         =[]
  constructor(private http:HttpClient ) {}

  title = 'client';
  ngOnInit(){
    
  }
  onSubmit(){
    const formData = new FormData();
    formData.append('image', this.images);

    this.http.post<any>('http://localhost:3000/api/upload', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  selectImage(event:any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  getImage(){
    this.http.get("http://localhost:3000/api/uploadImageList").subscribe(data =>{
      console.log(data);
this.list=data
    })
  }
  
}
