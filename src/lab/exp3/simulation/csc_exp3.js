
var event=0;
var time;
var rod=0;
var close=0;

window.onload = function(){ 
	addPointer("#struc");
	addPointer("#action");
	addPointer("#form");
	addPointer("#close_btn1");
    addclickEvents();
}

// addPointer: Adds a pointer to the object to be clicked
function addPointer(Id){
	$(Id).css("cursor","pointer");
}

//This function adds click events to all clickable objects
function addclickEvents(){
    document.getElementById("struc").addEventListener("click", function() {
        callStruc();
    }, false);
    document.getElementById("action").addEventListener("click", function() {
        callAction();
    }, false);
    document.getElementById("form").addEventListener("click", function() {
        callForm();
    }, false);
    document.getElementById("spoon").addEventListener("click", function() {
        callSpoon();
    }, false);
    document.getElementById("rod").addEventListener("click", function() {
        callRod();
    }, false);
    document.getElementById("rod2").addEventListener("click", function() {
        callRod2();
    }, false);
    document.getElementById("mol").addEventListener("click", function() {
        callMol();
    }, false);
    document.getElementById("mol2").addEventListener("click", function() {
        callMol2();
    }, false);
    document.getElementById("dcth").addEventListener("click", function() {
        callDirty();
    }, false);
    document.getElementById("close_btn1").addEventListener("click", function() {
        callClose1();
    }, false);
    document.getElementById("close_btn2").addEventListener("click", function() {
        callClose2();
    }, false);
    document.getElementById("close_btn3").addEventListener("click", function() {
        callClose3();
    }, false);
    document.getElementById("close_btn4").addEventListener("click", function() {
        callClose4();
    }, false);
    document.getElementById("spoon4").addEventListener("click", function() {
        callSpoon4();
    }, false);
}

function move(id,left,top,time){
    $(id).velocity({translateX: left+"%",translateY: top+"%"},{duration: time});
}

function callStruc() {
	$("#buttons").hide();
	$("#div_btn1").show();
	setTimeout(function() {
		$("#head").on("mouseout",function(){
			$("#head_red").velocity({opacity: 0},{duration: 500});
			$("#infoh").hide();
		})
		$("#head").on("mouseover",function(){
			$("#head_red").velocity({opacity: 0.9},{duration: 1000});
			$("#infoh").show();
		})
		$("#tail").on("mouseout",function(){
			$("#tail_red").velocity({opacity: 0},{duration: 500});
			$("#infotl").hide();
		})
		$("#tail").on("mouseover",function(){
			$("#tail_red").velocity({opacity: 0.9},{duration: 1000});
			$("#infotl").show();
		})
	}, 1500);
	move("#infobg",0,100,1500);
}

function callAction() {
	$("#buttons").hide();
	$("#div_btn2").show();
}

function callSpoon() {
	$("#dtr_arw").hide();
	$("#spoon").velocity({translateY: "190%",translateX: "-193%"},{duration:1500});
	setTimeout(function() {
		$("#spoon").hide();
		$("#pow").show();
		$("#pow").velocity({translateX: "-20%", translateY: "380%",width: "7%",
			height: "140%",opacity: 0.7},{duration: 1000})
	}, 1500);
	setTimeout(function() {
		$("#rod").show();
		$("#str_rod").show();
	}, 2500);
}

function callClose1(){
	$("#div_btn1").hide();
	$("#buttons").show();
}

function callRod() {
	$("#str_rod").hide();
	$("#rod").hide();
	$("#stir").show();
	$("#pow").velocity({opacity:0},{duration: 4300});
	setTimeout(function() {
		$("#stir").hide();
		$("#mol").show();
	}, 4100);
}

