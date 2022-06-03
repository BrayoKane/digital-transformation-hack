import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  fileName ;
  selectedFiles : FormData;

  constructor() { }

  ngOnInit(): void {
  }

  openFileInput(id) {
    document.getElementById(id).click();
  }

  handleUpload(e, form?: string) {
    // console.log(e.target.files[0]);
    this.fileName = e.target.files[0].name;
    if (form) {
      this[form].patchValue({
        report: this.fileName,
      });
    }
    // this.selectedFile = new FormData();
    this.selectedFiles.set('report', e.target.files[0]);
  }

  addSkill(){
    
  }

}
