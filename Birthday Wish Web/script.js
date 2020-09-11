function CreateBirthdayCard(){
			if(document.getElementById("area").style.display!="block"){
			var name=document.getElementById("InputName").value;
			document.getElementById("text").innerHTML =" "+name;

			document.getElementById("area").style.display="block";
			// document.getElementById("area").style.margin-top=" 0px";
			}
			else{
				document.getElementById("area").style.display="none"
			}
			
		}