function callMol() {
	$("#blue_back").show();
	$("#micl1").rotate({angle:90});
	$("#micl1").animate({top:"+=30%"},500);
	$("#micl1").animate({top:"-=30%"},500);
	$("#micl2").rotate({angle:30});
	$("#micl2").animate({top: "+=30%", left: "+=5%"},500);
	$("#micl2").animate({top: "-=30%", left: "-=5%"},500);
	$("#micl3").rotate({angle:345});
	$("#micl3").animate({top: "-=20%", left: "+=15%"},500);
	$("#micl3").animate({top: "+=20%", left: "-=15%"},500);
	$("#micl4").rotate({angle:330});
	$("#micl4").animate({top: "-=20%", left: "+=25%"},500);
	$("#micl4").animate({top: "+=20%", left: "-=25%"},500);
	$("#micl5").rotate({angle:300});
	$("#micl5").animate({top: "-=20%", left: "+=5%"},500);
	$("#micl5").animate({top: "+=20%", left: "-=5%"},500);
	$("#micl6").animate({left: "+=15%"},500);
	$("#micl6").animate({left: "-=15%"},500);
	$("#micl7").rotate({angle:120});
	$("#micl7").animate({top: "+=20%", left: "-=10%"},500);
	$("#micl7").animate({top: "-=20%", left: "+=10%"},500);
	$("#micl8").rotate({angle:150});
	$("#micl8").animate({top: "+=25%", left: "-=15%"},500);
	$("#micl8").animate({top: "-=25%", left: "+=15%"},500);
	$("#micl9").rotate({angle:40});
	$("#micl9").animate({top: "+=10%", left: "+=15%"},500);
	$("#micl9").animate({top: "-=10%", left: "-=15%"},500);
	$("#micl10").rotate({angle:340});
	$("#micl10").animate({top: "-=20%", left: "+=10%"},500);
	$("#micl10").animate({top: "+=20%", left: "-=10%"},500);
	$("#micl11").rotate({angle:320});
	$("#micl11").animate({top: "-=20%", left: "+=10%"},500);
	$("#micl11").animate({top: "+=20%", left: "-=10%"},500);

	time = setInterval(function repeat() {
		$("#micl1").animate({
			top: "+=30%"	
		},500);
		$("#micl1").animate({
			top: "-=30%"
		},500);
		$("#micl2").animate({
			top: "+=20%",
			left: "+=15%"
		},500);
		$("#micl2").animate({
			top: "-=20%", 
			left: "-=15%"
		},500);
		$("#micl3").animate({
			top: "-=20%",
			left: "+=25%"
		},500);
		$("#micl3").animate({
			top: "+=20%", 
			left: "-=25%"
		},500);
		$("#micl4").animate({
			top: "-=30%",
			left: "+=5%"
		},500);
		$("#micl4").animate({
			top: "+=30%", 
			left: "-=5%"
		},500);
		$("#micl5").animate({
			top: "-=20%",
			left: "+=5%"
		},500);
		$("#micl5").animate({
			top: "+=20%", 
			left: "-=5%"
		},500);
		$("#micl6").animate({
			left: "+=15%"
		},500);
		$("#micl6").animate({
			left: "-=15%"
		},500);
		$("#micl7").animate({
			top: "+=20%", 
			left: "-=10%"
		},500);
		$("#micl7").animate({
			top: "-=20%", 
			left: "+=10%"
		},500);
		$("#micl8").animate({
			top: "+=25%", 
			left: "-=15%"
		},500);
		$("#micl8").animate({
			top: "-=25%", 
			left: "+=15%"
		},500);
		$("#micl9").animate({
			top: "+=10%", 
			left: "+=15%"
		},500);
		$("#micl9").animate({
			top: "-=10%", 
			left: "-=15%"
		},500);
		$("#micl10").animate({
			top: "-=20%", 
			left: "+=10%"
		},500);
		$("#micl10").animate({
			top: "+=20%", 
			left: "-=10%"
		},500);
		$("#micl11").animate({
			top: "-=20%", 
			left: "+=10%"
		},500);
		$("#micl11").animate({
			top: "+=20%", 
			left: "-=10%"
		},500);
	},1000)
}

function callClose2() {
	clearInterval(time);
	$("#blue_back").hide();
	$("#mol").hide();
	$("#dcth").show();
	$("#dcth_arr").show();
}

function callDirty() {
	$("#dcth_arr").hide();
	$("#dcth").velocity({translateY: "850%", height: "150%", 
		opacity: 0.6, width: "5%"},{duration:1500});
	setTimeout(function() {
		$("#mol2").show();
	}, 1500);
}

