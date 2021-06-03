import { css, html, LitElement, TemplateResult } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement("nidoca-mwc-contract-edit")
export class NidocaWCForm extends LitElement {
  static styles = css``;

  private properties: any = {};

  @property({ type: Array })
  tagNames: string[] = ["input"];

  @query("#slotElement")
  private slotElement: HTMLSlotElement | undefined;

  render(): TemplateResult {
    return html`
      <form @change="${(event: Event) => this.onChangeEvent(event)}">
        <slot id="slotElement"></slot>
      </form>
    `;
  }

  private getElements(slotElement: HTMLSlotElement | undefined): Element[] {
    if (slotElement == null) {
      return [];
    }
    const inputElements: Element[] = [];
    const elements: Element[] = slotElement.assignedElements({ flatten: true });
    for (let index = 0; index < elements.length; index++) {
      const element: Element = elements[index];
      this.elementSearch(element, inputElements);
    }
    return inputElements;
  }

  private elementSearch(element: Element, inputElements: Element[]) {
    if (this.containsTagName(element.tagName)) {
      inputElements.push(element);
    } else if (element.hasChildNodes()) {
      const childrens: HTMLCollection = element.children;
      for (const childElement of [].slice.call(childrens)) {
        this.elementSearch(childElement, inputElements);
      }
    }
  }

  containsTagName(tagName: string): boolean {
    for (let i = 0; i < this.tagNames.length; i++) {
      const compareTagName: string = this.tagNames[i];
      if (tagName.toUpperCase == compareTagName.toUpperCase) {
        return true;
      }
    }
    return false;
  }

  onChangeEvent(event: Event): void {
    const element: any = event.target;
    if (
      element.name != undefined &&
      element.name != null &&
      element.name != ""
    ) {
      this.properties[element.name] = element.value;
    }
  }
}
