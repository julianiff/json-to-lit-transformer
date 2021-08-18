import { transformJsonToLit } from "../src/transformJsonToLit";

const DeepNestedTestJson = [
    {
        component: "iff-page-layout",
        props: { theme: "dark" },
        slots: [
            {
                slotName: "header",
                component: "iff-title",
                props: { level: "1" },
                innerText: "Test",
                slots: [],
            },
            {
                slotName: "body",
                component: "iff-split",
                props: {},
                slots: [
                    {
                        slotName: "start-text",
                        component: "iff-link",
                        props: { event: "Code" },
                        slots: [
                            {
                                slotName: "",
                                component: "iff-title-modal",
                                props: {},
                                innerText: "Code",
                                slots: [
                                    {
                                        slotName: "title",
                                        component: "iff-title",
                                        props: { level: 1 },
                                        innerText: "Code",
                                        slots: [],
                                    },
                                    {
                                        slotName: "modal-text",
                                        component: "iff-title",
                                        props: { level: 3 },
                                        innerText: "Tset",
                                        slots: [],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        slotName: "end-text",
                        component: "iff-link",
                        props: { href: "dev/projects" },
                        slots: [
                            {
                                slotName: "",
                                component: "iff-title-modal",
                                props: { modalTextOrientation: "rotate(-90deg)" },
                                slots: [
                                    {
                                        slotName: "title",
                                        component: "iff-title",
                                        props: { level: 1, test: "addedAttribute" },
                                        innerText: "Test",
                                        slots: [],
                                    },
                                    {
                                        slotName: "modal-text",
                                        component: "iff-title",
                                        props: { level: 3 },
                                        innerText: "test",
                                        slots: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

describe("Deep Slotted test", () => {
    test("Should render correct transformed markup", async () => {
        const actual = transformJsonToLit(DeepNestedTestJson);

        expect(actual).toMatchInlineSnapshot(`
            Array [
              <iff-page-layout
                theme="dark"
              >
                <iff-title
                  level="1"
                  slot="header"
                >
                  Test
                </iff-title>
                <iff-split
                  slot="body"
                >
                  <iff-link
                    event="Code"
                    slot="start-text"
                  >
                    <iff-title-modal
                      slot=""
                    >
                      Code
                      <iff-title
                        level="1"
                        slot="title"
                      >
                        Code
                      </iff-title>
                      <iff-title
                        level="3"
                        slot="modal-text"
                      >
                        Tset
                      </iff-title>
                    </iff-title-modal>
                  </iff-link>
                  <iff-link
                    href="dev/projects"
                    slot="end-text"
                  >
                    <iff-title-modal
                      modaltextorientation="rotate(-90deg)"
                      slot=""
                    >
                      <iff-title
                        level="1"
                        slot="title"
                        test="addedAttribute"
                      >
                        Test
                      </iff-title>
                      <iff-title
                        level="3"
                        slot="modal-text"
                      >
                        test
                      </iff-title>
                    </iff-title-modal>
                  </iff-link>
                </iff-split>
              </iff-page-layout>,
            ]
        `);
    });
});
