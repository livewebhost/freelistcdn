/* Custom Script for Nearestme */

/* Define Base URL */
if(location.protocol == "http:")
{
  var base_url = "http://businesslist.in/";
}else{
  var base_url = "https://businesslist.in/";
}

/* AJAX Controllers */
$(document).ready(function(e){
$("#save_client_info").on('submit', function(e){
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: base_url+'my-websites',
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData:false,
        beforeSend: function(){
          $('.submitBtnnn').attr("disabled","disabled");
          $('#save_client_info').css("opacity",".5");
        },
        success: function(msg){ console.log(msg);
        if(msg == "true"){
          $('#save_client_info')[0].reset();
          $('#msginfo_client_info').html('<div class="alert alert-success msg_alert" style="font-weight: 600;">Domain Setup has been successfully completed.</div>');
          setTimeout(closepanel, 1000);
        }else if(msg == "false"){
          // Error
          $('#msginfo_client_info').html('<div class="alert alert-danger msg_alert" style="font-weight: 600;">Error: Duplicate Domain.</div>');
        }else{
          $('#msginfo_client_info').html('');
        }
        $('#save_client_info').css("opacity","");
        $(".submitBtnnn").removeAttr("disabled");
      }
    });
  });


});