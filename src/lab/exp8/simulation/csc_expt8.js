// This file contains all general functions used in the experiment
// Variables necessary to obtain motion of all the images
var elem;
var step_no=0; /*This variable is used to perform all the actions in the required sequence. 
                     Depending on the value of this variable the part of the method is called.*/
var x=1;
/*This method is called when the page is loaded.*/

window.onload = function(){ 
	addPointer("#flask");
    addclickEvents();
}

// move: Calls this method to move an element in a straight line.
function move(id,left,top,time){
        $(id).velocity({translateX: left+"%",translateY: top+"%"},{duration: time});
}

// addPointer: Adds a pointer to the object to be clicked
function addPointer(Id){
	$(Id).css("cursor","pointer");
}

// removePointer: To remove the pointer from the object when no longer needed
function removePointer(Id){
	$(Id).css("cursor","auto");
}

//This function adds click events to all clickable objects
function addclickEvents(){
    document.getElementById("flask").addEventListener("click", function() {
        callFlask();
    }, false);
    document.getElementById("magnet").addEventListener("click", function() {
    	callMagnet();
    }, false);
    document.getElementById("heater_button").addEventListener("click", function() {
    	callHeater();
    }, false);
    document.getElementById("stir_button").addEventListener("click", function() {
    	callStir();
    }, false);
    document.getElementById("pipette").addEventListener("click", function() {
    	callPipette();
    }, false);
}


// This function moves the flask from air to the heater and displays the magnet
function callFlask(){
	if(step_no == 0){
		step_no++;
		$("#flsk_arrow").hide();  // Arrow pointing to the flask
 		$("#flsk_txt").hide();	// Text regarding the flask
		move("#flask",211.5,80,1500); // Move the flask
		setTimeout(function(){
			$("#change").html("Click on the Magnetic Bead to drop it in the Flask..");
			$("#magnet").show();	// Display the magnet
			$("#magnet_txt").show();	// Display the text regarding the magnet
			$("#magnet_arrow").show();	// Display the arrow which points to the magnet
		},1500);
		removePointer(flask);	// Remove the pointer from the flask
		addPointer(magnet);		// Add pointer to the magnet 
	}
}

// This function drops the magnet into the flask 
function callMagnet(){
	if(step_no == 1){
		step_no++;
		$("#magnet_arrow").hide();	// Hide the arrow 
		$("#magnet_txt").hide();	// Hide the text
		move("#magnet",0,4800,800);	// Move the magnet into the flask
		setTimeout(function() {
			$("#change").html("Click on the Heater Switch to turn the Magnetic Heater On....");
			$("#heater_txt").show();	// Show the text regarding the heater
			$("#heater_arrow").show();	// Show the arrow which points to the heater button
		}, 800);
		removePointer(magnet);
		addPointer(heater_button);
	}
}

// This function hides heater related objects and displays stirrer related objects
function callHeater(){
	if(step_no == 2){
		step_no++;	
		$("#heater_arrow").hide();	// Hide arrow pointing to heater
		$("#heater_txt").hide();	// Hide text regarding heater
		$("#stir_txt").show();		// Show text regarding the stirrer
		$("#stir_arrow").show();	// Show arrow pointing to the stirrer button
		$("#change").html("Click on the Stirrer Switch to turn the Magnetic Stirrer On..");
		removePointer(heater_button);	// Remove pointer from heater button
		addPointer(stir_button);	// Add pointer to the stir button
	}
}

// This function provides the effect of rotating magnet and displays the pipette and the beaker
function callStir(){
	if(step_no == 3){
		step_no++;	
		$("#stir_arrow").hide();
		$("#stir_txt").hide();
		$("#change").html("Wait till the AgNO<sub>3</sub> Solution starts boiling");
		$("#magnet").attr("src","images/magnet.gif");
		setTimeout(function() {
			$("#bubbles").show();
			$("#change").html("Click on the pipette to move it into the beaker containing tri-sodium citrate solution...");
			$("#pipette").show();
			$("#pipette_txt").show();
			$("#pipette_arrow").show();
			$("#beaker").show();
			$("#beaker_water").show();
			$("#beaker_txt").show();
		}, 1500);
		removePointer(stir_button);
		addPointer(pipette);
	}
}

