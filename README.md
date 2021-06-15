## nidoca framework (nidoca-form-helper)

it's often tedious and time-consuming to read current values ​​from formular fields.
this little helper class will help you get the job done.
it finds all form elements (input, select, textarea, button), automatically reads out the current values and returned the corresponding model object.

|project info||
|:-------------|:-------------|
|npm|<nobr>[![Published on npm](https://img.shields.io/npm/l/@domoskanonos/nidoca-form-helper)](https://www.npmjs.com/package/@domoskanonos/nidoca-form-helper) [![Published on npm](https://img.shields.io/npm/v/@domoskanonos/nidoca-form-helper)](https://www.npmjs.com/package/@domoskanonos/nidoca-form-helper) [![Published on npm](https://img.shields.io/bundlephobia/min/@domoskanonos/nidoca-form-helper)](https://www.npmjs.com/package/@domoskanonos/nidoca-form-helper) [![Published on npm](https://img.shields.io/bundlephobia/minzip/@domoskanonos/nidoca-form-helper)](https://www.npmjs.com/package/@domoskanonos/nidoca-form-helper) [![Published on npm](https://img.shields.io/npm/dw/@domoskanonos/nidoca-form-helper)](https://www.npmjs.com/package/@domoskanonos/nidoca-form-helper)</nobr>|
|github|<nobr>[![Published on git](https://img.shields.io/github/languages/code-size/domoskanonos/nidoca-form-helper)](https://github.com/domoskanonos/nidoca-form-helper)</nobr>|
|donation|<nobr>[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SWGKEVSK2PDEE)</nobr>|


### usage
#### install npm
    npm i @domoskanonos/nidoca-form-helper

#### let's assume, you have an html formular with several input fields and want to read out the current values:
    <form id="myForm">
        <input type="test" name="myText" value="myTextValue" />
        <select name="mySelect">
            <option value="myOptionValue" selected>my option value</option>
        </select>
        <textarea name="myTextarea">myTextareaValue</textarea>
        <button name="myButton" value="myButtonValue"></button>
    </form>

#### code
##### typescript model class
    //corresponding form model class
    class Test {
        myText: string | undefined;
        myTextarea: string | undefined;
        myButton: string | undefined;
        mySelect: string | undefined;
    }

##### get current values from formular elements as test object instance
    // get values from form element
    const formElement = document.getElementById("myForm");
    const nidocaHelperForm: NidocaHelperForm<Test> = new NidocaHelperForm();
    const model: Test = nidocaHelperForm.getCurrent(formElement);

##### current test object value
    {
        myText: "myTextValue";
        myTextarea: "myTextareaValue;
        myButton: "myButtonValue";
        mySelect: "mySelectValue";
    }
