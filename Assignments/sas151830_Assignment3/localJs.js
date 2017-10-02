$(".toggle").click(function(){
    $(this).siblings(".complete").toggle();
    if ($(this).text() == "more.." )  {
    	$(this).text("less..")
    }  else {
    	$(this).text("more..")
    }
});

$(".hide_sec").click(function(){
    $(this).siblings(".complete_hide").hide();
    $(this).text("");
});

$(".show_sec").click(function(){
    $(this).siblings(".complete_show").show();
    $(this).text(""); 
});


$("#b1").dblclick(function (){
	$(".col-lg-4:eq(2)").fadeIn();
	$(".col-lg-4:eq(1)").fadeIn("slow");
	$(".col-lg-4:eq(0)").fadeIn(3000);
	$("#b2").on("mouseenter");
    $("#b2").css({cursor:"auto"});
    $("#b1").off("mouseenter");
    $("#b1").css({cursor:"not-allowed"});
});

$("#b2").dblclick(function (){
	$(".col-lg-4:eq(2)").fadeOut();
	$(".col-lg-4:eq(1)").fadeOut("slow");
	$(".col-lg-4:eq(0)").fadeOut(3000);
	$("#b2").off("mouseenter");
    $("#b2").css({cursor:"not-allowed"});
    $("#b1").on("mouseenter");
    $("#b1").css({cursor:"auto"});
});

$("#b3").dblclick(function (){
	$(".col-lg-4:eq(2)").fadeToggle();
	$(".col-lg-4:eq(1)").fadeToggle("slow");
	$(".col-lg-4:eq(0)").fadeToggle(3000);
	if ($("#b1").css("cursor") == "not-allowed") {
		$("#b2").off("mouseenter");
	    $("#b2").css({cursor:"not-allowed"});
	    $("#b1").on("mouseenter");
	    $("#b1").css({cursor:"auto"});
	}else{
		$("#b2").on("mouseenter");
	    $("#b2").css({cursor:"auto"});
	    $("#b1").off("mouseenter");
	    $("#b1").css({cursor:"not-allowed"});
	}
});

$("#b4").dblclick(function (){
	$(".col-lg-4:eq(2)").fadeTo("fast", 0.7);
	$(".col-lg-4:eq(1)").fadeTo("slow", 0.7);
	$(".col-lg-4:eq(0)").fadeTo("fast", 0.7);
 	$("#b2").on("mouseenter");
    $("#b2").css({cursor:"auto"});
    $("#b1").off("mouseenter");
    $("#b1").css({cursor:"not-allowed"});
});


$(".featurette-image").mouseenter(function(){
    $(this).animate({height :'300px'},1500, function(){
    	$(this).animate({ height :'400px'},"slow");	
    });     		
});

$(".featurette-image").mouseleave(function(){
	$(this).stop(true);   		
});


// $("#t1").keypress(function(){
// 	$(".featurette-image").fadeTo("slow", 1).fadeOut(2000).fadeIn(4000).fadeTo("slow", 0.5);    
// });

// $("#t1").keydown(function(){
//    $("#img_1").animate({"left" :"+=50px"});
// });

$("#t1").keydown(function(){
   $("#img_1").animate({height: '300px'}, "slow").animate({width: '250px'}, "slow").animate({height: '200px'}, "slow").animate({height: '400px', width:'400px'}, "slow");
});

$("#t2").keypress(function(){
   $("#img_2").fadeOut(2000).fadeIn("slow").fadeTo("slow",0.4);
});


// last part
 function delete_cell(x){
           x.parent().parent().remove();
  }
 $(".delete").click(function(){
      delete_cell($(this));
  });

$("#add").click(function(){
    $("table > tbody:last-child").append
      	('<tr><td><input type ="text" class="cell"></input></td>'+
			'<td><input type ="text" class="cell"></input></td>'+
			'<td><input type ="text" class="cell"></input></td>'+
			'<td><input type ="text" class="cell"></input></td>'+
			'<td><button class="btn delete btn-danger">Delete</button></td>'+
		'</tr>');
    $(".delete").on({
        click:  function(){
            delete_cell($(this));
        }
   	});
   	$(".cell").on({               
                         mouseover: function(){
                          
                             if(event.altKey){
  					lastKeyAlt = true;
	        		$(this).css("background-color",'blue');
	            	$(this).css("color",'red');
	            	}
                        },
                   
                   onmousemove:  function(){
                   	if(event.altKey){
	        		$(this).css("background-color",'blue');
	            	$(this).css("color",'red');
	            	}
                   }                 
                      });
});




  $(".cell").mousemove(function(){
  		if(event.altKey){
	        		$(this).css("background-color",'blue');
	            	$(this).css("color",'red');
	            	}	
  });
          	

$(document).keyup(function(){
        
       
                   
                     
                     $(".cell").css("background-color",'white'); 
                     $(".cell").css("color",'black');	       
                      //e.target.style.backgroundColor = "white";
               
        lastKeyAlt = false;
         
         });
$(".cell").keyup(function(){
        
       
                   
                     
                     $(".cell").css("background-color",'white'); 
                     $(".cell").css("color",'black');	       
                      //e.target.style.backgroundColor = "white";
               
        lastKeyAlt = false;
         return true;
         });

// NOT WORKING
  // $(document).keydown(function(event){
   // 		// if(event.altKey){
   // 			$(".cell").on({ 
	  //       	mouseover: function(){
	  //       		if(event.altKey){
	  //       		$(this).css("background-color",'blue');
	  //           	$(this).css("color",'red');
	  //           	}	
   //      		}
   // 			}
   // 		// }
   // 	});
  
  
 //  $(".cell").keyup(function(){
 //  	$(this).css("background-color",'white');
	//             	$(this).css("color",'black');
	// });  

  // $(document).keydown(function(event){
  //       $(".cell").on({ 
  //       	mouseover: function(){
  //              if(event.altKey)
  //             {
  //                   lastKeyAlt = true;
  //                          $(this).css("background-color",'blue');
  //                   		  $(this).css("color",'red');
  //              }
  //          		else
  //               {
  //                    lastKeyAlt = false;
  //               }
  //           },
  //             mouseleave:function(){
  //                             $(".cell").css("background-color",'white');
  //                   		  $(".cell").css("color",'black');
  //              },
  //               });
  // });

  // $(document).keyup(function(e){
        
       
                   
  //                    $(".cell").unbind("mousemove");
  //                    $(".cell").css("background-color",'white');
  //                    $(".cell").css("color",'black');
                     
  //                     //e.target.style.backgroundColor = "white";
               
        
  //        return true;
  //        });