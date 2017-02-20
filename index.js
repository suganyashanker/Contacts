$(document).ready(
		function() {
			$('#date_display').html(new Date().toDateString());
			// $("input").focus(function() {
			// $(this).css("background-color", "#cccccc");
			// });
			// $("input").blur(function() {
			// $(this).css("background-color", "#ffffff");
			// });
			//
			// $("#name").blur(function() {
			// var name = $(this).val();
			// if (name == "") {
			// alert("Fill Valid Information");
			// $(this).css("background-color", "#F7CCA6");
			// }
			//
			// });
			//
			// $("#email").blur(function() {
			// var email = $(this).val();
			// if (email == "") {
			// alert("Fill Valid Information");
			// $(this).css("background-color", "#F7CCA6");
			// }
			//
			// });
			// $("#mobnum").blur(function() {
			// var mobnum = $(this).val().length;
			// if (mobnum !== 10) {
			// alert("Fill Valid Information");
			// $(this).css("background-color", "#F7CCA6");
			// }
			//
			// });

			// var temp=$("#content").html();
			// var html=Mustache.to_html(temp,details);
			// var box=$("#box");
			// box.innerHTML=html;
		
			 
			
			$("#save").click(
					function(e) {
						e.preventDefault();
						var name = $("#name").val();
						var job = ($("#job").val() == undefined) ? "" : $(
								"#job").val();
						var company = ($("#company").val() == undefined) ? ""
								: $("#company").val();
						var email = $("#email").val();
						var worknum = ($("#worknum").val() == undefined) ? ""
								: $("#worknum").val();
						var mobnum = $("#mobnum").val();
						var address = ($("#address").val() == undefined) ? ""
								: $("#address").val();
						if (name == "" || mobnum == "" || email == "") {
							alert("fill all the data");
							return;
						}
						var details = {
							"name" : name,
							"job" : job,
							"company" : company,
							"email" : email,
							"worknum" : worknum,
							"mobnum" : mobnum,
							"address" : address
						}

						$.ajax({
							url : 'contact_management',
							type : 'POST',
							contentType : 'application/json',
							data : JSON.stringify(details),
							success : function() {
								alert("success");
								loadContact();
								refresh();
								
							},
							error : function() {
								alert("error in add contact");
							}
						});
					});
			
			var loadContact = function() {
				$.ajax({
					type : "GET",
					url : "loadcontact",
					contentType : 'application/json',
					dataType : 'json',
					mimeType : 'application/json',
					data : JSON.stringify({
						"Status" : "UpdatedMe"
					}),
					success : function(data) {
						alert("loadcontact");
						$('.contacts').empty();
						var temp = $("#content").html();
						$.each(data, function(key, contact) {
							var template = Mustache.to_html(temp, data);
							$(".contacts").append(template);
						});
					},
					error : function(e) {
						alert("error in load contact");
					}
				});
			}
			
			
			$('#delete').click(function() {
				var name =prompt("enter the name to delete");
				$.ajax({
			        url : 'delete?name='+name,
					type : 'DELETE',
					data : { },
					success : function() {
						alert("contact is deleted");
						loadContact();
					   },
					error : function() {
						alert("error in deleting contact");
					}
				});
			});
			
			
			
			

		$('#edit').click(function(){
				var name = prompt("enter the name to edit");
				$.ajax({
			        url : 'edit?name='+name,
					type : 'PUT',
					data : { },
					success : function(data) {
						alert("contact can be  edit");
						$('#name').val(data.name);
						$('#job').val(data.job);
						$('#company').val(data.company);
						$('#email').val(data.email);
						$('#worknum').val(data.worknum);
						$('#mobnum').val(data.mobnum);
						$('#address').val(data.address);				
					   },
					error : function() {
						alert("error in editing contact");
					}
				});
				
			});
		
		
		
		$('#view').click(function(){
			var name = prompt("enter the name to view details");
			$.ajax({
		        url : 'edit?name='+name,
				type : 'PUT',
				data : { },
				success : function(data) {
					alert("contact can be  viewed");
					$('#name').val(data.name);
					$('#job').val(data.job);
					$('#company').val(data.company);
					$('#email').val(data.email);
					$('#worknum').val(data.worknum);
					$('#mobnum').val(data.mobnum);
					$('#address').val(data.address);				
				   },
				error : function() {
					alert("error in editing contact");
				}
			});
			
		});
	
		$("#refresh").click(function(){
			refresh();
		});
		
		
	var refresh = function(){
			$("#name").val("");
			$("#job").val("");
			$("#company").val("");
			$("#email").val("");
			$("#worknum").val("");
			$("#mobnum").val("");
			$("#address").val("");
		}
	//onclick="viewFun()"
			
			loadContact();
		});
