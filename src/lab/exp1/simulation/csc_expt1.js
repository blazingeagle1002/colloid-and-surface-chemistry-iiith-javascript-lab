// This file contains all general functions used in the experiment
// Variables necessary to obtain motion of all the images
var type_of_movement;// Indicates Upward/ Downward/ Sideward motion
var initial_top;//Indicates the initial top value of the position of the object
var initial_left;//Indicates the initial left value of the position of the object
var step_top;//Indicates the amount of increment per frame towards top/bottom
var step_left;//Indicates the amount of increment per frame towards left/right
var elem;
var step_no=0; /*This variable is used to perform all the actions in the required sequence. 
                     Depending on the value of this variable the part of the method is called.*/
var x=1;
/*This method is called when the page is loaded.*/

window.onload = function(){ 
    initial_function();
    addclickEvents();
}

function initial_function(){
	$("#beak_arrow").rotate({angle:345});
	$("#g_arrow").rotate({angle:30});
	$("#con_arrow").rotate({angle:17});
	addPointer(beaker);
}

function changeText(){
	if(step_no==1)
	{
        $("#change").html("Click on the FeCl<sub>3</sub> Powder to add it to the beaker containing water.");
	}
}

// move: Calls this method to move an element in a straight line.
function move(id,left,top,time){
        $(id).velocity({translateX: left+"%",translateY: top+"%"},{duration: time});
}

// This function is a general method used to move images from initial position to final position.
function moveImage(){
    id = setInterval(frame, 5);
    function frame() {
    	//Move the object towards bottom
        if(type_of_movement == 0){
            if (initial_top > final_top) {
                clearInterval(id);
            } else {
                initial_top+=step_top; 
                initial_left+=step_left;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
            }
        }
        //Move the object towards top
        else if(type_of_movement == 1){
            if (initial_top < final_top) {
                clearInterval(id);
            } else {
                initial_top+=step_top; 
                initial_left+=step_left;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
                
            }
        }
        //Move the object towards left
        else if(type_of_movement == 3){
        	if(initial_left < final_left){
        		clearInterval(id);
        	} else {
        		initial_left+=step_left;
        		elem.style.left = initial_left + 'px';
        	}
        }
        //Move the object towards right
        else if(type_of_movement == 4){
        	if(initial_left > final_left){
        		clearInterval(id);
        	} else {
        		initial_left+=step_left;
        		elem.style.left = initial_left + 'px';
        	}
        }
    } 
}

function addPointer(Id){
	$(Id).css("cursor","pointer");
}


function removePointer(Id){
	$(Id).css("cursor","auto");
}

//This function adds click events to all clickable objects
function addclickEvents(){
    document.getElementById("beaker").addEventListener("click", function() {
            beakr();
    }, false);
    document.getElementById("fecl3_powder").addEventListener("click",function(){
    	Powder();
    },false);
    document.getElementById("rod").addEventListener("click",function(){
    	callRod();
    },false)
    document.getElementById("water_flask").addEventListener("click",function(){
    	callConFlsk();
    },false)
    document.getElementById("magnet").addEventListener("click",function(){
    	callMagnet();
    },false)
    document.getElementById("button1").addEventListener("click",function(){
    	callButton1();
    },false)
    document.getElementById("button2").addEventListener("click",function(){
    	callButton2();
    },false)
    document.getElementById("pipette").addEventListener("click",function(){
    	callPipette();
    },false)
    document.getElementById("red_flask").addEventListener("click",function(){
    	callCircle();
    },false)
}

/*This is the function called when beaker is clicked. 
It moves the beaker from air to the table. */
function beakr(){
	if(step_no==0)
    {
        $("#beak_arrow").hide();
        $("#beak").hide();
        //Move the beaker from the air onto the table
        move("#beaker",170,157,1000);	
        setTimeout(callFlask,1500);
        setTimeout(callBeaker,2300)
        step_no++;
        setTimeout(changeText,6500);
        setTimeout(showFecl3,6400);
        removePointer(beaker);
        addPointer(fecl3_powder);
    }
}


