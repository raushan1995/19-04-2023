import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  defaultCountry = 'india';

  firstname:string;
  lastname:string;
  email: string;
 

 

  
  @ViewChild('myForm') form: NgForm;

  onSubmit(){
    console.log(this.form);

    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.email = this.form.value.personDetails.email;
    

    this.form.reset();
  }

  setDefaultValues(){
    // this.form.value.personDetails.firstname = 'John';
    // this.form.value.personDetails.lastname = 'smith';
    // this.form.value.personDetails.email = 'abc@example.com';
    // this.form.setValue({
    //  
    //   personDetails: {
    //     firstname: 'John',
    //     lastname: 'Smith',
    //     email: 'abc@example.com'
    //   }
    // })

    this.form.form.patchValue({
      personDetails: {
         firstname: 'John',
         lastname: 'Smith',
         email: 'abc@example.com'
      }
    })
  }
}
