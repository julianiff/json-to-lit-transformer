# json-to-lit-transformer

A simple Transformer that converts specified JSON to Lit Webcomponents

## Structure of the input JSON

The Input JSON needs to follow a specific structure to be parsed correctly

```{
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

Output

```
Array [
              <name-of-the-webcomponent
                key="value"
              >
                <name-of-the-child
                key="value"
                slot="header"
                >
                    Author
                </name-of-the-child>
              </name-of-the-webcomponent>,
            ]
```
