describe("Input",function(){
	var input;
	beforeEach(function(){
		input = new Input();
	});
	
	it("should be valid mobnum",function(){
		expect(input.isValidMobNum(987654321)).toEqual(0);
		expect(input.isValidMobNum(98765432176456)).toEqual(0);
		expect(input.isValidMobNum("")).toEqual(0);
		expect(input.isValidMobNum(null)).toEqual(0);
		expect(input.isValidMobNum(9876543216)).toEqual(1);		
	});
	it("should be valid emailid",function(){
		expect(input.isValidEmailid("")).toEqual(0);
		expect(input.isValidEmailid(null)).toEqual(0);
		expect(input.isValidEmailid("sample@gmail.com")).toEqual(1);
	});
	it("should be valid name",function(){
		expect(input.isValidName("")).toEqual(0);
		expect(input.isValidName(null)).toEqual(0);
		expect(input.isValidName("sample")).toEqual(1);
	});
	it("should be valid form",function(){
		expect(input.isValidForm("","","")).toEqual(0);
		expect(input.isValidForm("fghdsjk","fdghsjka",456789)).toEqual(1);
		expect(input.isValidForm("sdfg","sdfg","")).toEqual(0);
		expect(input.isValidForm("sdfg","",23456)).toEqual(0);
		expect(input.isValidForm("","dfgh",2345)).toEqual(0);
		expect(input.isValidForm(null,null,null)).toEqual(0);
		expect(input.isValidForm(null,"dfgh",2345)).toEqual(0);
		expect(input.isValidForm("",null,2345)).toEqual(0);
	});
	
});