import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  filterTypes = [
    'Client',
    'Customer'
  ];


  dynamicForm: FormGroup;
 

  constructor( public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder) {}

  ngOnInit() {
    this.dynamicForm = this.fb.group({
      filters: this.fb.array([])
    });
    
    // Uncomment the line below If you want to seed the Form with some data
    this.seedFiltersFormArray();
  }

  seedFiltersFormArray() {
   
      const formGroup = this.createFilterGroup();
      this.filtersFormArray.push(formGroup);
 
  }

  createFilterGroup() {
    return this.fb.group({
      filterType: [],
      name: []
    });
  }

  addRow() {
    this.filtersFormArray.push(this.createFilterGroup());
  }

  removeRow(index) {
    this.filtersFormArray.removeAt(index);
  }

 

  getFormControl() {
    return this.fb.control(null);
  }

  save() {
    
    this.dialogRef.close(this.dynamicForm.value)
  }

  get filtersFormArray() {
    return (<FormArray>this.dynamicForm.get('filters'));
  }

  getFilterGroupAtIndex(index) {
    return (<FormGroup>this.filtersFormArray.at(index));
  }

}
