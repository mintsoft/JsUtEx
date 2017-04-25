// Create a Test Suite
describe('Division by Zero', function(){
	var x = 99 /0;
	it("returns NaN", function(){
		expect(x).toBe(NaN);
	});
});