function callMol2() {
	$("#blue_back2").show();
	$("#fibre").show();
	$("#micll1").rotate({angle:90});
	$("#micll2").rotate({angle:30});
	$("#micll3").rotate({angle:345});
	$("#micll4").rotate({angle:330});
	$("#micll5").rotate({angle:300});
	$("#micll7").rotate({angle:120});
	$("#micll8").rotate({angle:150});
	$("#micll9").rotate({angle:40});
	$("#micll10").rotate({angle:340});
	$("#micll11").rotate({angle:320});
	$("#micll1").rotate({duration: 2000 , angle:90,animateTo:0})
	$("#micll2").rotate({duration: 2000 , angle:30,animateTo:33})
	$("#micll3").rotate({duration: 2000 , angle:345,animateTo:64})
	$("#micll4").rotate({duration: 2000 , angle:330,animateTo:96})
	$("#micll5").rotate({duration: 2000 , angle:300,animateTo:128})
	$("#micll6").rotate({duration: 2000 , angle:0,animateTo:160})
	$("#micll7").rotate({duration: 2000 , angle:120,animateTo:192})
	$("#micll8").rotate({duration: 2000 , angle:150,animateTo:224})
	$("#micll9").rotate({duration: 2000 , angle:40,animateTo:256})
	$("#micll10").rotate({duration: 2000 , angle:340,animateTo:288})
	$("#micll11").rotate({duration: 2000 , angle:320,animateTo:327})
	$("#micll1").animate({
		left: "+=37%"
	},2000);
	$("#micll2").animate({
		top: "-=20%",
		left: "+=19%"
	},2000);
	$("#micll3").animate({
		top: "-=14%",
		left: "-=2%"
	},2000);
	$("#micll4").animate({
		top: "-=26%",
		left: "-=19%"
	},2000);
	$("#micll5").animate({
		top: "-=32%",
		left: "-=12%"
	},2000);
	$("#micll6").animate({
		top: "-=7%",
		left: "-=35%"
	},2000);
	$("#micll7").animate({
		top: "+=2%",
		left: "-=40%"
	},2000);
	$("#micll8").animate({
		top: "-=70%",
		left: "-=37%"
	},2000);
	$("#micll9").animate({
		top: "-=56%",
		left: "-=39%"
	},2000);
	$("#micll10").animate({
		top: "-=46%",
		left: "-=44%"
	},2000);
	$("#micll11").animate({
		top: "-=56%",
		left: "-=35%"
	},2000);
	setTimeout(function() {
		$("#ball").show();
	}, 1700);
	setTimeout(function() {
		$("#fibre").animate({
			top: "+=15%",
			left: "-=10%"
		},2000);
		$("#ball").animate({
			top: "-=3%",
			left: "+=40%"
		},2000);
		$("#micll1").animate({
			top: "-=3%",
			left: "+=40%"
		},2000);
		$("#micll2").animate({
			top: "-=3%",
			left: "+=40%"
		},2000);
		$("#micll3").animate({
			top: "-=3%",
			left: "+=40%"
		},2000);
		$("#micll4").animate({
			top: "-=3%",
			left: "+=40%"
		},2000);
		$("#micll5").animate({
			top: "-=3%",
			left: "+=40%"
		},2000);
		$("#micll6").animate({
			top: "-=3%",
			left: "+=40%"
		},2000);
		$("#micll7").animate({
			top: "-=3%",
			left: "+=40%"
		},2000);
		$("#micll8").animate({
			top: "-=3%",
			left: "+=40%"
		},2000);
		$("#micll9").animate({
			top: "-=3%",
			left: "+=40%"
		},2000);
		$("#micll10").animate({
			top: "-=3%",
			left: "+=40%"
		},2000);
		$("#micll11").animate({
			top: "-=3%",
			left: "+=40%"
		},2000);
		setTimeout(function() {
			time = setInterval(function () {
				$("#micll1").animate({
					left: "+=2%"
				},500);
				$("#micll1").animate({
					left: "-=2%"
				},500);
				$("#micll2").animate({
					left: "+=2%",
					top: "+=2%"
				},500);
				$("#micll2").animate({
					left: "-=2%",
					top: "-=2%"
				},500);
				$("#micll3").animate({
					left: "+=2%",
					top: "+=3%"
				},500);
				$("#micll3").animate({
					left: "-=2%",
					top: "-=3%"
				},500);
				$("#micll4").animate({
					left: "-=1%",
					top: "+=3%"
				},500);
				$("#micll4").animate({
					left: "+=1%",
					top: "-=3%"
				},500);
				$("#micll5").animate({
					left: "-=2%",
					top: "+=3%"
				},500);
				$("#micll5").animate({
					left: "+=2%",
					top: "-=3%"
				},500);
				$("#micll6").animate({
					left: "-=3%",
					top: "+=3%"
				},500);
				$("#micll6").animate({
					left: "+=3%",
					top: "-=3%"
				},500);
				$("#micll7").animate({
					left: "-=3%",
				},500);
				$("#micll7").animate({
					left: "+=3%",
				},500);
				$("#micll8").animate({
					left: "-=3%",
					top: "-=2%"
				},500);
				$("#micll8").animate({
					left: "+=3%",
					top: "+=2%"
				},500);
				$("#micll9").animate({
					top: "-=2%"
				},500);
				$("#micll9").animate({
					top: "+=2%"
				},500);
				$("#micll10").animate({
					top: "-=2%",
					left:"+=1%"
				},500);
				$("#micll10").animate({
					top: "+=2%",
					left:"-=1%"
				},500);
				$("#micll11").animate({
					top: "-=2%",
					left:"+=2%"
				},500);
				$("#micll11").animate({
					top: "+=2%",
					left:"-=2%"
				},500);
			},500);
		}, 1500);
		setTimeout(function() {
			$("#arr1").show();
			$("#arr2").rotate({angle:270});
			$("#arr2").show();
			$("#arr1_txt").show()
			$("#arr2_txt").show()
		}, 2000);
	}, 2000);
}

