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

  $(".about").click(function(){
	// showSection(".cv");
  window.location.href = "cv";
  $(".twocolumn").slideUp(800);
  // $(".cv").fadeIn(800);
  });

  //   $(".worksthumbnail").click(function(){
  //  	//$(".bio").fadeIn(800);
	// showSection(".hibird");
  // });

   $(".a4").click(function(){
   	//$(".bio").fadeIn(800);
	showSection(".contact");
  });


    $(".ray").click(function(){
   	$(".raydetail").slideDown(800);
  });

  	$(".c1").click(function(){
   	$(".raydetail").slideUp(800);
  });

      $(".desmond").click(function(){
   	$(".desmonddetail").slideDown(800);
  });

  	$(".c2").click(function(){
   	$(".desmonddetail").slideUp(800);
  });

      $(".frankie").click(function(){
   	$(".frankiedetail").slideDown(800);
  });

  	$(".c3").click(function(){
   	$(".frankiedetail").slideUp(800);
  });

      $(".hymn").click(function(){
   	$(".hymndetail").slideDown(800);
  });

  	$(".c4").click(function(){
   	$(".hymndetail").slideUp(800);
  });

      $(".jonathan").click(function(){
   	$(".jonathandetail").slideDown(800);
  });

  	$(".c5").click(function(){
   	$(".jonathandetail").slideUp(800);
  });

  //click blank to close//
  $(".raydetail").click(function(){
   	$(".raydetail").slideUp(800);
  });

  $(".desmonddetail").click(function(){
   	$(".desmonddetail").slideUp(800);
  });

  $(".frankiedetail").click(function(){
   	$(".frankiedetail").slideUp(800);
  });

  $(".hymndetail").click(function(){
   	$(".hymndetail").slideUp(800);
  });

  $(".jonathandetail").click(function(){
   	$(".jonathandetail").slideUp(800);
  });


	$(".toggleMenu").click(function(){
		if ($(".leftMenu").hasClass("leftMenuOpen")){
			 $(".leftMenu").removeClass("leftMenuOpen");
			 $(".content").removeClass("contentSwitch");
		}else{
			$(".leftMenu").addClass("leftMenuOpen");
			$(".content").addClass("contentSwitch");
		}
	});

	$(".a1").click(function(){
		$(".leftMenu").removeClass("leftMenuOpen");
		$(".content").removeClass("contentSwitch");

	});

	$(".a2").click(function(){
		$(".leftMenu").removeClass("leftMenuOpen");
		$(".content").removeClass("contentSwitch");

	});

	$(".a3").click(function(){
		$(".leftMenu").removeClass("leftMenuOpen");
		$(".content").removeClass("contentSwitch");

	});

	$(".a4").click(function(){
		$(".leftMenu").removeClass("leftMenuOpen");
		$(".content").removeClass("contentSwitch");

	});

	$("img1").responsiveImg();


  showSection(".bio,.nav,.logo");

});

function showSection(arg){
	$(".section").hide();
	// $(arg).fadeIn(800);
}
