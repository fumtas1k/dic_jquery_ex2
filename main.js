$(()=>{

  $("#accordion").find("dd").hide();
  $("#accordion").find("dt").on("click", function(){
    $(this).next("dd").slideToggle("slow");
  });
});