/* Painting format and structure */


function art(src, artist, title, dimension) {
this.src = src;
this.artist = artist;
this.title = title;
this.dimension = dimension;
}

var mle = "Martha Leugers-Encherman";
var MLE = [];
MLE.push(new art("images/MLE_3_birches.jpg", mle,"Birches","10x15in"));
MLE.push(new art("images/MLE_blue_water_gold_sand.jpg",mle,"BLUE","10x15in"));
MLE.push(new art("images/MLE_historic_fishtown.jpg",mle,"historic","10x15in"));

var rd = "Ryan Dineen";
var RD = [];
RD.push(new art("images/GoHomeBayRD.jpg", rd, "Go Home Bay", "18X18in"));
RD.push(new art("images/BehindTheIslandRD.jpg", rd, "Behind the Island", "18x18in"));
RD.push(new art("images/WreckIslandRD.jpeg", rd, "Wreck Island", "24x18in"));

var ar = "Alexis Rockman";
var AR = [];
AR.push(new art("images/WoodFrogAR.jpg", ar, "Wood Frog", "20x30in"));
AR.push(new art("images/UpperPeninsulaAR.jpg", ar, "Upper Peninsula", "5x5ft"));
AR.push(new art("images/IceFishingAR.jpg", ar, "Ice Fishing", "3x3ft"));



			var idsMLE = [];
			var idsRD = [];
			var idsAR = [];
			
			//window.onload = function() 
			//{		
				for(i=0; i<MLE.length; i++) {
					var img = document.createElement("img");
					img.src = MLE[i].src;
					
					var div = document.createElement("div");
					div.class = "artwork";
					div.appendChild(img);
					
					idsMLE.push("mle" + i);
					div.id = idsMLE[i];
					document.getElementById("gallery").appendChild(div);
					document.getElementById(idsMLE[i]).addEventListener("click", function (event) {
						alert(this.id);
						modalWindow(this.id.charAt(3)); //substring? subat? 
						//alert("I work!");
					})
				}

				for(i=0; i<RD.length; i++) {
					var img = document.createElement("img");
					img.src = RD[i].src;
					
					var div = document.createElement("div");
					div.class = "artwork";
					div.appendChild(img);
					
					idsRD.push("rd" + i);
					div.id = idsRD[i];
					document.getElementById("gallery").appendChild(div);
					document.getElementById(idsRD[i]).addEventListener("click", function (event) {
						alert(this.id);
						modalWindow(this.id.charAt(2)); //substring? subat? 
						//alert("I work!");
					})
				}


				for(i=0; i<AR.length; i++) {
					var img = document.createElement("img");
					img.src = AR[i].src;
					
					var div = document.createElement("div");
					div.class = "artwork";
					div.appendChild(img);
					
					idsAR.push("ar" + i);
					div.id = idsAR[i];
					document.getElementById("gallery").appendChild(div);
					document.getElementById(idsAR[i]).addEventListener("click", function (event) {
						alert(this.id);
						modalWindow(this.id.charAt(2)); //substring? subat? 
						//alert("I work!");
					})
				}
			//}

			function modalWindow(i) {
				var divBox = document.createElement("div");
				divBox.id = (MLE[i].artist + "modal");
				divBox.class = "modalBox";
				alert("First box made " + MLE[i].artist);
				return;
				
				var modalPic = document.createElement("img");
				modalPic.src = this.src;
				modalPic.class = "modalPic";

				var modalText = document.createElement("div");
				modalText.id = divBox.id + "Text";
				modalText.class = "modalText";

				var closeSpan = document.createElement("span");
				closeSpan.id = divBox.id + "Close";

				var email = document.createElement("input");
				email.type = email;
				email.required = 1;
				email.placeholder = "Email";

				var buyButton = document.createElement("button");
				buyButton.id = idsMLE[i] + "buy";
				buyButton.value = "Contact " + MLE[i].artist + " for Details";

				divBox.appendChild(modalPic);
				divBox.appendChild(modalText);
				modalText.appendChild(email);
				modalText.appendChild(buyButton);
				divBox.appendChild(closeSpan);

				document.getElementById(closeSpan.id).innerHTML = "&times;";
				document.getElementById(modalText.id).innerHTML = 
				"Title: " + MLE[i].title + "</br>Artist: " + MLE[i].artist + "</br>Dimensions: " + MLE[i].dimension + "</br>Image ID Number: " + idsMLE[i];

				buyButton.onclick = function() {
					(alert("Your contact details and interest in " + MLE[i].title + " have been sent to " + MLE[i].artist + " and they will get in touch with you shortly. Thank you for supporting the Great Lakes!"));
				}

				closeSpan.onclick = function() {
					divBox.style.display = "none";
				}

				window.onclick = function(event) {
					if (event.target == divBox) {
						divBox.style.display = "none";
					}
				}
			}