/*This is the function which pours water from the flask into the beaker */
function callFlask(){
	elem=document.getElementById("flask");
	$("#flask").show();
	$("#flsk").show();
    x=1;
    id1 = setInterval(flaskEmpty,60);
}

//This function is responsible for the motion of the flask
function flaskEmpty(){
	var flask=[];
	var i;
	var img=$("#flask")[0];
	for(i=1;i<=70;i++)
	{
		flask[i]="img_exp1/sprites/flask_pouring_water/" + i +".png"
	}
	if(x < flask.length)
	{
		img.src=flask[x];
	}
	x++;
	if(x == 65)
	{
		clearInterval(id1);
		$("#flask").hide();
		$("#flsk").hide();
	}
}

//This function gives the effect of filling beaker.
function callBeaker(){
	$("#beak_water").show();
	x=24;
	id2=setInterval(fillBeaker,70);
}

//This function is responsible for the filling of water inside the beaker
function fillBeaker(){
	var beaker=[],i;
	i=23;
	img=$("#beak_water")[0];
	for(i=24;i<=50;i++)
		beaker[i]="img_exp1/sprites/water_filling_beaker/" + i + ".png";
	if(x < beaker.length)
	{
		img.src=beaker[x];
	}
	x++;
	if(x == 50)
	{
		clearInterval(id2);
		setTimeout(wtag,1500);
	}
}

//This function is shows and animates the water tag on the beaker
function wtag(){
	elem=document.getElementById('water_tag');
	$("#water_tag").show();
    $("#water_tag").css("opacity",1);
    //Move the water tag from bottom of the beaker towards the top
    move("#water_tag",0,-90,500);
    setTimeout(function(){
	$("#water_tag").hide();
    },1100);
}

//This function shows the arrow which points to FeCl3 powder, the FeCl3 powder and the div which contains the chemical name
function showFecl3(){
	$("#fecl3_powder").show();
	$("#powder_arrow").show();
	$("#fecl3_text").show();
}

//This function calls the function which is resposible to the spoon motion 
function Powder(){
	$("#beak_spoon").show();
	$("#beaker").hide();
	$("#spoon").hide();
	$("#powder_spoon").hide();
	$("#beak_water").hide();
	$("#beak_spoon").show();
	$("#rd").show();
	$("#powder_arrow").hide();
	$("#fecl3_text").hide();
	removePointer(fecl3_powder);
	addPointer(rod);
	setTimeout(function(){
		x=1;
		id5=setInterval(callSpoon,100);
	},2000);	
}

//This function drops the FeCl3 powder from spoon into the beaker
function callSpoon(){
	i=1;
	img=document.getElementById('beak_spoon');
	var bspoon=[]
	for(i=1;i<=21;i++)
		bspoon[i]="img_exp1/photos/" + i + ".png";
	if(x<bspoon.length)
	{
		img.src=bspoon[x];
	}
	x++;
	if(x==21)
	{
		clearInterval(id5);
		$("#fecl3_powder").hide();
		
		$("#rd").hide();
		setTimeout(function(){
			$("#rod").show();
			$("#g_txt").show();
			$("#g_arrow").show();
			$("#change").html("Click on the Glass Rod to stir the FeCl<sub>3</sub> Soultion....")
		},1000);
	}
	
}

//This function calls the function which is responsible for the stirring motion of the rod
function callRod(){
	if(step_no==1)
	{
		$("#rod").hide();
		$("#beak_spoon").hide();
		$("#grod").show();
		$("#g_txt").hide();
		$("#g_arrow").hide();
		x=2;
		id6=setInterval(stirRod,100);
		setTimeout(moveFullBeak,5000);
		step_no++;
		removePointer(rod);
		addPointer(water_flask);
	}
}


//This function is responsible for the stirring motion of the rod
function stirRod(){
	i=1;
	img=document.getElementById("grod");
	var stir=[]
	for(i=2;i<=43;i++)
	{
		stir[i]="img_exp1/glass_rod/" + i + ".png";
	}
	if(x<stir.length)
	{
		img.src=stir[x];
	}
	x++;
	if(x == 44)
	{
		clearInterval(id6);
		$("#grod").hide();
		$("#beak_spoon").show();
	}
}

