// Create a Test Suite
describe('Division by Zero', function(){
	var x = 99 /0;
	it("returns Infinity", function(){
		expect(x).toBe(Infinity);
	});
	it("returns NaN", function() {
		expect(parseFloat("lolz").toBe(NaN);
	});
});
