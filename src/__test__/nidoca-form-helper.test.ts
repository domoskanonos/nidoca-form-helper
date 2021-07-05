import "@open-wc/testing";
import {NidocaHelperForm} from "../nidoca-form-helper";

const assert = chai.assert;

class Test {
  id: number | undefined;
  myText: string | undefined;
  myNumber: number | undefined;
  checked: boolean | undefined;
  unchecked: boolean | undefined;
  birthday: Date | undefined;
  meetingTime: Date | undefined;
  myTextarea: string | undefined;
  myButton: string | undefined;
  mySelect: string | undefined;
}

suite("NidocaHelperForm", () => {
  test("check", () => {
    const nidocaHelperForm: NidocaHelperForm<Test> = new NidocaHelperForm();

    assert.equal(nidocaHelperForm.getCurrent(null), null);
    assert.equal(nidocaHelperForm.getCurrent(undefined), undefined);

    const div = document.createElement("div");
    assert.instanceOf(div, HTMLDivElement);

    const inputTypeText = document.createElement("input");
    inputTypeText.type = "text";
    inputTypeText.name = "myText";
    inputTypeText.value = "myTextValue";
    div.appendChild(inputTypeText);

    const inputTypeNumber = document.createElement("input");
    inputTypeNumber.type = "number";
    inputTypeNumber.name = "myNumber";
    inputTypeNumber.value = "99";
    div.appendChild(inputTypeNumber);

    const inputTypeHidden = document.createElement("input");
    inputTypeHidden.type = "hidden";
    inputTypeHidden.name = "id";
    inputTypeHidden.value = "1";
    div.appendChild(inputTypeHidden);

    const inputTypeCheckbox = document.createElement("input");
    inputTypeCheckbox.type = "checkbox";
    inputTypeCheckbox.name = "checked";
    inputTypeCheckbox.checked = true;
    div.appendChild(inputTypeCheckbox);

    const inputTypeCheckboxUnchecked = document.createElement("input");

    inputTypeCheckboxUnchecked.type = "checkbox";
    inputTypeCheckboxUnchecked.name = "unchecked";
    div.appendChild(inputTypeCheckboxUnchecked);

    const inputTypeDate = document.createElement("input");
    inputTypeDate.type = "date";
    inputTypeDate.name = "birthday";
    inputTypeDate.value = "1920-12-01";
    div.appendChild(inputTypeDate);

    const inputTypeDateTime = document.createElement("input");
    inputTypeDateTime.type = "datetime-local";
    inputTypeDateTime.name = "meetingTime";
    inputTypeDateTime.value = "2018-06-12T19:30";
    div.appendChild(inputTypeDateTime);

    const textareaElement = document.createElement("textarea");
    textareaElement.name = "myTextarea";
    textareaElement.innerHTML = "myTextareaValue";
    div.appendChild(textareaElement);

    const buttonElement = document.createElement("button");
    buttonElement.name = "myButton";
    buttonElement.value = "myButtonValue";
    div.appendChild(buttonElement);

    const selectElement = document.createElement("select");
    const optionElement = document.createElement("option");
    selectElement.appendChild(optionElement);
    optionElement.value = "mySelectValue";
    selectElement.name = "mySelect";
    div.appendChild(selectElement);

    const model: Test | null | undefined = nidocaHelperForm.getCurrent(div);
    console.log("current model, %s", JSON.stringify(model));
    assert.equal(model?.myText, "myTextValue");
    assert.equal(model?.myNumber, 99);
    assert.equal(model?.id, 1);
    assert.equal(model?.checked, true);
    assert.equal(model?.unchecked, false);
    assert.equal(model?.birthday?.toISOString(), new Date("1920-12-01").toISOString());
    assert.equal(model?.myTextarea, "myTextareaValue");
    assert.equal(model?.myButton, "myButtonValue");
    assert.equal(model?.mySelect, "mySelectValue");

    const mergeModel: Test = new Test();
    mergeModel.checked = false;
    mergeModel.myNumber = 999;
  });
  
});
