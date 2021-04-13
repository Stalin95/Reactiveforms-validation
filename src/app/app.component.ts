import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MustMatch} from './_helpers/must-match.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "RegForm";
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}


//   constructor(private formbuilder:FormBuilder){}

//   registrationForm = this.formbuilder.group({
//     username: ['stalin'],
//       password : [''],
//       confirmPassword :['']
//   })
//   // registrationForm = new FormGroup ({
//   //   username: new FormControl (''),
//   //   password : new FormControl (''),
//   //   confirmPassword : new FormControl ('')
//   //   address : new FormGroup({
//   //     state : new FormControl(''),
//   //     city : new FormControl('')

//   // })

// apiloadout(){
//   this.registrationForm.setValue({
//     username:'bruse',
//     password:'1234',
//     confirmPassword:'1234'
//   });
// }
// }
