export class NidocaHelperForm<T> {
  getCurrent(element: HTMLElement): T {
    const retval: any = {};

    [element.children, element.shadowRoot?.children].forEach((element) => {
      const elements = this.getElements(element);
      elements.forEach((currentElement: any) => {
        const name = currentElement.getAttribute("name");
        const value = currentElement.value;
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
            } else if (isNaN(value)) {
              retval[name] = value;
            } else {
              retval[name] = Number(value);
            }
            break;
        }
      });
    });

    return <T>retval;
  }

  private getElements(elements: HTMLCollection | undefined): Element[] {
    let retval: Element[] = [];
    if (elements === undefined) {
      return retval;
    }
    for (let i = 0; i < elements.length; i++) {
      const element: any = elements.item(i);
      if (element) {
        const name = element.getAttribute("name");
        if (name) {
          retval.push(element);
        }
        if (element.children.length > 0) {
          const childElements = this.getElements(element.children);
          retval = retval.concat(childElements);
        }
      }
    }
    return retval;
  }
}
