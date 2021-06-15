## nidoca framework (nidoca-form-helper)

Es ist oftmals mühsam und aufwendig, aus Input Feldern den aktuellen Wert auszulesen und in ein Objekt zu speichern.
Ich habe dafür einen kleinen Helfer geschrieben, welcher alle Formular Komponenten (input, select, textarea, button) findet
und automatisch die aktuellen Werte dieser Komponenten ausliest und in ein JSON Object schreibt und zurück gibt.
Das Projekt ist mit Typescript umgesetzt.

|project info||
|:-------------|:-------------|
|npm|<nobr>[![Published on npm](https://img.shields.io/npm/l/@domoskanonos/nidoca-layout)](https://www.npmjs.com/package/@domoskanonos/nidoca-layout) [![Published on npm](https://img.shields.io/npm/v/@domoskanonos/nidoca-layout)](https://www.npmjs.com/package/@domoskanonos/nidoca-layout) [![Published on npm](https://img.shields.io/bundlephobia/min/@domoskanonos/nidoca-layout)](https://www.npmjs.com/package/@domoskanonos/nidoca-layout) [![Published on npm](https://img.shields.io/bundlephobia/minzip/@domoskanonos/nidoca-layout)](https://www.npmjs.com/package/@domoskanonos/nidoca-layout) [![Published on npm](https://img.shields.io/npm/dw/@domoskanonos/nidoca-layout)](https://www.npmjs.com/package/@domoskanonos/nidoca-layout)</nobr>|
|github|<nobr>[![Published on git](https://img.shields.io/github/languages/code-size/domoskanonos/nidoca-layout)](https://github.com/domoskanonos/nidoca-layout)</nobr>|
|donation|<nobr>[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SWGKEVSK2PDEE)</nobr>|


### Verwendung

#### Nehmen wir an du hast ein HTML Formular mit mehreren Input Feldern und möchtest dieses konfortabel auslesen:

    <form id="myForm">
        <input type="test" name="myText" value="myTextValue" />
        <select name="mySelect">
            <option value="myOptionValue" selected>myOptionValue</option>
        </select>
        <textarea name="myTextarea">myTextareaValue</textarea>
        <button name="myButton" value="myButtonValue"></button>
    </form>

#### Dafür benötigst du folgendes Typescript

    //corresponding form model class
    class Test {
        myText: string | undefined;
        myTextarea: string | undefined;
        myButton: string | undefined;
        mySelect: string | undefined;
    }

    // get values from form element
    const formElement = document.getElementById("myForm");
    const nidocaHelperForm: NidocaHelperForm<Test> = new NidocaHelperForm();
    const model: Test = nidocaHelperForm.getCurrent(formElement);

#### Die Werte in deinem Testobjekt sind anschließend:

{
    myText: "myTextValue";
    myTextarea: "myTextareaValue;
    myButton: "myButtonValue";
    mySelect: "mySelectValue";
}
