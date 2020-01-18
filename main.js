$(document).ready(function(){
  $('#create').click(function(){


    var template = $('input[name=template]:checked').val();
    var templateIndex =  $("input[name=template]:checked").index();


    console.log('template: '+template+" number: "+templateIndex);
     $('#template').attr("src", template);

     switch (templateIndex){
       case 0:
        $('#text-top').css("top", "50px");
        $('#text-top').css("right", "40px");
        $('#text-top').css("color", "black");
        $('#text-bottom').css("bottom", "100px");
        $('#text-bottom').css("right", "40px");
        $('#text-bottom').css("display", "inline");
        $('#text-bottom').css("color", "black");
        $('body').css("background-color", "white");
        console.log("css changed for drake");
        break;
      case 2:
        $('#text-top').css("top", "20px");
        $('#text-top').css("right", "220px");
        $('#text-top').css("color", "black");
        $('#text-bottom').css("bottom", "100px");
        $('#text-bottom').css("right", "250px");
        $('#text-bottom').css("display", "inline");
        $('#text-bottom').css("color", "black");
        console.log("css changed for harold");
        break;
      case 4:
       $('#text-top').css("top", "10px");
       $('#text-top').css("right", "0px");
       $('#text-top').css("color", "black");
       $('#text-bottom').css("bottom", "100px");
       $('#text-bottom').css("right", "20px");
       $('#text-bottom').css("display", "none");
       $('#text-bottom').css("color", "black");
       console.log("css changed for cat");

       break;
      case 6:
      $('#text-top').css("top", "50px");
      $('#text-top').css("right", "20px");
      $('#text-top').css("color", "white");
      $('#text-bottom').css("bottom", "100px");
      $('#text-bottom').css("right", "20px");
      $('#text-bottom').css("display", "inline");
      $('#text-bottom').css("color", "white");
      console.log("css changed for flex");
      break;
      default:
      $('#text-bottom').css("display", "inline");
      $('#text-bottom').css("color", "black");
     }

    var topText = $('#top-text').val();

    var btmText = $('#bottom-text').val();


    $('#text-top').html(topText);
    $('#text-bottom').html(btmText);

  });
});
