// JavaScript Document

$(document).ready(function(){
  showSection(".home");

  $(".logo").click(function(){
    //$(".bio").fadeIn(800);
  window.location.href = "/";
  // $(".cv").fadeIn(800);
  });

  // $(".testing").click(function(){
  //   //$(".bio").fadeIn(800);
  //   showSection(".r");
  //   });

  $(".fun").click(function(){
   	//$(".bio").fadeIn(800);
    window.location.href = "fun";
  });

  $(".works").click(function(){
    //$(".bio").fadeIn(800);
    window.location.href = "works";
  });

  $(".w12").click(function(){
    //$(".bio").fadeIn(800);
    window.location.href = "hi-bird";
  });

  $(".w11").click(function(){
    //$(".bio").fadeIn(800);
    window.location.href = "Cycles-in-Cycles-Run-in-Cycle";
  });

  $(".w10").click(function(){
    //$(".bio").fadeIn(800);
    window.location.href = "handicap";
  });

  $(".w9").click(function(){
    //$(".bio").fadeIn(800);
    window.location.href = "blah-blah-blah";
  });

  $(".w8").click(function(){
    //$(".bio").fadeIn(800);
    window.location.href = "Something-between-0-and-1";
  });

  $(".w7").click(function(){
    //$(".bio").fadeIn(800);
    window.location.href = "cozy";
  });

  $(".w6").click(function(){
    //$(".bio").fadeIn(800);
    window.location.href = "decomposing";
  });

  $(".w5").click(function(){
    //$(".bio").fadeIn(800);
    window.location.href = "resound";
  });

  $(".w4").click(function(){
    //$(".bio").fadeIn(800);
    window.location.href = "aaiss";
  });

  $(".w3").click(function(){
    //$(".bio").fadeIn(800);
    window.location.href = "city-maze";
  });

  $(".w2").click(function(){
    //$(".bio").fadeIn(800);
    window.location.href = "Integrated-Branching-City";
  });

  $(".w1").click(function(){
    //$(".bio").fadeIn(800);
    window.location.href = "walk-the-dog.html";
      $(".worksthumbnail").slideUp(800);
  });

  $(".a2").click(function(){
	// showSection(".cv");
  window.location.href = "cv";
  $(".twocolumn").slideUp(500);
  // $(".cv").fadeIn(800);
  });

  $(".a1").click(function(){
	// showSection(".cv");
  window.location.href = "bio";
  $(".twocolumn").slideUp(500);
  // $(".cv").fadeIn(800);
  });

  //   $(".worksthumbnail").click(function(){
  //  	//$(".bio").fadeIn(800);
	// showSection(".hibird");
  // });


	$(".toggleMenu").click(function(){
		if ($(".leftMenu").hasClass("leftMenuOpen")){
			 $(".leftMenu").removeClass("leftMenuOpen");
			 $(".content").removeClass("contentSwitch");
		}else{
			$(".leftMenu").addClass("leftMenuOpen");
			$(".content").addClass("contentSwitch");
		}
	});
  //
	// $(".a1").click(function(){
	// 	$(".leftMenu").removeClass("leftMenuOpen");
	// 	$(".content").removeClass("contentSwitch");
  //
	// });
  //
	// $(".a2").click(function(){
	// 	$(".leftMenu").removeClass("leftMenuOpen");
	// 	$(".content").removeClass("contentSwitch");
  //
	// });
  //
	// $(".a3").click(function(){
	// 	$(".leftMenu").removeClass("leftMenuOpen");
	// 	$(".content").removeClass("contentSwitch");
  //
	// });
  //
	// $(".a4").click(function(){
	// 	$(".leftMenu").removeClass("leftMenuOpen");
	// 	$(".content").removeClass("contentSwitch");
  //
	// });

	$("img1").responsiveImg();


  showSection(".bio,.nav,.logo");

});

function showSection(arg){
	$(".section").hide();
	// $(arg).fadeIn(800);
}
