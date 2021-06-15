## nidoca framework (nidoca-form-helper)

It's often tedious and time-consuming to read current values ​​from formular fields.
This little helper class will help you get the job done.
It finds all form elements (input, select, textarea, button)
and automatically reads the current values and return a corresponding model object.

|project info||
|:-------------|:-------------|
|npm|<nobr>[![Published on npm](https://img.shields.io/npm/l/@domoskanonos/nidoca-layout)](https://www.npmjs.com/package/@domoskanonos/nidoca-layout) [![Published on npm](https://img.shields.io/npm/v/@domoskanonos/nidoca-layout)](https://www.npmjs.com/package/@domoskanonos/nidoca-layout) [![Published on npm](https://img.shields.io/bundlephobia/min/@domoskanonos/nidoca-layout)](https://www.npmjs.com/package/@domoskanonos/nidoca-layout) [![Published on npm](https://img.shields.io/bundlephobia/minzip/@domoskanonos/nidoca-layout)](https://www.npmjs.com/package/@domoskanonos/nidoca-layout) [![Published on npm](https://img.shields.io/npm/dw/@domoskanonos/nidoca-layout)](https://www.npmjs.com/package/@domoskanonos/nidoca-layout)</nobr>|
|github|<nobr>[![Published on git](https://img.shields.io/github/languages/code-size/domoskanonos/nidoca-layout)](https://github.com/domoskanonos/nidoca-layout)</nobr>|
|donation|<nobr>[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SWGKEVSK2PDEE)</nobr>|


### Usage

#### let's assume you have an HTML form with several input fields and want to read out the current values:
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

##### model value

    {
        myText: "myTextValue";
        myTextarea: "myTextareaValue;
        myButton: "myButtonValue";
        mySelect: "mySelectValue";
    }
