function Circles(){
}

Circles.prototype.myFunction = function(condition, callback){
		  if(condition){
			callback();
			
			  return 1;
			 
		  }
		  return 0;
		}

Circles.prototype.release = function(callback){
	callback();
	}

 

//Circles.prototype.saveUser=function(user, callback) {
//	  $.post('/users', {
//	    first: user.firstname,
//	    last: user.lastname
//	  }, callback);
//	}
//Circles.prototype.fetch = function(circles) {
//for(i in circles) {
//  circle.draw();
//  }
//};