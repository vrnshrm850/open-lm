import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'openlm-form',
  templateUrl: './openlm-form.component.html',
  styleUrls: ['./openlm-form.component.scss'],
})
export class OpenlmFormComponent implements OnInit {
  formDataModel: any = {
    title: '',
    author: '',
    price: '',
  };
  formData: any = [];
  editMode: boolean;
  entryStep: any;
  constructor(public router: Router) {}

  ngOnInit(): void {}

  add_row(openLmForm: any) {
    this.entryStep = this.formData.length + 1;
    this.formDataModel['entryStep'] = this.entryStep;
    this.formData.push(JSON.parse(JSON.stringify(this.formDataModel)));
    this.formData.forEach((element) => {
      delete element._id;
    });
    // this.formDataModified.emit(this.formData);
    openLmForm.reset();
    console.log(openLmForm);
    openLmForm.controls['title'].setErrors(null);
    openLmForm.controls['author'].setErrors(null);
    openLmForm.controls['price'].setErrors(null);
  }

  delete_row(index) {
    if (this.formData[index].isDefault == true) {
    } else {
      if (this.formData.length == 1) {
        return false;
      } else {
        this.formData.splice(index, 1);
        this.formData.forEach((value, key) => {
          this.formData[key].entryStep = key + 1;
        });
        return true;
      }
    }
  }

  edit_row(i) {
    this.formData[i].editMode = true;
  }
  cancelEdit(i) {
    this.formData[i].editMode = false;
  }
  viewMode(i) {
    this.router.navigate(['openlm-view']);
    this.formData[i].editMode = false;
  }

  save(i) {
    // (<any>global).localStorage = {
    //   getItem(key: string) {
    //     return appSettings.getString(key);
    //   },
    //   setItem(key: string, value: string) {
    //     return appSettings.setString(key, value);
    //   },
    // };
  }
}
