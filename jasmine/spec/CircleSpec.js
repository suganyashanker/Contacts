describe('myFunction', function() {
					var circles; 
				beforeEach(function () {
						circles= new Circles;
					});
					
				  it('should able to call my function', function() {
				    var callback = sinon.spy();

				    circles.myFunction(true,callback);
				    circles.myFunction(true, callback);
				    circles.myFunction(false, callback);
				    sinon.assert.called(callback);
				    sinon.assert.callCount(callback, 2);
				    expect(circles.myFunction(true, callback)).toEqual(1);
				    expect(circles.myFunction(false, callback)).toEqual(0);
				    sinon.assert.callCount(callback, 3);
				  });
				  
				  it('should able to call release function with spy', function() {
					    var spy = sinon.spy();

					    circles.release(spy);
					    circles.release(spy);
					    circles.release(spy);
					    sinon.assert.called(spy);
					    sinon.assert.callCount(spy, 3);
					    spy.reset();
					    circles.release(spy);
					    sinon.assert.calledOnce(spy);
				  });
				  
				  
				  it("should able to call release function with stub", function () {
					    var stub = sinon.stub();
					    circles.release(stub);
					    sinon.assert.called(stub);
					   					    
					});
				  
				  
				  
				  it("should able to call stub with arguments ", function () {
					    var stub = sinon.stub();
					    stub.withArgs(true).returns(100);
					    stub.withArgs(false).returns(0);
					    expect(stub(true)).toEqual(100);
					    expect(stub(false)).toEqual(0);
					   					    
					});
				  
				
				  
				  it("test should assert json object",function () {
					    		var details = {
										name : "nan",
										job : "developer",
										company : "full",
										email : "nan@gamil.com",
										worknum : 23456787,
										mobnum : 9876543210,
										address : "asdfghjkl"
									
					    };
					    var spy = sinon.spy();

					    spy(details);
					    sinon.assert.calledWith(spy, sinon.match({ mobnum : 9876543210 }));
					    sinon.assert.calledWith(spy, sinon.match({ name : "nan" }));
					    sinon.assert.calledWith(spy, sinon.match({ address : "asdfghjkl" }));
					});
				  
				  function getTodos(listId, callback) {
					   $.ajax({
					        url: "/todo/" + listId + "/items",
					        success: function (data) {
					            // Node-style CPS: callback(err, data)
					           // callback(data);
					        }
					    });
					}
				 
				  describe('testing ajax call', function() {
				  afterEach(function () {
					    $.ajax.restore();
					});

					it("makes a GET request for todo items", function () {
					    sinon.stub($,"ajax");
					    var spy = sinon.spy();
					    getTodos(42, spy);
					    sinon.assert.calledWith(spy, sinon.match({ url: "/todo/42/items" }));
					   // assert(spy.calledWithMatch({ url: "/todo/42/items" }));
					});
				  
				  });
				 
				  
				  
				  	});
			