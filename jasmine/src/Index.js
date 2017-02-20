function Input(){
}

Input.prototype.isValidMobNum = function(mobnum){
	if(mobnum !==null)
		
	var len=mobnum.toString().length;
	if(len === 10){
		return 1;
	}
	
	else 
		{
		return 0;
		}
};
Input.prototype.isValidEmailid = function(email){
	if(email == "" || email== null){
		return 0;
	}
	else 
		{
		return 1;
		}
};
Input.prototype.isValidName= function(name){
	if(name == "" || name== null){
		return 0;
	}
	else 
		{
		return 1;
		}
};

Input.prototype.isValidForm= function(name,emailid,mobnum){
	if(name == "" || emailid == "" || mobnum =="" || name == null || emailid == null || mobnum ==null ){
		return 0;
	}
	else 
		{
		return 1;
		}
};


