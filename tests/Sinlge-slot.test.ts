import { transformJsonToLit } from "../src/transformJsonToLit";
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

describe("article Component", () => {
    test("should return article Component markup", async () => {
        const actual = transformJsonToLit(testJSON);

        expect(actual).toMatchInlineSnapshot(`
            Array [
              <iff-page-layout
                theme="light"
              >
                <iff-title
                  level="1"
                  slot="header"
                >
                  Author
                </iff-title>
              </iff-page-layout>,
            ]
        `);
    });
});
