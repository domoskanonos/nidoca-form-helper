export class NidocaHelperForm<T> {
  getCurrent(element: HTMLElement | null | undefined): T | null | undefined {
    if (element == undefined) {
      return element;
    }
    const retval: any = {};
    const elements = this.getElements(element);
    elements.forEach((currentElement: any) => {
      const tagName = currentElement.tagName;
      const name = currentElement.getAttribute("name");
      const value = currentElement.value;
      if (tagName == "INPUT") {
        const type = currentElement.getAttribute("type");
        switch (type) {
          case "number":
            retval[name] = Number(value);
            break;
          case "date":
            retval[name] = new Date(value);
            break;
          case "datetime":
            retval[name] = new Date(value);
            break;
          case "checkbox":
            retval[name] = currentElement.checked;
            break;
          default:
            if (currentElement.checked) {
              retval[name] = currentElement.checked;
            } else if (value == "") {
              retval[name] = value;
            } else if (isNaN(value)) {
              retval[name] = value;
            } else {
              retval[name] = Number(value);
            }
            break;
        }
      } else if (tagName == "BUTTON" || tagName == "SELECT" || tagName == "TEXTAREA") {
        retval[name] = value;
      }
    });
    return <T>retval;
  }

  private getElements(element: Element | undefined | null): Element[] {
    let retval: Element[] = [];
    if (element) {
      const tagName = element.tagName;
      if (tagName == "INPUT" || tagName == "BUTTON" || tagName == "SELECT" || tagName == "TEXTAREA") {
        retval.push(element);
      }
      if (element.children.length > 0) {
        const elements = element?.children;
        for (let i = 0; i < elements.length; i++) {
          retval = retval.concat(this.getElements(elements.item(i)));
        }
      }
      if (element.shadowRoot && element.shadowRoot.children.length > 0) {
        const elements = element.shadowRoot.children;
        for (let i = 0; i < elements.length; i++) {
          retval = retval.concat(this.getElements(elements.item(i)));
        }
      }
    }
    return retval;
  }
}
