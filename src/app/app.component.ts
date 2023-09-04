import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import {
  NgForm,
  NgModel,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { noSpace } from './validators/nospace.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'demoApp';
  parentMessage: string = 'This is a message from parent';
  fromChild: string = '';
  displayedMsg: string = 'Click the button to change this message!';
  userName: any = '';
  src: string = '../assets/Dog.png';
  isRed: boolean = true;
  postArr: Array<string> = ['Post1', 'Post2', 'Post3', 'Post4', 'Post5'];
  formStatus: string = '0';
  headingActive: boolean = false;
  cnt: number = 210983021;
  deCnt: number = 2.3321421;
  todayDate = new Date();
  myObj = {
    id: 1,
    name: 'shivam',
  };
  tempTxt: string =
    'This is a very long text and its handwritten by me but idk what i am writing send help';
  emailRegex = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
  contactRegex = '[789][0-9]{9}';
  form: any;
  @ViewChild(PostComponent) postChild: any;
  // Contructor runs immediately after class initialisation
  constructor(fb: FormBuilder, private router: Router) {
    console.log(this.postChild);
    // Creating a group
    this.form = fb.group({
      // These all are form controls which takes array is value
      // The 1st element in array is default value for this field and 2nd element are the validators
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      // Nested form groups
      contactDetails: fb.group({
        address: ['', [Validators.required]],
        contactNo: [
          '',
          [Validators.required, Validators.pattern(this.contactRegex)],
        ],
      }),
      username: ['', [Validators.required, noSpace.noSpaceValidation]],
      // Arrays in form
      skills: fb.array([]),
    });
    console.log(this.form);
  }
  // ngAfterViewInit runs once the component is loaded in DOM (just like useEffect in react)
  ngAfterViewInit(): void {
    console.log(this.postChild);
    setTimeout(() => {
      this.fromChild = this.postChild.toParent;
    }, 0);
  }
  receivedMsg(msg: string) {
    this.displayedMsg = msg;
  }
  // This will be called when user clicks "Enter"
  onKeyUp(username: string) {
    console.log(username);
  }
  showUsername() {
    console.log(this.userName);
  }
  newPost() {
    this.postArr.push('Post6');
  }
  deletePost(postIdx: number) {
    this.postArr.splice(postIdx, 1);
  }
  setFormStatus(status: string) {
    this.formStatus = status;
  }
  setHeadingActive(status: boolean) {
    this.headingActive = status;
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
  }
  onChange(f: NgModel) {
    console.log(f);
  }
  onReactiveSubmit() {
    console.log(this.form.value);
  }
  // Adding an element into skills array
  addSkills(skill: HTMLInputElement) {
    this.GetSkills.push(new FormControl(skill.value));
    skill.value = '';
    console.log(this.GetSkills.controls);
  }
  deleteSkill(index: number) {
    this.GetSkills.removeAt(index);
  }
  onClickNavigate() {
    this.router.navigate(['/task1']);
    // For dynamic params:
    // Ex, For /task1/1 write this
    // this.router.navigate(['/task1',1])
    // For query params:
    // Ex, For /task1?page=1 write this
    // this.router.navigate(['/task1'],{queryParams:{page:1}})
  }
  // Getters (used in reactive form)
  get fullname() {
    return this.form.get('fullName');
  }
  get Email() {
    return this.form.get('email');
  }
  // Getters for nested form group
  get GetAddress() {
    return this.form.get('contactDetails.address');
  }
  get GetContact() {
    return this.form.get('contactDetails.contactNo');
  }
  get GetSkills() {
    return this.form.get('skills') as FormArray;
  }
  get GetUserName() {
    return this.form.get('username');
  }
  // You can also get the form controller so you dont have to write separate getter method for each field
  get fc() {
    return this.form.controls;
  }
}
