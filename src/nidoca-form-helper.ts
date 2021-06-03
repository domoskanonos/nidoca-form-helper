export class NidocaHelperForm<T> {
  getCurrentValues(element: HTMLElement): T {
    const retval: any = {};
    const elements = this.getElements(element.shadowRoot?.children);
    elements.forEach((currentElement: any) => {
      const name = currentElement.getAttribute("name");
      if (currentElement.value !== undefined) {
        const value = currentElement.value;
        const type = currentElement.getAttribute("type");
        switch (type) {
          case "number":
            retval[name] = Number(value);
            break;
          case "date":
            retval[name] = new Date(value);
            break;
          default:
            retval[name] = value;
            break;
        }
      } else if (currentElement.checked) {
        retval[name] = currentElement.checked;
      }
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
