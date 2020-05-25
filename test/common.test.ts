import * as _ from "lodash"

describe("JS package integration", () =>
{
    test("Capitalized 'VINICIUS' should be 'Vinicius'", () => {
        expect(_.capitalize("VINICIUS")).toBe("Vinicius")
    });
});