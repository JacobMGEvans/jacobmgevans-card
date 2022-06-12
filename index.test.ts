import { test, expect } from "vitest";
import { execSync } from "child_process";

test("jacobmgevans-card inline snapshot", () => {
  expect(execSync(`node ./bin/card.js`).toString()).toMatchInlineSnapshot(`
    "[32m[39m
    [32m   ╭─────────────────────────────────────────────────────────────────────────╮[39m
    [32m   │                                                                         │[39m
    [32m   │   [37m               Jacob Evans[39m[32m / [37mjacobmgevans[39m[32m                             │[39m
    [32m   │                                                                         │[39m
    [32m   │   [37m[1m       Work:[22m[39m[32m  [37mAssociate Software Engineer[39m[32m                             │[39m
    [32m   │   [37m[1mOpen Source:[22m[39m[32m  [37mKoajs/router & Create React App[39m[32m [94m⚛[39m[32m                       │[39m
    [32m   │                                                                         │[39m
    [32m   │   [37m[1m    Twitter:[22m[39m[32m  [90mhttps://twitter.com/[39m[32m[36mjacobmgevans[39m[32m                        │[39m
    [32m   │   [37m[1m     GitHub:[22m[39m[32m  [90mhttps://github.com/[39m[32m[32mjacobmgevans[39m[32m                         │[39m
    [32m   │   [37m[1m   LinkedIn:[22m[39m[32m  [90mhttps://linkedin.com/in/[39m[32m[94mjacobmgevans[39m[32m                    │[39m
    [32m   │   [37m[1m        Web:[22m[39m[32m  [36mhttps://dev.to/jacobmgevans[39m[32m                             │[39m
    [32m   │                                                                         │[39m
    [32m   │   [37m[1m       Card:[22m[39m[32m  [31mnpx[39m[32m [37m@jacobmgevans/card  (via GitHub Package Registry)[39m[32m   │[39m
    [32m   │                                                                         │[39m
    [32m   ╰─────────────────────────────────────────────────────────────────────────╯[39m
    [32m[39m
    "
  `);
});
