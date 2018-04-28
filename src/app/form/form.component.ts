import { Component, OnInit } from "@angular/core";
// import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from "../_services/http.service";
import { PanoImg } from "../_models/panoImg";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  img = null;
  speed = [1, 2, 3, 4, 5];
  selectedFile: File = null;

  constructor(
    private http: HttpService,
  private router: Router)
  {}

  ngOnInit() {
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0];

      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.img = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  upload(form: NgForm) {
    let checked = "";
    if (form.controls.manualRotation.value == true) checked = "true";
    else checked = "false";

    let model = new FormData();
    model.append("image", this.selectedFile);
    model.append("imgName", form.controls.name.value);
    model.append("manualRotation", checked);
    model.append("rotationSpeed", form.controls.rotationSpeed.value);

    this.http.postPano(model);
    form.reset();
  }
}
