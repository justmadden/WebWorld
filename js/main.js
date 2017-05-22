$(document).ready(function () {


  $("#second-item").click(function() {
      if($("#second-item").hasClass("myitem-active"))
      {
          $("#second-item").removeClass("myitem-active");
          $("#second-item img").attr("src","img/pencilOFF.png");
          $( "#hide-content" ).fadeOut("slow");
      }
      else
      {
          $("#second-item").addClass( "myitem-active" );
          $("#second-item img").attr("src","img/pencilON.png");
          $("#hide-content").show("slow");

      }
  });
});
