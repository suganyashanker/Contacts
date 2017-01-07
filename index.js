$(document).ready(function() {
         $("#save").click(function() {
var name = $("#name").val();
var email = $("#email").val();
if (name == '' || email == '') {
alert("Please Fill the Fields correctly");
}

});
});