//This funciton moves the beaker to the corner of the table and shows the flask containing water
function moveFullBeak(){
    //Move the beaker towards the edge of the table
    move("#beak_spoon",-95,0,1000);
    setTimeout(function(){
    $("#div_fecl3").show();
	$("#con_arrow").show();
	$("#water_flask").show();
	$("#con_flask").show();
	$("#change").html("Click on the Conical Flask containing Water, to Place it on the Magnetic Stirrer/Heater");
    },2000);
}

/*This function is called when clicked on the flask containing water.
    It moves the flask from air to the top of heater/stirrer. */
function callConFlsk(){
	if(step_no==2){
    //Move the flask from the air onto the machine
    move("#water_flask",0,160,1000);
    setTimeout(function(){
    $("#magnet").show();
	$("#mag_arrow").show();
	$("#mag_txt").show();
	$("#change").html("Click on the Magnetic Bead to drop it into the Flask....")
    },1100);
    step_no++;
	$("#con_arrow").hide();
	$("#con_flask").hide();
	removePointer(water_flask);
	addPointer(magnet);
	}
}

//This function is called when the magnet is clicked.
//It moves the magnet from air into the bottom of the flask.
function callMagnet(){
	if(step_no==3){
	    //Move the magnet from the air into the flask
	    move("#magnet",0,1990,1000);
	    step_no++;
		$("#mag_arrow").hide();
		$("#mag_txt").hide();
		setTimeout(function(){
			$("#change").html("Switch on the Heater of the Magnetic Stirrer & Heater ...");
			$("#heat_arrow").show();
			$("#heat_txt").show();
		},1100);
		removePointer(magnet);
		addPointer(button2);
	}

}

//This function is called when the heater button is clicked.
//It shows the heater indicator on the heater/stirrer machine and also shows the stirrer arrow, the div containing stirrer text.
//When clicked again, after some steps, it moves the beaker from edge of the table edge of the table into the middle.
function callButton2(){
	if(step_no==4){
	$("#red_button").show();
	$("#heat_txt").hide();
	$("#heat_arrow").hide();
	$("#stir_arrow").show();
	$("#stir_txt").show();
	$("#change").html("Switch on the Stirrer of the Magnetic Stirrer & Heater ...");
	step_no++;
	removePointer(button2);
	addPointer(button1);
	}
	//Moves the beaker from the edge of table towards the center.
	else if(step_no ==6){
		clearInterval(id4);
		removePointer(button2);
		addPointer(pipette);
		$("#heat_arrow").hide();
		$("#heat_txt").hide();
		$("#heat_bubb").hide();
		$("#change").html("Click on the pipette to take 10ml conc. FeCl<sub>3</sub> from the beaker.....");
		$("#red_button").hide();
		$("#pipette").show();
		$("#beak_spoon").attr('src',"img_exp1/shapes/beak.png");
		$("#div_fecl3").hide();
		$("#beak_spoon").css("left","33%");
		$("#beak_spoon").css("top","267%");
		$("#beak_spoon").css("height","60%");
		$("#pip_arrow").show();
		$("#pip_txt").show();
 	   	//Move the beaker
   		move("#beak_spoon",48,0,1000);
   		step_no++;
   		setTimeout(function(){
   			$("#div_fecl3").css("left","36.5%");
   			$("#div_fecl3").show();
   			$("#beaker").css("width","8.2%");
   			$("#beaker").css("left","29.2%");
   			$("#beaker").css("top","110%");
   			$("#beaker").show();
   			$("#red_sol").show();
   			$("#beak_spoon").hide();
   			$("#beak_water").css("width","3.4%");
   			$("#beak_water").css("left","45.7%");
   			$("#beak_water").show();
   		},1700)
	}
}

//This function is called when stirrer button is clicked.
//It gives the stirring animation to the magnet and also the animation of boiling water.
function callButton1(){
	if(step_no==5){
		x=1;
		setTimeout(function(){
			$("#heat_bubb").show();
			id4=setInterval(boil_water,150)
		},2500);
		$("#stir_arrow").hide();
		$("#stir_txt").hide();
		step_no++;
		$("#magnet").hide();
		$("#change").html("Wait till the water starts boiling.....");
		$("#mag").show();
		removePointer(button1);
		addPointer(button2);
	}
}

