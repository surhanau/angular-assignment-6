import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild('submitForm', { static: false }) submitForm: NgForm;

    defaultSubscription: string = 'advanced';
    submitted: boolean = false;

    inputData = {
        email: '',
        subscription: '',
        password: ''
    }

    onSubmit(): void {
        this.submitted = true;
        console.log(this.submitForm);

        this.inputData.email = this.submitForm.value.userData.email;
        this.inputData.subscription = this.submitForm.value.userData.subscriptions;
        this.inputData.password = this.submitForm.value.userData.password;

        this.submitForm.form.patchValue({
            userData: {
                email: '',
                subscriptions: this.defaultSubscription,
                password: ''
            }
        });
    }
}
