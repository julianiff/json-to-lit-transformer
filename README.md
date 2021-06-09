# json-to-lit-transformer

A simple Transformer that converts specified JSON to Lit Webcomponents

## Structure of the input JSON

The Input JSON needs to follow a specific structure to be parsed correctly.

### Sample Input:

```
{
    component: "name-of-the-webcomponent", // Any Web-component name
    props: [{key: value}], // any Key Values for the Props
    innerText: "", // If there is direct inner text in component
    slots: [ // What comes into the slots of the component
        {
            slotName: "header", // the named slot, leave blank if there is no slot
            component: "name-of-the-child", // Any Web-component name
            props: [{key: value}], // any Key Values for the Props
            innerText: "", // If there is direct inner text in component
            slots: [], // The slots for the Web-component
        },
    ],
}
```

### Sample Output:

```

Array [
        <name-of-the-webcomponentkey="value">
            <name-of-the-childkey="value"slot="header">
                Author
            </name-of-the-child>
        </name-of-the-webcomponent>,
    ]

```

## Usage

```
    yarn add json-to-lit-transformer
```

```
const testJSON = [
    {
        component: "iff-page-layout",
        props: [{ theme: "light" }],
        innerText: "",
        slots: [
            {
                slotName: "header",
                component: "iff-title",
                props: [{ level: "1" }],
                innerText: "Author",
                slots: [],
            },
        ],
    },
];

const HTMLOutputArray = transformJsonToLit(testJSON);

const litHTML = () => {
    return html`
        ${HTMLOutputArray}
    `
}
```