//This function is gives the animation of boiling water.
function boil_water(){
	x++;
	if(x==10){
		$("#heat_arrow").show();
		$("#change").html("Now that the water gas started boiling, Switch off the Heater.....");
		$("#heat_txt").show();
	}
}

//This function is called when the pipette is clicked.
//On the first click. it moves the pipette from air into the beaker and also decreases level of solution in the beaker.
//It also moves the pipette back to its place.
//When clicked again, it moves the pipette towards the flask containing the stirring magnet.
//When clicked again it drops a drop of FeCl3 solution into the flask to make the colloid
function callPipette(){
	if(step_no==7){
		step_no++;
 	   	//Move the pipette into the beaker containing the FeCl3 solution
   		move("#pipette",-96,210,1000);
   		setTimeout(function(){
   			$("#pip_txt").hide();
   			$("#pip_arrow").hide();
   		},50)
   		//Decrease the volume of the FeCl3 solution in the beaker.
   		setTimeout(function(){
	 	   	//Move the FeCl3 solution downwards to give an effect of decrease in volume in the beaker
   			move("#red_sol",0,43,400);
   		},1200)
   		//Move the pipette back to its position
   		setTimeout(function(){
 	   		//Move the pipette into the air
   			move("#pipette",-30,-1,1000);
   		},1700)
   		setTimeout(function(){
   			$("#pip_txt").css("left","30%");
   			$("#pip_txt").css("top","200%");
   			$("#pip_txt").show();
   			$("#pip_arrow").css("left","35%");
   			$("#pip_arrow").show();
   			$("#change").html("Click on the pipette again to add the FeCl<sub>3</sub> taken from the beaker, to the hot water in conical flask, drop by drop.....")
   		},3000)
   	}
   	//Move the pipette towards the flask containing the magnet 
	else if(step_no==8)
   	{
   		step_no++;
   		$("#pip_txt").hide();
   		$("#pip_arrow").hide();
   	 	//Move the pipette towards the flask containing the magnet 
   		move("#pipette",322,10,1000);
   		setTimeout(function(){
   			$("#red_drop").show();
   			$("#pip2_arrow").show();
   			$("#pip_txt").css("left","24%");
   			$("#pip_txt").css("top","225%");
   			$("#pip_txt").show();
   		},1000)
	}
	//Move a drop of FeCl3 solution from the tip of the pipette into the flask 
	else if(step_no==9){
		step_no++;
	   	//Detect the location of the drop of FeCl3 solution 
		// initial_top = Math.round($("#red_drop").position().top);
  //   	initial_left = Math.round($("#red_drop").position().left);	
	 //    step_top=0.6;
 	//    	step_left=0;
  //  		final_top=320;
  //  		final_left=100;
  // 		type_of_movement=0;
 	//    	elem=document.getElementById("red_drop");
 	   	//Move the drop into the flask
   		move("#red_drop",0,400,300);
   		setTimeout(function(){
   			$("#red_flask").show();
   			$("#mag").css("opacity","0.07")
   			$("#pip_txt").hide();
   			$("#pip2_arrow").hide();
   			$("#feoh3_txt").show();
   			$("#change").html("The colloid is thus obtained.....")
   		},400)
   		removePointer(pipette);
   		addPointer(red_flask);
	}
}

//This function is called when the red colloid in the flask is clicked
//It shows the colloid particle motion in the flask
function callCircle(){
	if(step_no==10){
		//Shows the small circle
		$("#circle").show();
		removePointer(red_flask);
		//Shows the medium circle after 50ms
		setTimeout(function(){
			$("#circle").attr("src","img_exp1/shapes/circle2.png");
			$("#circle").css("left","43.5%");
			$("#circle").css("top","145%");
		},50);
		//Shows the bug crcle after 50ms
		setTimeout(function(){
			$("#circle").attr("src","img_exp1/shapes/272.png");
			$("#circle").css("left","37.5%");
			$("#circle").css("top","124%");
			$("#coll").show();
		},50);

	}
}
