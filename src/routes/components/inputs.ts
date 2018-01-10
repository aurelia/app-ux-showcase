import {
    ValidationControllerFactory,
    ValidationController,
    ValidationRules
} from 'aurelia-validation';
import { inject } from 'aurelia-dependency-injection';

@inject(ValidationControllerFactory)
export class Inputs {
    public firstName = '';
    public email = '';
    public controller = null;

    constructor(public controllerFactory: ValidationControllerFactory) {
        this.controller = controllerFactory.createForCurrentScope();
    }

    submit() {
        this.controller.validate();
    }

}

ValidationRules
    .ensure('firstName').required()
    .ensure('email').required().email()
    .on(Inputs); 