//This function moves the pipette from air into the beaker
// When it is clicked again. it moves back to its original position
// When it is clicked again, it moves towards the flask containing the magnet
// When clicked again, it creates the effect of drops of liquid falling into the flask
function callPipette(){
	// Move the pipette from air into the beaker
	if(step_no == 4){
		step_no++;
		$("#pipette_arrow").hide();
		$("#pipette_arrow").rotate({angle:160});
		$("#pipette_arrow").css("top","415%");
		$("#pipette_arrow").css("left","37%");
		$("#pipette_txt").css("top","300%");
		$("#pipette_txt").css("left","49%");
		$("#pipette_txt").hide();
		setTimeout(function() {
			$("#pipette_txt").show();
			$("#pipette_arrow").show();
			$("#change").html("Click on the pipette to draw 10ml of tri-sodium citrate solution from the beaker...");
		}, 1000);
		move("#pipette",-310,170,1000);
	}
	// Reduce the volume of the beaker and move the pipette back to its original position
	else if(step_no == 5){
		$("#beaker_water").velocity({ 
			height: "30%",
			translateY: "110%",},
			{ duration: 500});
		step_no++;
		$("#pipette_arrow").hide();
		$("#pipette_txt").hide();
		$("#pipette_arrow").rotate({angle:0});
		$("#pipette_arrow").css("top","380%");
		$("#pipette_arrow").css("left","33%");
		$("#pipette_txt").css("top","500%");
		$("#pipette_txt").css("left","30%");
		setTimeout(function() {
			move("#pipette",5,-10,1000);
			setTimeout(function() {
				$("#pipette_txt").show();
				$("#pipette_arrow").show();
				$("#change").html("Click on the pipette to move it over to the Flask containing boiling AgNO<sub>3</sub> solution..");	
			}, 1000);
		}, 1000);
	}
	// Move the pipette towards the flask containing the magnet
	else if( step_no == 6){
		step_no++;
		$("#pipette_arrow").hide();
		$("#pipette_arrow").css("top","300%");
		$("#pipette_arrow").css("left","47%");
		$("#pipette_txt").hide();
		$("#pipette_txt").css("top","430%");
		$("#pipette_txt").css("left","44%");
		move("#pipette",348,-55,1000);
		setTimeout(function() {
			$("#change").html("Click on the pipette to add tri-sodium citrate solution, drop by drop to boiling AgNO<sub>3</sub> solution in the flask...");	
			$("#drop").show();
			$("#pipette_arrow").show();
			$("#pipette_txt").show();
		}, 1000);
	}
	// Creates the effect of drops of liquid falling into the beaker
	else if( step_no == 7){
		$("#pipette_arrow").hide();
		$("#pipette_txt").hide();
		removePointer(pipette);
		step_no++;
		$("#drop").animate({ top: "506.7%"},500);
		setTimeout(function() {
			$("#drop").animate({ top: "385.4%"},1);
			$("#drop").animate({ top: "506.7%"},500);
			setTimeout(function() {
				$("#drop").animate({ top: "385.4%"},1);
				$("#drop").animate({ top: "506.7%"},500);
				setTimeout(function() {
					$("#drop").animate({ top: "385.4%"},1);
					$("#drop").animate({ top: "506.7%"},500);
					setTimeout(function() {
						$("#drop").animate({ top: "385.4%"},1);
						$("#drop").animate({ top: "506.7%"},500);
						setTimeout(function() {
							$("#drop").animate({ top: "385.4%"},1);
							$("#drop").animate({ top: "506.7%"},500);
							setTimeout(function() {
								$("#drop").hide();
								$("#txt").show();
								$("#change").html("Golden coloured Silver colloid formed....<br> Click on RESET to start the experiment again...")
								$("#change").css("margin-top","-8px");								
							}, 500);
						}, 500);
					}, 500);
				}, 500);
			}, 500);
		}, 500);
		$("#color").animate({opacity:0.8},3000);
	}
}
