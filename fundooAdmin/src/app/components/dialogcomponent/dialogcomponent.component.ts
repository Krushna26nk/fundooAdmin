import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialogcomponent',
  templateUrl: './dialogcomponent.component.html',
  styleUrls: ['./dialogcomponent.component.scss']
})
export class DialogcomponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,private dialogRef:MatDialogRef<DialogcomponentComponent>) { }
  selectServiceData :any;

  ngOnInit() {
    this.selectServiceData = this.data.data;
    console.log(this.selectServiceData);
  }

  onRemove(){
    this.dialogRef.close();
  }

}
