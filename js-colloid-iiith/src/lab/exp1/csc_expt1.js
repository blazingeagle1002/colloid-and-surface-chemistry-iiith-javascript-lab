// This file contains all general functions used in the experiment
// Variables necessary to obtain motion of all the images
var type_of_movement;// Indicates upward or downward motion
var initial_top;
var initial_left;
var step_top;
var step_left;
var id;
var elem;
var step_no=0; /*This variable is used to perform all the actions in the required sequence. 
                     Depending on the value of this variable the part of the method is called.*/
var x=1,y=1,z=24;
/*This method is called when the page is loaded.*/

window.onload = function(){ 
    initial_function();
    addclickEvents();
}

function initial_function(){
	$("#B_arrow").rotate({angle:345});
	$("#g_arrow").rotate({angle:30});
	$("#con_arrow").rotate({angle:17});
}

function changeText(){
	if(step_no==1)
	{
        $("#change").html("Click on the FeCl<sub>3</sub> Powder to add it to the beaker containing water.");
	}
}

function moveImage(){
    id = setInterval(frame, 5);
    function frame() {
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
        else if(type_of_movement == 3){
        	if(initial_left < final_left){
        		clearInterval(id);
        	} else {
        		initial_left+=step_left;
        		elem.style.left = initial_left + 'px';
        	}
        }
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
}

function beakr(){
	if(step_no==0)
    {
        elem = document.getElementById("beaker");
        initial_top = Math.round($('#beaker').position().top);
        initial_left = Math.round($('#beaker').position().left);
        step_top=1;
        step_left=1;
        final_top=387;
        type_of_movement=0;
        $("#B_arrow").hide();
        $("#beak").hide();
        moveImage();
        setTimeout(callFlask,1500);
        setTimeout(callBeaker,2300)
        step_no++;
        setTimeout(changeText,6500);
        setTimeout(showFecl3,6400);
    }
}

function callFlask(){
		elem=document.getElementById("flask");
		$("#flask").show();
		initial_top = Math.round($("#flask").position().top);
        initial_left = Math.round($("#flask").position().left);
        step_top=-0.5;
        step_left=0;
        final_top=260;
        type_of_movement=1;
        moveImage();
        id1 = setInterval(flaskEmpty,50);
}

function flaskEmpty(){
	var flask=[];
	var i;
	var img=$("#flask")[0];
	for(i=1;i<=70;i++)
	{
		flask[i]="img_exp1/sprites/flask_pouring_water/" + i +".png"
	}
	if(y < flask.length)
	{
		img.src=flask[y];
	}
	y++;
	if(y == 65)
	{
		clearInterval(id1);
		$("#flask").hide();
		$("#flsk").hide();
	}
}

function callBeaker(){
	$("#B_water").show();
	$("#flsk").show();
	id2=setInterval(fillBeaker,50);
}

function fillBeaker(){
	var beaker=[],i;
	i=23;
	img=$("#B_water")[0];
	for(i=24;i<=50;i++)
		beaker[i]="img_exp1/sprites/water_filling_beaker/" + i + ".png";
	if(z < beaker.length)
	{
		img.src=beaker[z];
	}
	z++;
	if(z == 50)
	{
		clearInterval(id2);
		setTimeout(wtag,1500);
	}
}

function wtag(){
	elem=document.getElementById('water_tag');
	$("#water_tag").show();
    $("#water_tag").css("opacity",1);
	initial_top = Math.round($("#water_tag").position().top);
    initial_left = Math.round($("#water_tag").position().left);
    step_top=-0.5;
    step_left=0;
    final_top=398;
    type_of_movement=1;
    moveImage();
    setTimeout(stop,1100);
}

function stop(){
	$("#water_tag").hide();
}

function showFecl3(){
	$("#fecl3_powder").show();
	$("#powder_arrow").show();
	$("#fecl3_text").show();
}

function Powder(){
	$("#beak_spoon").show();
	$("#beaker").hide();
	$("#spoon").hide();
	$("#powder_spoon").hide();
	$("#B_water").hide();
	$("#beak_spoon").show();
	$("#rd").show();
	setTimeout(delaySpoon,2000);	
}

function delaySpoon(){
	x=1;
	id5=setInterval(callSpoon,100);
}
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
		$("#powder_arrow").hide();
		$("#fecl3_text").hide();
		setTimeout(showRod,1000);
	}
	
}

function showRod(){
	$("#rod").show();
	$("#rd").hide();
	$("#g_txt").show();
	$("#g_arrow").show();
	$("#change").html("Click on the Glass Rod to stir the FeCl<sub>3</sub> Soultion....")
}

function callRod(){
	if(step_no==1)
	{
		$("#rod").hide();
		$("#beak_spoon").hide();
		$("#grod").show();
		$("#g_txt").hide();
		$("#g_arrow").hide();
		id6=setInterval(stirRod,100);
		x=2;
		setTimeout(moveFullBeak,5000);
		step_no++;
	}
}

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

