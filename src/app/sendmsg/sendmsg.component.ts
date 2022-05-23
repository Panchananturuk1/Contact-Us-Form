import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-sendmsg',
  templateUrl: './sendmsg.component.html',
  styleUrls: ['./sendmsg.component.css'],
})
export class SendmsgComponent implements OnInit {
  sendMessage!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void {
    this.sendMessage = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required]),
    });
  }

  get gets() {
    return this.sendMessage.controls;
  }

  send(): void {}
  display = '';
  
  printConsole(val: any) {
    this.display = val;
    console.log(this.display);
  }
}