function callClose3() {
	clearInterval(time);
	$("#blue_back2").hide();
	$("#mol2").hide();
	$("#clth").show();
	$("#dcth").velocity({opacity:0},{duration:600});
	setTimeout(function() {
		$("#clth").velocity({translateY: "-400%", height: "320%", 
			width: "4%" , opacity: 1},{duration:1000});
	}, 900);
	setTimeout(function() {
		$("#rsbn").show();
		$("#clrw").show();
	}, 1900);
}

function callForm() {
	$("#buttons").hide();
	$("#div_btn3").show();
	setTimeout(function() {
		$("#spoon2").velocity({translateY: "190%",translateX: "-193%"},
			{duration:1500});
		setTimeout(function() {
			$("#spoon2").hide();
			$("#pow2").show();
			$("#pow2").velocity({translateX: "-20%", translateY: "380%",width: "7%",
				height: "140%",opacity: 0.7},{duration: 1000})
		}, 1500);
		setTimeout(function() {
			$("#rod2").show();
			$("#str_rod2").show();
		}, 2500);
	}, 500);
}

function callRod2() {
	if(!rod){
		rod++;
		$("#str_rod2").hide();
		$("#rod2").hide();
		$("#stir2").show();
		$("#pow2").velocity({opacity:0},{duration: 4300});
		setTimeout(function() {
			$("#stir2").hide();
			$("#blue_back3").show();
			$("#surface1").show();
			$("#close_btn4").show();
		}, 4100);
	}
	else if(rod==1){
		rod++;
		$("#str_rod2").hide();
		$("#rod2").hide();
		$("#stir3").show();
		$("#pow3").velocity({opacity:0},{duration: 4300});
		setTimeout(function() {
			$("#stir3").hide();
			$("#blue_back3").show();
			$("#close_btn4").show();
			for (var i = 1; i < 12; i++) {
				var x = "#mic";
				var y = x + i;
				$(y).show();
			}
			$("#line").show();			
			$("#mic1").rotate({angle:90});
			$("#mic1").animate({top:"+=30%"},500);
			$("#mic1").animate({top:"-=30%"},500);
			$("#mic2").rotate({angle:30});
			$("#mic2").animate({top: "+=30%", left: "+=5%"},500);
			$("#mic2").animate({top: "-=30%", left: "-=5%"},500);
			$("#mic3").rotate({angle:345});
			$("#mic3").animate({top: "-=20%", left: "+=15%"},500);
			$("#mic3").animate({top: "+=20%", left: "-=15%"},500);
			$("#mic4").rotate({angle:330});
			$("#mic4").animate({top: "-=20%", left: "+=25%"},500);
			$("#mic4").animate({top: "+=20%", left: "-=25%"},500);
			$("#mic5").rotate({angle:300});
			$("#mic5").animate({top: "-=20%", left: "+=5%"},500);
			$("#mic5").animate({top: "+=20%", left: "-=5%"},500);
			$("#mic6").animate({left: "+=15%"},500);
			$("#mic6").animate({left: "-=15%"},500);
			$("#mic7").rotate({angle:120});
			$("#mic7").animate({top: "+=20%", left: "-=10%"},500);
			$("#mic7").animate({top: "-=20%", left: "+=10%"},500);
			$("#mic8").rotate({angle:150});
			$("#mic8").animate({top: "+=25%", left: "-=15%"},500);
			$("#mic8").animate({top: "-=25%", left: "+=15%"},500);
			$("#mic9").rotate({angle:40});
			$("#mic9").animate({top: "+=10%", left: "+=15%"},500);
			$("#mic9").animate({top: "-=10%", left: "-=15%"},500);
			$("#mic10").rotate({angle:340});
			$("#mic10").animate({top: "-=20%", left: "+=10%"},500);
			$("#mic10").animate({top: "+=20%", left: "-=10%"},500);
			$("#mic11").rotate({angle:320});
			$("#mic11").animate({top: "-=20%", left: "+=10%"},500);
			$("#mic11").animate({top: "+=20%", left: "-=10%"},500);
			time = setInterval(function repeat() {
				$("#mic1").animate({
					top: "+=30%"	
				},500);
				$("#mic1").animate({
					top: "-=30%"
				},500);
				$("#mic2").animate({
					top: "+=20%",
					left: "+=15%"
				},500);
				$("#mic2").animate({
					top: "-=20%", 
					left: "-=15%"
				},500);
				$("#mic3").animate({
					top: "-=20%",
					left: "+=25%"
				},500);
				$("#mic3").animate({
					top: "+=20%", 
					left: "-=25%"
				},500);
				$("#mic4").animate({
					top: "-=30%",
					left: "+=5%"
				},500);
				$("#mic4").animate({
					top: "+=30%", 
					left: "-=5%"
				},500);
				$("#mic5").animate({
					top: "-=20%",
					left: "+=5%"
				},500);
				$("#mic5").animate({
					top: "+=20%", 
					left: "-=5%"
				},500);
				$("#mic6").animate({
					left: "+=15%"
				},500);
				$("#mic6").animate({
					left: "-=15%"
				},500);
				$("#mic7").animate({
					top: "+=20%", 
					left: "-=10%"
				},500);
				$("#mic7").animate({
					top: "-=20%", 
					left: "+=10%"
				},500);
				$("#mic8").animate({
					top: "+=25%", 
					left: "-=15%"
				},500);
				$("#mic8").animate({
					top: "-=25%", 
					left: "+=15%"
				},500);
				$("#mic9").animate({
					top: "+=10%", 
					left: "+=15%"
				},500);
				$("#mic9").animate({
					top: "-=10%", 
					left: "-=15%"
				},500);
				$("#mic10").animate({
					top: "-=20%", 
					left: "+=10%"
				},500);
				$("#mic10").animate({
					top: "+=20%", 
					left: "-=10%"
				},500);
				$("#mic11").animate({
					top: "-=20%", 
					left: "+=10%"
				},500);
				$("#mic11").animate({
					top: "+=20%", 
					left: "-=10%"
				},500);
			},1000)
		}, 4100);
	}
	else if(rod==2){
		$("#str_rod2").hide();
		$("#rod2").hide();
		$("#stir4").show();
		setTimeout(function() {
			$("#cmc").show();
		}, 2000);
		$("#pow4").velocity({opacity:0},{duration: 4300});
		setTimeout(function() {
			$("#stir4").hide();
			$("#blue_back3").show();
			$("#mic1").css("top","38%");
			$("#mic1").css("left","5%");
			$("#mic2").css("top","70%");
			$("#mic2").css("left","1%");
			$("#mic3").css("top","70%");
			$("#mic3").css("left","2%");
			$("#mic4").css("top","83%");
			$("#mic4").css("left","-3%");
			$("#mic5").css("top","30%");
			$("#mic5").css("left","-30%");
			$("#mic6").css("top","50%");
			$("#mic6").css("left","-25%");
			$("#mic7").css("top","30%");
			$("#mic7").css("left","-35%");
			$("#mic8").css("top","60%");
			$("#mic8").css("left","50%");
			$("#mic9").css("top","40%");
			$("#mic9").css("left","45%");
			$("#mic10").css("top","30%");
			$("#mic10").css("left","45%");
			$("#mic11").css("top","50%");
			$("#mic11").css("left","30%");

			$("#mic1").rotate({angle:90});
			$("#mic2").rotate({angle:30});
			$("#mic3").rotate({angle:345});
			$("#mic4").rotate({angle:330});
			$("#mic5").rotate({angle:300});
			$("#mic7").rotate({angle:120});
			$("#mic8").rotate({angle:150});
			$("#mic9").rotate({angle:40});
			$("#mic10").rotate({angle:340});
			$("#mic11").rotate({angle:320});
			$("#mic1").rotate({duration: 2000 , angle:90,animateTo:0})
			$("#mic2").rotate({duration: 2000 , angle:30,animateTo:33})
			$("#mic3").rotate({duration: 2000 , angle:345,animateTo:64})
			$("#mic4").rotate({duration: 2000 , angle:330,animateTo:96})
			$("#mic5").rotate({duration: 2000 , angle:300,animateTo:128})
			$("#mic6").rotate({duration: 2000 , angle:0,animateTo:160})
			$("#mic7").rotate({duration: 2000 , angle:120,animateTo:192})
			$("#mic8").rotate({duration: 2000 , angle:150,animateTo:224})
			$("#mic9").rotate({duration: 2000 , angle:40,animateTo:256})
			$("#mic10").rotate({duration: 2000 , angle:340,animateTo:288})
			$("#mic11").rotate({duration: 2000 , angle:320,animateTo:327})
			$("#mic1").animate({
				left: "+=27%"
			},2000);
			$("#mic2").animate({
				top: "-=25%",
				left: "+=15%"
			},2000);
			$("#mic3").animate({
				top: "-=21%",
				left: "-=4%"
			},2000);
			$("#mic4").animate({
				top: "-=33%",
				left: "-=18%"
			},2000);
			$("#mic5").animate({
				top: "+=17%",
				left: "-=9%"
			},2000);
			$("#mic6").animate({
				top: "-=8%",
				left: "-=30%"
			},2000);
			$("#mic7").animate({
				top: "+=6%",
				left: "-=36%"
			},2000);
			$("#mic8").animate({
				top: "-=34%",
				left: "-=33%"
			},2000);
			$("#mic9").animate({
				top: "-=17%",
				left: "-=38%"
			},2000);
			$("#mic10").animate({
				top: "-=7%",
				left: "-=48%"
			},2000);
			$("#mic11").animate({
				top: "-=23%",
				left: "-=43%"
			},2000);
			setTimeout(function() {
				$("#mic1").animate({
					top: "-=3%",
					left: "+=40%"
				},2000);
				$("#mic2").animate({
					top: "-=3%",
					left: "+=40%"
				},2000);
				$("#mic3").animate({
					top: "-=3%",
					left: "+=40%"
				},2000);
				$("#mic4").animate({
					top: "-=3%",
					left: "+=40%"
				},2000);
				$("#mic5").animate({
					top: "-=3%",
					left: "+=40%"
				},2000);
				$("#mic6").animate({
					top: "-=3%",
					left: "+=40%"
				},2000);
				$("#mic7").animate({
					top: "-=3%",
					left: "+=40%"
				},2000);
				$("#mic8").animate({
					top: "-=3%",
					left: "+=40%"
				},2000);
				$("#mic9").animate({
					top: "-=3%",
					left: "+=40%"
				},2000);
				$("#mic10").animate({
					top: "-=3%",
					left: "+=40%"
				},2000);
				$("#mic11").animate({
					top: "-=3%",
					left: "+=40%"
				},2000);
				setTimeout(function() {
					$("#mic_txt").show();
					time = setInterval(function () {
						$("#mic1").animate({
							left: "+=2%"
						},500);
						$("#mic1").animate({
							left: "-=2%"
						},500);
						$("#mic2").animate({
							left: "+=2%",
							top: "+=2%"
						},500);
						$("#mic2").animate({
							left: "-=2%",
							top: "-=2%"
						},500);
						$("#mic3").animate({
							left: "+=2%",
							top: "+=3%"
						},500);
						$("#mic3").animate({
							left: "-=2%",
							top: "-=3%"
						},500);
						$("#mic4").animate({
							left: "-=1%",
							top: "+=3%"
						},500);
						$("#mic4").animate({
							left: "+=1%",
							top: "-=3%"
						},500);
						$("#mic5").animate({
							left: "-=2%",
							top: "+=3%"
						},500);
						$("#mic5").animate({
							left: "+=2%",
							top: "-=3%"
						},500);
						$("#mic6").animate({
							left: "-=3%",
							top: "+=3%"
						},500);
						$("#mic6").animate({
							left: "+=3%",
							top: "-=3%"
						},500);
						$("#mic7").animate({
							left: "-=3%",
						},500);
						$("#mic7").animate({
							left: "+=3%",
						},500);
						$("#mic8").animate({
							left: "-=3%",
							top: "-=2%"
						},500);
						$("#mic8").animate({
							left: "+=3%",
							top: "+=2%"
						},500);
						$("#mic9").animate({
							top: "-=2%"
						},500);
						$("#mic9").animate({
							top: "+=2%"
						},500);
						$("#mic10").animate({
							top: "-=2%",
							left:"+=1%"
						},500);
						$("#mic10").animate({
							top: "+=2%",
							left:"-=1%"
						},500);
						$("#mic11").animate({
							top: "-=2%",
							left:"+=2%"
						},500);
						$("#mic11").animate({
							top: "+=2%",
							left:"-=2%"
						},500);
					},500);
				}, 1500);
			}, 1000);
		}, 4100);
	}
}

