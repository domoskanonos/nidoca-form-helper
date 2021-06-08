import "@open-wc/testing";
import { NidocaHelperForm } from "../nidoca-form-helper";

const assert = chai.assert;

class Test {
  myText: string | undefined;
  myNumber: number | undefined;
  checked: boolean | undefined;
  birthday: Date | undefined;
}

suite("NidocaHelperForm", () => {
  test("check", () => {
    const nidocaHelperForm: NidocaHelperForm<Test> = new NidocaHelperForm();

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

    const inputTypeCheckbox = document.createElement("input");
    inputTypeCheckbox.type = "checkbox";
    inputTypeCheckbox.name = "checked";
    inputTypeCheckbox.checked = true;
    div.appendChild(inputTypeCheckbox);

    const inputTypeDate = document.createElement("input");
    inputTypeDate.type = "date";
    inputTypeDate.name = "birthday";
    inputTypeDate.value = "1920-12-01";
    div.appendChild(inputTypeDate);

    const model: Test = nidocaHelperForm.getCurrent(div);
    console.log("current model, %s", JSON.stringify(model));
    assert.equal(model.myText, "myTextValue");
    assert.equal(model.myNumber, 99);
    assert.equal(model.checked, true);
    assert.equal(
      model.birthday?.toISOString(),
      new Date("1920-12-01").toISOString()
    );
  });
});
