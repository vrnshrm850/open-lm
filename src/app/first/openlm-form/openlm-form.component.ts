import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
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
  viewMode(formData, i) {
    this.router.navigate([
      'openlm-view',
      formData[i].title,
      formData[i].author,
      formData[i].price,
    ]);
    this.formData[i].editMode = false;
  }

  save(formData,i) {
    // to save the data in localstorage. Not implemented yet
    this.setDataToLocalStorage('appData', formData);
  }

  // Common functions need to go in common funtion file....
  isEmptyArray(data: any[]): any {
    if (data instanceof Array && data.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  isEmptyString(val: any): any {
    if (typeof val === 'string') {
      if (val.trim() === '') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  isUndefinedOrNullEmpty(val: any): any {
    let status: any = false;
    if (this.isEmptyString(val)) {
      status = true;
    } else if (this.isEmptyArray(val)) {
      status = true;
    } else if (val === null) {
      status = true;
    } else {
      if (val === undefined || val === 'undefined') {
        status = true;
      } else {
        status = false;
      }
    }
    return status;
  }
  setDataToLocalStorage(name: any, val: any): any {
    if (!this.isUndefinedOrNullEmpty(val)) {
      if (_.isString(val)) {
        localStorage.setItem(name, val);
      } else {
        localStorage.setItem(name, JSON.stringify(val));
      }
    }
  }
  
}
