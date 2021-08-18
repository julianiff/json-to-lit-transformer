import { JsonStructure, propsStructure, slottedElement } from "./Interface";

export const transformJsonToLit = (json: JsonStructure[]): HTMLElement[] => {
    return json.map((item) => {
        const element = createAttributedTag(item.component, item.props);

        return createSlottedElements(element, item.slots);
    });
};

const createAttributedTag = (tagName: string, attributes: propsStructure): HTMLElement => {
    const tag = document.createElement(tagName);
    for (const key in attributes) {
        tag.setAttribute(key, attributes[key]);
    }
    return tag;
};

const createSlottedElements = (element: HTMLElement, slots: slottedElement[]) => {
    slots.forEach((item) => {
        const child = createAttributedTag(item.component, item.props);
        child.setAttribute("slot", item.slotName);
        child.innerHTML = !!item.innerText ? item.innerText : "";

        if (item.slots.length > 0) {
            createSlottedElements(child, item.slots);
        }
        element.appendChild(child);
    });

    return element;
};
