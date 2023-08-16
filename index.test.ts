import { test, expect } from "vitest";
import { execSync } from "child_process";

test("jacobmgevans-card inline snapshot", () => {
  expect(execSync(`node ./dist/index.js`).toString()).toMatchInlineSnapshot(`
    "┌─────────────────────────────────────────────────────────────────────────┐
    │                                                                         │
    │   Jacob Evans / jacobmgevans                                            │
    │                                                                         │
    │   Work:  FullStack Software Engineer                                    │
    │   Open Source:  https://osrg.t3.gg/ &                                   │
    │   https://tutorial-quest.vercel.app/docs/en/tutorial-quest ⚛            │
    │                                                                         │
    │   Twitter:  https://twitter.com/JacobMGEvans                            │
    │   GitHub:  https://github.com/JacobMGEvans                              │
    │   LinkedIn:  https://linkedin.com/in/jacob-m-g-evans                    │
    │   Web:  https://dev.to/jacobmgevans                                     │
    │                                                                         │
    │   Card:  npx @jacobmgevans/card  (via GitHub Package Registry)          │
    │                                                                         │
    └─────────────────────────────────────────────────────────────────────────┘
    "
  `);
});
