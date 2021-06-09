type propsStructure = {
    [key in string]: string;
};

interface Component {
    component: string;
    props: propsStructure[];
    innerText?: string;
}

interface SlottedComponent {
    slotName: string;
}

interface Slots {
    slots: slottedElement[];
}

export type slottedElement = Component & SlottedComponent & Slots;
export type JsonStructure = Component & Slots;
