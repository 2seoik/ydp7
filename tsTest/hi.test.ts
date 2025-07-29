import { good } from "./hi";

// 병렬
describe("hi-", () => {
  describe("good", () => {
    test("morning", () => {
      expect(good("morning")).toBe("Good morning");
    });
  });
});