function callClose4() {
	if(!close){
		close++;
		$("#surface1").hide();
		$("#close_btn4").hide();
		$("#blue_back3").hide();
		$("#spoon3").show();
		setTimeout(function() {
			$("#spoon3").velocity({translateY: "190%",translateX: "-193%"},
				{duration:1500});
			setTimeout(function() {
				$("#spoon3").hide();
				$("#pow3").show();
				$("#pow3").velocity({translateX: "-20%", translateY: "380%",
					width: "7%", height: "140%", opacity: 0.7}, {duration: 1000})
			}, 1500);
			setTimeout(function() {
				$("#rod2").show();
				$("#str_rod2").show();
			}, 2500);
		}, 500);
	}
	else if(close==1){
		close++;
		$("#blue_back3").hide();
		$("#close_btn4").hide();
		clearInterval(time);
		$("#spoon4").show();
		$("#dtr_arw2").show();
		$("#line").hide();
	}
	else if(close==2){
		close++;
		$("#blue_back3").hide();
		$("#close_btn4").hide();
		
	}
}

function callSpoon4() {
	$("#dtr_arw2").hide();
	$("#spoon4").velocity({translateY: "190%",translateX: "-193%"},{duration:1500});
	setTimeout(function() {
		$("#spoon4").hide();
		$("#pow4").show();
		$("#pow4").velocity({translateX: "-20%", translateY: "380%",width: "7%",
			height: "140%",opacity: 0.7},{duration: 1000})
	}, 1500);
	setTimeout(function() {
		$("#rod2").show();
		$("#str_rod2").show();
	}, 2500);
}