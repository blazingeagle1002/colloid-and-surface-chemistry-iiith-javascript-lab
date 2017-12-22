var model = {

    instruction1: '1. Select water from the apparatus.',
    instruction2: '2. Make a salt solution using the salt container in the apparatus.',
    instruction3: '3. Make a sugar solution using the sugar container in the apparatus.',
    instruction4: '4. Make a soap solution using the detergent in the apparatus.',
    instruction5: '5. Make a Fe(OH)<sub>3</sub> colloid using the Fe(OH)<sub>3</sub> in the apparatus.',
    instruction6: '6. Make an Ag colloid using the Ag in the apparatus.',
    instruction7: '7. Tyndall effect is observed when light is passed through the solution.' +
        'Click on any of the beakers for detailed observation.',
};

var view = {
    //All the required variables are defined
    step_no: 0,
    x: 0,
    y: 0,
    z: 0,
    a: 0,
    b: 0,
    c: 0,

    // setInnerHtml: Calls this method to set the innerText to an element.
    setInnerHTML: function(id, innerHTML) {
        document.getElementById(id).innerHTML = innerHTML;
    },

    // addClickEvent: Calls this method to add EventListener to an element.
    addClickEvent: function(id, method) {
        var element = document.getElementById(id);
        element.addEventListener('click', method);
    },

    //removeClickEvent: Calls this method to remove EventListener for an element.
    removeClickEvent: function(id) {
        document.getElementById(id).style.pointerEvents = 'none';
    },

    //enableClickEvent: Calls this method to enable EventListener for an element.
    enableClickEvent: function(id) {
        document.getElementById(id).style.pointerEvents = 'auto';
    },

    // animateDirection_1: Calls this method to move an element in a straight line.
    animateDirection_1: function(id, top, left, time) {
        $('#' + id).animate({
            top: top + '%',
            left: left + '%'
        }, {
            duration: time
        });
    },

    move: function(id, top, left, time) {
        $(id).velocity({
            translateX: left + "%",
            translateY: top + "%"
        }, {
            duration: time
        });
    },

    // resetPage: Calls this method to reset the page on clicking the button.
    resetPage: function() {
        location.reload();
    },

    /* activateEvents: Calls this method to add EventListener to an elements. When an element is 
    clicked corresponding function gets executed. */
    activateEvents: function() {
        this.addClickEvent('reset_btn', function() {
            view.resetPage();
        });
        this.addClickEvent('flsk', function() {
            view.water();
        });
        this.addClickEvent('salt', function() {
            view.callSalt();
        });
        this.addClickEvent('sgr', function() {
            view.callSugar();
        });
        this.addClickEvent('dtr', function() {
            view.callDeter();
        });
        this.addClickEvent('feoh', function() {
            view.callFeoh();
        });
        this.addClickEvent('ag', function() {
            view.callAg();
        });
        this.addClickEvent('beak1_water', function() {
            view.water();
        });
        this.addClickEvent('beak2_water', function() {
            view.callSalt();
        });
        this.addClickEvent('beak3_water', function() {
            view.callSugar();
        });
        this.addClickEvent('beak4_water', function() {
            view.callDeter();
        });
        this.addClickEvent('beak5_water', function() {
            view.callFeoh();
        });
        this.addClickEvent('beak6_water', function() {
            view.callAg();
        });
        this.addClickEvent('chk1', function() {
            view.sub_water();
        });
        this.addClickEvent('btn1', function() {
            view.window1_close();
        });
        this.addClickEvent('chk2', function() {
            view.sub_deter();
        });
        this.addClickEvent('btn2', function() {
            view.window2_close();
        });
        this.addClickEvent('chk3', function() {
            view.sub_colloid();
        });
        this.addClickEvent('btn3', function() {
            view.window3_close();
        });
    },

    removeEvents: function() {
        document.getElementById('salt').style.pointerEvents = 'none';
        document.getElementById('sgr').style.pointerEvents = 'none';
        document.getElementById('dtr').style.pointerEvents = 'none';
        document.getElementById('feoh').style.pointerEvents = 'none';
        document.getElementById('ag').style.pointerEvents = 'none';
    },

    water: function() {
        if (this.step_no == 0) {
            $("#back1").show();
            $("#beak1").show();
            $("#flsk").css("cursor", "default");
            view.removeClickEvent("flsk");
            this.animateDirection_1('beak1', '+=38', '-=5', '1000');
            this.step_no++;
            setTimeout(function() {
                $("#flask1").show();
                $("#arrow1").show();
                $("#ar1_txt").show();
            }, 1000);
            setTimeout(function() {
                this.x = 1;
                $("#arrow1").hide();
                $("#ar1_txt").hide();
                time1 = setInterval(function() {
                    $("#flask1").css("width", "81.58%");
                    $("#flask1").css("height", "22.8%");
                    images = [];
                    for (i = 1; i <= 69; i++) {
                        images[i] = "images/sprites/water_flasks/" + i + ".png";
                    }
                    if (this.x < images.length) {
                        $("#flask1").attr("src", images[this.x]);
                    }
                    this.x++;
                    if (this.x == 70) {
                        $("#flask1").hide();
                        clearInterval(time1);
                    }
                }, 50);
            }, 3000);

            setTimeout(function() {
                this.y = 1;
                time2 = setInterval(function() {
                    water = [];
                    for (j = 0; j <= 48; j++) {
                        water[j] = "images/sprites/water_beak/" + j + ".png";
                    }
                    if (this.y < water.length) {
                        $("#beak1_water").attr("src", water[this.y]);
                    }
                    this.y++;
                    if (this.y == 49) {
                        clearInterval(time2);
                        $("#tag1").show();
                        $("#water_txt").show();
                        setTimeout(function() {
                            view.animateDirection_1('tag1', '-=3', '-=0', '1000');
                        }, 500);
                        setTimeout(function() {
                            view.animateDirection_1('water_txt', '-=3', '-=0', '1000');
                        }, 500);
                        view.enableClickEvent("salt");
                        $("#salt").css("cursor", "pointer");
                        $("#salt_shrt").css("cursor", "pointer");
                        $("#salt_shrt").on("click", function() {
                            view.callSalt();
                        });
                        $("#beak1_water").css("cursor", "pointer");
                        $("#beak1").css("cursor", "pointer");
                        $("#beak1").on(
                            "click",
                            function() {
                                view.water();
                            }
                        );
                        view.setInnerHTML('change', model.instruction2);
                    }
                }, 50)
            }, 2800)
        } else if (this.step_no > 0) {
            $("#txt1").html("Water Solution");
            $("#pop_water").modal('show');
            $("#cover1_txt").html("Water Solution");
        }
    },

    callSalt: function() {
        if (this.step_no == 1) {
            $("#back2").show();
            $("#beak2").show();
            $("#salt").css("cursor", "default");
            $("#salt_shrt").css("cursor", "default");
            $("#salt_shrt").off("click");
            view.removeClickEvent("salt");
            this.animateDirection_1('beak2', '+=38', '-=63', '1000');
            this.step_no++;
            setTimeout(function() {
                $("#flask2").show();
                $("#arrow2").show();
                $("#ar2_txt").show();
            }, 1000);
            setTimeout(function() {
                this.x = 1;
                $("#arrow2").hide();
                $("#ar2_txt").hide();
                time3 = setInterval(function() {
                    $("#flask2").css("width", "81.58%");
                    $("#flask2").css("height", "22.8%");
                    images = [];
                    for (i = 1; i <= 69; i++) {
                        images[i] = "images/sprites/water_flasks/" + i + ".png";
                    }
                    if (this.x < images.length) {
                        $("#flask2").attr("src", images[this.x]);
                    }
                    this.x++;
                    if (this.x == 70) {
                        $("#flask2").hide();
                        clearInterval(time3);
                    }
                }, 50);
            }, 3000);

            setTimeout(function() {
                this.y = 1;
                time4 = setInterval(function() {
                    water = [];
                    for (j = 0; j <= 48; j++) {
                        water[j] = "images/sprites/water_beak/" + j + ".png";
                    }
                    if (this.y < water.length) {
                        $("#beak2_water").attr("src", water[this.y]);
                    }
                    this.y++;
                    if (this.y == 49) {
                        clearInterval(time4);
                    }
                }, 50)
            }, 2800);


            setTimeout(function() {
                $("#stir_tag1").show();
                $("#stir_txt1").show();
            }, 10000)

            setTimeout(function() {
                $("#beak2").css("top", "-2%");
                $("#beak2").css("left", "22.7%");
                this.z = 205;
                time5 = setInterval(function() {
                    water = [];
                    for (k = 205; k <= 294; k++) {
                        water[k] = "images/sprites/sugar_salt/" + k + ".png";
                    }
                    if (this.z < water.length) {
                        $("#beak2").attr("src", water[this.z]);
                    }
                    if (this.z == 213) {
                        $("#ar3_txt").show();
                    }
                    if (this.z == 265) {
                        $("#ar3_txt").hide();
                    }
                    this.z++;
                    if (this.z == 295) {
                        $("#rod1").show();
                        clearInterval(time5);
                    }
                }, 50)
            }, 6000)


            setTimeout(function() {
                $("#stir_tag1").hide();
                $("#stir_txt1").hide();
            }, 13000)

            setTimeout(function() {
                this.x = 0;
                time6 = setInterval(function() {
                    for (j = 0; j <= 59; j++) {
                        water[j] = "images/sprites/stirring/" + j + ".png";
                    }
                    if (this.x < water.length) {
                        $("#rod1").attr("src", water[this.x]);
                    }
                    this.x++;
                    if (this.x == 60) {
                        $("#rod1").hide();
                        clearInterval(time6);
                        $("#tag2").show();
                        $("#salt2_txt").show();
                        setTimeout(function() {
                            view.animateDirection_1('tag2', '-=3', '-=0', '1000');
                        }, 500);
                        setTimeout(function() {
                            view.animateDirection_1('salt2_txt', '-=3', '-=0', '1000');
                        }, 500);
                        view.enableClickEvent('sgr');
                        $("#sgr").css("cursor", "pointer");
                        $("#sgr_shrt").css("cursor", "pointer");
                        $("#sgr_shrt").on("click", function() {
                            view.callSugar();
                        });
                        $("#beak2_water").css("cursor", "pointer");
                        $("#beak2").css("cursor", "pointer");
                        $("#beak2").on(
                            "click",
                            function() {
                                view.callSalt();
                            }
                        );
                        view.setInnerHTML('change', model.instruction3);
                    }
                }, 50)
            }, 10000)
        } else if (this.step_no > 1) {
            $("#txt1").html("Salt Solution");
            $("#pop_water").modal('show');
            $("#cover1_txt").html("Salt Solution");
        }
    },

    callSugar: function() {
        if (this.step_no == 2) {
            $("#back3").show();
            $("#beak3").show();
            $("#sgr").css("cursor", "default");
            $("#sgr_shrt").css("cursor", "default");
            $("#sgr_shrt").off("click");
            view.removeClickEvent("sgr");
            this.animateDirection_1('beak3', '+=38', '-=52', '1000');
            this.step_no++;
            setTimeout(function() {
                $("#flask3").show();
                $("#arrow4").show();
                $("#ar4_txt").show();
            }, 1000);
            setTimeout(function() {
                this.x = 1;
                $("#arrow4").hide();
                $("#ar4_txt").hide();
                time7 = setInterval(function() {
                    images = [];
                    $("#flask3").css("width", "81.58%");
                    $("#flask3").css("height", "22.8%");
                    for (i = 1; i <= 69; i++) {
                        images[i] = "images/sprites/water_flasks/" + i + ".png";
                    }
                    if (this.x < images.length) {
                        $("#flask3").attr("src", images[this.x]);
                    }
                    this.x++;
                    if (this.x == 70) {
                        $("#flask3").hide();
                        clearInterval(time7);
                    }
                }, 50);
            }, 3000);

            setTimeout(function() {
                this.y = 1;
                time8 = setInterval(function() {
                    water = [];
                    for (j = 0; j <= 48; j++) {
                        water[j] = "images/sprites/water_beak/" + j + ".png";
                    }
                    if (this.y < water.length) {
                        $("#beak3_water").attr("src", water[this.y]);
                    }
                    this.y++;
                    if (this.y == 49) {
                        clearInterval(time8);
                    }
                }, 50)
            }, 2800);

            setTimeout(function() {
                $("#beak3").css("top", "-2%");
                $("#beak3").css("left", "33.8%");
                this.z = 205;
                time9 = setInterval(function() {
                    water = [];
                    for (k = 205; k <= 294; k++) {
                        water[k] = "images/sprites/sugar_salt/" + k + ".png";
                    }
                    if (this.z < water.length) {
                        $("#beak3").attr("src", water[this.z]);
                    }
                    if (this.z == 213) {
                        $("#ar5_txt").show();
                    }
                    if (this.z == 265) {
                        $("#ar5_txt").hide();
                    }
                    this.z++;
                    if (this.z == 295) {
                        $("#rod2").show();
                        clearInterval(time9);
                    }
                }, 50)
            }, 6000)

            setTimeout(function() {
                $("#stir_tag2").show();
                $("#stir_txt2").show();
            }, 10000)


            setTimeout(function() {
                this.x = 0;
                time10 = setInterval(function() {
                    for (j = 0; j <= 59; j++) {
                        water[j] = "images/sprites/stirring/" + j + ".png";
                    }
                    if (this.x < water.length) {
                        $("#rod2").attr("src", water[this.x]);
                    }
                    this.x++;
                    if (this.x == 60) {
                        $("#rod2").hide();
                        clearInterval(time10);
                        $("#tag3").show();
                        $("#sugar_txt").show();
                        setTimeout(function() {
                            view.animateDirection_1('tag3', '-=3', '-=0', '1000');
                        }, 500);
                        setTimeout(function() {
                            view.animateDirection_1('sugar_txt', '-=3', '-=0', '1000');
                        }, 500);
                        view.enableClickEvent('dtr');
                        $("#dtr").css("cursor", "pointer");
                        $("#dtr_shrt").css("cursor", "pointer");
                        $("#dtr_shrt").on(
                            "click",
                            function() {
                                view.callDeter();
                            }
                        );
                        $("#beak3_water").css("cursor", "pointer");
                        $("#beak3").css("cursor", "pointer");
                        $("#beak3").on(
                            "click",
                            function() {
                                view.callSugar();
                            }
                        );
                        view.setInnerHTML('change', model.instruction4);
                    }
                }, 50)
            }, 10000)

            setTimeout(function() {
                $("#stir_tag2").hide();
                $("#stir_txt2").hide();
            }, 13000)



        } else if (this.step_no > 2) {
            $("#txt1").html("Sugar Solution");
            $("#pop_water").modal('show');
            $("#cover1_txt").html("Sugar Solution");
        }

    },

    callDeter: function() {
        if (this.step_no == 3) {
            $("#back4").show();
            $("#beak4").show();
            $("#dtr").css("cursor", "default");
            $("#dtr_shrt").css("cursor", "default");
            $("#dtr_shrt").off("click");
            view.removeClickEvent("dtr");
            this.animateDirection_1('beak4', '+=38', '-=40', '1000');
            this.step_no++;
            setTimeout(function() {
                $("#flask4").show();
                $("#arrow5").show();
                $("#ar6_txt").show();
            }, 1000);
            setTimeout(function() {
                this.x = 1;
                $("#arrow5").hide();
                $("#ar6_txt").hide();
                time11 = setInterval(function() {
                    images = [];
                    $("#flask4").css("width", "81.58%");
                    $("#flask4").css("height", "22.8%");
                    for (i = 1; i <= 69; i++) {
                        images[i] = "images/sprites/water_flasks/" + i + ".png";
                    }
                    if (this.x < images.length) {
                        $("#flask4").attr("src", images[this.x]);
                    }
                    this.x++;
                    if (this.x == 70) {
                        $("#flask4").hide();
                        clearInterval(time11);
                    }
                }, 50);
            }, 3000);

            setTimeout(function() {
                this.y = 1;
                time12 = setInterval(function() {
                    water = [];
                    for (j = 0; j <= 48; j++) {
                        water[j] = "images/sprites/water_beak/" + j + ".png";
                    }
                    if (this.y < water.length) {
                        $("#beak4_water").attr("src", water[this.y]);
                    }
                    this.y++;
                    if (this.y == 49) {
                        clearInterval(time12);
                    }
                }, 50)
            }, 2800);
            setTimeout(function() {
                $("#stir_tag3").show();
                $("#stir_txt3").show();
            }, 10000)

            setTimeout(function() {
                $("#beak4").css("top", "-2%");
                $("#beak4").css("left", "45.8%");
                this.z = 205;
                time13 = setInterval(function() {
                    water = [];
                    for (k = 205; k <= 294; k++) {
                        water[k] = "images/sprites/detergent_mixing/" + k + ".png";
                    }
                    if (this.z < water.length) {
                        $("#beak4").attr("src", water[this.z]);
                    }
                    if (this.z == 213) {
                        $("#ar7_txt").show();
                    }
                    if (this.z == 265) {
                        $("#ar7_txt").hide();
                    }
                    this.z++;
                    if (this.z == 295) {
                        $("#rod3").show();
                        clearInterval(time13);
                    }
                }, 50)
            }, 6000)

            setTimeout(function() {
                $("#stir_tag3").hide();
                $("#stir_txt3").hide();
            }, 13000)

            setTimeout(function() {
                this.x = 0;
                this.a = 100;
                this.b = 0;
                time14 = setInterval(function() {
                    for (j = 0; j <= 59; j++) {
                        water[j] = "images/sprites/stirring/" + j + ".png";
                    }
                    if (this.x < water.length) {
                        $("#rod3").attr("src", water[this.x]);
                        this.a -= 1.8;
                        if (this.a < 4)
                            this.a = 9;
                        this.b = this.a + "%";
                        $("#beak4_water").css("-webkit-filter", "grayscale(" + this.b + ")");
                    }
                    this.x++;
                    if (this.x == 55) {
                        $("#beak4_water").css("top", "60.7%");
                        $("#beak4_water").css("height", "7.3%")
                        $("#beak4_water").attr("src", "images/shapes/457.png");
                    }
                    if (this.x == 70) {
                        $("#rod3").hide();
                        clearInterval(time14);
                        $("#tag4").show();
                        $("#deter_txt").show();
                        setTimeout(function() {
                            view.animateDirection_1('tag4', '-=3', '-=0', '1000');
                        }, 500);
                        setTimeout(function() {
                            view.animateDirection_1('deter_txt', '-=3', '-=0', '1000');
                        }, 500);
                        view.enableClickEvent('feoh');
                        $("#beak4_water").css("cursor", "pointer");
                        $("#beak4").css("cursor", "pointer");
                        $("#beak4").on(
                            "click",
                            function() {
                                view.callDeter();
                            }
                        );
                        $("#feoh").css("cursor", "pointer");
                        view.setInnerHTML('change', model.instruction5);
                    }
                }, 50)
            }, 10000)
        } else if (this.step_no > 3) {
            $("#pop_deter").modal('show');
        }
    },

    callFeoh: function() {
        if (this.step_no == 4) {
            $("#back5").show();
            $("#beak5").show();
            $("#req_tag").show();
            $("#req_txt").show();
            $("#feoh").css("cursor", "default");
            view.removeClickEvent("feoh");
            this.animateDirection_1('beak5', '+=38', '-=28', '1000');
            this.step_no++;
            setTimeout(function() {
                $("#flask5").show();
                $("#arrow6").show();
                $("#ar8_txt").show();
            }, 1000);
            setTimeout(function() {
                this.x = 1;
                $("#arrow6").hide();
                $("#ar8_txt").hide();
                time15 = setInterval(function() {
                    images = [];
                    for (i = 1; i <= 69; i++) {
                        images[i] = "images/sprites/feoh_flasks/" + i + ".png";
                    }
                    $("#flask5").css("width", "81.58%");
                    $("#flask5").css("height", "22.8%");
                    if (this.x < images.length) {
                        $("#flask5").attr("src", images[this.x]);
                    }
                    this.x++;
                    if (this.x == 70) {
                        $("#flask5").hide();
                        clearInterval(time15);
                    }
                }, 50);
            }, 3000);

            setTimeout(function() {
                this.y = 1;
                time12 = setInterval(function() {
                    water = [];
                    for (j = 0; j <= 48; j++) {
                        water[j] = "images/sprites/water_beak/feoh/" + j + ".png";
                    }
                    if (this.y < water.length) {
                        $("#beak5_water").attr("src", water[this.y]);
                    }
                    this.y++;
                    if (this.y == 49) {
                        $("#beak5_water").attr("src", "images/shapes/460.png");
                        $("#beak5_water").css("height", "6.9%");
                        $("#beak5_water").css("opacity", "1");
                        clearInterval(time12);
                    }
                }, 50)
            }, 2800);

            setTimeout(function() {
                $("#tag5").show();
                $("#feoh2_txt").show();
                setTimeout(function() {
                    view.animateDirection_1('tag5', '-=3', '-=0', '1000');
                }, 500);
                setTimeout(function() {
                    view.animateDirection_1('feoh2_txt', '-=3', '-=0', '1000');
                }, 500);
                view.enableClickEvent('ag');
                $("#ag").css("cursor", "pointer");
                $("#beak5_water").css("cursor", "pointer");
                $("#beak5").css("cursor", "pointer");
                $("#beak5").on("click", function() {
                    view.callFeoh();
                });
                view.setInnerHTML('change', model.instruction6);
            }, 5400);
        } else if (this.step_no > 4) {
            $("#image3").attr("src", "images/images/3.png");
            $("#txt3").html("Fe(OH)<sub>3</sub> -Colloid Solution");
            $("#pop_colloid").modal('show');
            $("#cover3_txt").html("Fe(OH)<sub>3</sub> Colloid");
        }
    },

    callAg: function() {
        if (this.step_no == 5) {
            $("#back6").show();
            $("#beak6").show();
            $("#ag").css("cursor", "default");
            view.removeClickEvent("ag");
            this.animateDirection_1('beak6', '+=38', '-=16', '1000');
            this.step_no++;
            setTimeout(function() {
                $("#flask6").show();
                $("#arrow7").show();
                $("#ar9_txt").show();
            }, 1000);
            setTimeout(function() {
                this.x = 1;
                $("#arrow7").hide();
                $("#ar9_txt").hide();
                time16 = setInterval(function() {
                    images = [];
                    $("#flask6").css("width", "81.58%");
                    $("#flask6").css("height", "22.8%");
                    for (i = 1; i <= 69; i++) {
                        images[i] = "images/sprites/ag_flasks/" + i + ".png";
                    }
                    if (this.x < images.length) {
                        $("#flask6").attr("src", images[this.x]);
                    }
                    this.x++;
                    if (this.x == 70) {
                        $("#flask6").hide();
                        clearInterval(time16);
                    }
                }, 50);
            }, 3000);

            setTimeout(function() {
                this.y = 1;
                time17 = setInterval(function() {
                    water = [];
                    for (j = 0; j <= 48; j++) {
                        water[j] = "images/sprites/water_beak/ag/" + j + ".png";
                    }
                    if (this.y < water.length) {
                        $("#beak6_water").attr("src", water[this.y]);
                    }
                    this.y++;
                    if (this.y == 49) {
                        $("#beak6_water").attr("src", "images/shapes/462.png");
                        $("#beak6_water").css("height", "6.9%");
                        $("#beak6_water").css("opacity", "1");
                        clearInterval(time17);
                    }
                }, 50)
            }, 2800);

            setTimeout(function() {
                $("#tag6").show();
                $("#ag2_txt").show();
                setTimeout(function() {
                    view.animateDirection_1('tag6', '-=3', '-=0', '1000');
                }, 500);
                setTimeout(function() {
                    view.animateDirection_1('ag2_txt', '-=3', '-=0', '1000');
                }, 500);
                // view.enableClickEventBeak();
                $("#start").hide();
                $("#change").hide();
                $("#final").show();
                $("#final_txt").show();
                $("#ins").hide();
                $("#check").hide();
                $("#beak6_water").css("cursor", "pointer");
                $("#beak6").css("cursor", "pointer");
                $("#beak6").on("click", function() {
                    view.callAg();
                });
            }, 5400);
        } else if (this.step_no > 5) {
            $("#image3").attr("src", "images/images/4.png");
            $("#txt3").html("Ag -Colloid Solution");
            $("#pop_colloid").modal('show');
            $("#cover3_txt").html("Ag-Colloid");
        }
    },

    sub_water: function() {
        var ans1 = $("input:radio[name=effect1]:checked").val();
        var ans2 = $("input:radio[name=type1]:checked").val();
        if (ans1 == 'no' && ans2 == 'true') {
            $.alert({
                title: '',
                content: '<p style="text-align:center;font-size:20px;font-weight:bold">Your answer is right!</p>',
                buttons: {
                    ok: function() {
                        $("#cover1").show();
                        $("#pop_water").modal('hide');
                    }
                },
            });
        } else {
            $.alert({
                title: '',
                content: '<p style="text-align:center;font-size:20px;font-weight:bold">Your answer is wrong!</p>',
                buttons: {
                    ok: function() {
                        $("#cover1").show();
                        $("#pop_water").modal('hide');
                    }
                },
            });
        }
    },

    window1_close: function() {
        $("#cover1").hide();
    },
    window2_close: function() {
        $("#cover2").hide();
    },
    window3_close: function() {
        $("#cover3").hide();
    },
    sub_deter: function() {
        var ans1 = $("input:radio[name=effect2]:checked").val();
        var ans2 = $("input:radio[name=type2]:checked").val();
        if (ans1 == 'yes' && ans2 == 'colloid') {
            $.alert({
                title: '',
                content: '<p style="text-align:center;font-size:20px;font-weight:bold">Your answer is right!</p>',
                buttons: {
                    ok: function() {
                        $("#cover2").show();
                        $("#pop_deter").modal('hide');
                    }
                },
            });
        } else {
            $.alert({
                title: '',
                content: '<p style="text-align:center;font-size:20px;font-weight:bold">Your answer is wrong!</p>',
                buttons: {
                    ok: function() {
                        $("#cover2").show();
                        $("#pop_deter").modal('hide');
                    }
                },
            });
        }
    },

    sub_colloid: function() {
        var ans1 = $("input:radio[name=effect3]:checked").val();
        console.log(ans1);
        var ans2 = $("input:radio[name=type3]:checked").val();
        console.log(ans2);
        if (ans1 == 'yes' && ans2 == 'colloid') {
            $.alert({
                title: '',
                content: '<p style="text-align:center;font-size:20px;font-weight:bold">Your answer is right!</p>',
                buttons: {
                    ok: function() {
                        $("#cover3").show();
                        $("#pop_colloid").modal('hide');
                    }
                },
            });
        } else {
            $.alert({
                title: '',
                content: '<p style="text-align:center;font-size:20px;font-weight:bold">Your answer is wrong!</p>',
                buttons: {
                    ok: function() {
                        $("#cover3").show();
                        $("#pop_colloid").modal('hide');
                    }
                },
            });
        }
    },

};

window.onload = function() {
    view.activateEvents();
    view.removeEvents();
    $("#flsk").css("cursor", "pointer");
};