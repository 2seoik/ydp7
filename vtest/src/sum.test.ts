// src/sum.test.ts
// import { describe, expect, it } from "vitest";
import { sum } from "./sum";

describe("sum", () => {
  it("return 0 with no data", () => {
    expect(sum()).toBe(0);
  });
});
