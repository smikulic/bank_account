describe("savePayee", function() {
	it("cleans number by removing spaces and dashes", function() {
	    expect(savePayee.cleanNumber("123 4-5")).toEqual("12345");
	});
});