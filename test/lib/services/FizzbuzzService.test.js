const FizzbuzzService = require("./../../../lib/services/FizzbuzzService");

describe("Test for Fizzbuzz", () => {

    test("1- trick 1", () => {
        const explorer1 = {name: "Explorer1", score: 2};
        FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorer1.trick).toBe(2);

    });
    
    test("2- trick 3", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorer3.trick).toBe("FIZZ");
    });

    test("3- trick 5", () => {
        const explorer3 = {name: "Explorer3", score: 5};
        FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorer3.trick).toBe("BUZZ");
    });

    test("4- trick 15 , 3 ", () => {
        const explorer3 = {name: "Explorer3", score: 15};
        FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorer3.trick).toBe("FIZZBUZZ");
    });

});