function moveFullBeak(){
	initial_top = Math.round($("#beak_spoon").position().top);
    initial_left = Math.round($("#beak_spoon").position().left);
    step_top=0;
    step_left=-0.5;
    final_top=0;
    final_left=390;
    type_of_movement=3;
    elem=document.getElementById("beak_spoon");
    moveImage();
    setTimeout(display,2000);
}

function display(){
	$("#div_fecl3").show();
	$("#con_arrow").show();
	$("#water_flask").show();
	$("#con_flask").show();
	$("#change").html("Click on the Conical Flask containing Water, to Place it on the Magnetic Stirrer/Heater");
}

function callConFlsk(){
	if(step_no==2){
	initial_top = Math.round($("#water_flask").position().top);
    initial_left = Math.round($("#water_flask").position().left);
    step_top=0.5;
    step_left=0;
    final_top=278;
    final_left=0;
    type_of_movement=0;
    elem=document.getElementById("water_flask");
    moveImage();
    setTimeout(Show_func,2000);
    step_no++;
	$("#con_arrow").hide();
	$("#con_flask").hide();
	}
}

function Show_func(){
	$("#magnet").show();
	$("#mag_arrow").show();
	$("#mag_txt").show();
	$("#change").html("Click on the Magnetic Bead to drop it into the Flask....")
}

function callMagnet(){
	if(step_no==3){
	initial_top = Math.round($("#magnet").position().top);
    initial_left = Math.round($("#magnet").position().left);
    step_top=0.5;
    step_left=0;
    final_top=354;
    final_left=0;
    type_of_movement=0;
    elem=document.getElementById("magnet");
    moveImage();
    step_no++;
	$("#mag_arrow").hide();
	$("#mag_txt").hide();
	setTimeout(showHeat,2000);
	}
}

function showHeat(){
	$("#change").html("Switch on the Heater of the Magnetic Stirrer & Heater ...");
	$("#heat_arrow").show();
	$("#heat_txt").show();
}
function callButton2(){
	if(step_no==4){
	$("#red_button").show();
	$("#heat_txt").hide();
	$("#heat_arrow").hide();
	$("#stir_arrow").show();
	$("#stir_txt").show();
	$("#change").html("Switch on the Stirrer of the Magnetic Stirrer & Heater ...");
	step_no++;
	}
	else if(step_no ==6){
		clearInterval(id4);
		$("#heat_arrow").hide();
		$("#heat_txt").hide();
		$("#heat_bubb").hide();
		$("#change").html("Click on the pipette to take 10ml conc. FeCl<sub>3</sub> from the beaker.....");
		$("#red_button").hide();
		$("#pipette").show();
		$("#beak_spoon").attr('src',"img_exp1/shapes/beak.png");
		$("#div_fecl3").hide();
		$("#beak_spoon").css("left","21.33%");
		$("#beak_spoon").css("top","266%");
		$("#beak_spoon").css("height","60%");
		$("#pip_arrow").show();
		$("#pip_txt").show();
		initial_top = Math.round($("#beak_spoon").position().top);
    	initial_left = Math.round($("#beak_spoon").position().left);	
	    step_top=0;
 	   	step_left=1.3;
   		final_top=0;
   		final_left=510;
  		type_of_movement=4;
 	   	elem=document.getElementById("beak_spoon");
   		moveImage();
   		step_no++;
	}
}

function callButton1(){
	if(step_no==5){
		x=1;
		setTimeout(boil,3000);
		$("#stir_arrow").hide();
		$("#stir_txt").hide();
		step_no++;
		$("#magnet").hide();
		$("#change").html("Wait till the water starts boiling.....");
		$("#mag").show();
	}
}

function boil(){
	console.log("yes");
	$("#heat_bubb").show();
	id4=setInterval(boil_water,150)
}

function boil_water(){
	i=1;
	img=document.getElementById("heat_bubb");
	var water=[]
	for(i=0;i<=80;i++)
	{
		if(i%2){
			water[i]="img_exp1/heat_bubbles/1.png";
		}
		else{
			water[i]="img_exp1/heat_bubbles/2.png"
		}
	}
	x++;
	if(x<water.length)
	{
		console.log("x")
		img.src=water[x];
	}
	if(x==10){
		x=1;
		$("#heat_arrow").show();
		$("#change").html("Now that the water gas started boiling, Switch off the Heater.....");
		$("#heat_txt").show();
	}
}

function callPipette(){
	if(step_no==7){
		step_no++;
		initial_top = Math.round($("#pipette").position().top);
    	initial_left = Math.round($("#pipette").position().left);	
	    step_top=1;
 	   	step_left=-0.2;
   		final_top=350;
   		final_left=100;
  		type_of_movement=0;
 	   	elem=document.getElementById("pipette");
   		moveImage();
	}
}