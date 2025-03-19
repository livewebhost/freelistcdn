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
        url: base_url+'save_client_info',
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
          $('#msginfo_client_info').html('<div class="alert alert-success msg_alert" style="font-weight: 600;">Thank you for Submit Your Details.</div>');
          setTimeout(closepanel, 1000);
        }else{
          // Error
          $('#msginfo_client_info').html('<div class="alert alert-danger msg_alert" style="font-weight: 600;">Error: Form Submission</div>');
        }
        $('#save_client_info').css("opacity","");
        $(".submitBtnnn").removeAttr("disabled");
      }
    });
  });

$("#save_lead_modal").on('submit', function(e){
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: base_url+'save_lead_modal',
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData:false,
        beforeSend: function(){
          $('.submitBtnnn').attr("disabled","disabled");
          $('#save_lead_modal').css("opacity",".5");
        },
        success: function(msg){ console.log(msg);
        if(msg == "true"){
          $('#save_lead_modal')[0].reset();
          $('#msginfo_client_info').html('<div class="alert alert-success msg_alert" style="font-weight: 600;">Thank you for Submit Your Details.</div>');
          setTimeout(closepanel, 1000);
        }else{
          // Error
          $('#msginfo_client_info').html('<div class="alert alert-danger msg_alert" style="font-weight: 600;">Error: Form Submission</div>');
        }
        $('#save_lead_modal').css("opacity","");
        $(".submitBtnnn").removeAttr("disabled");
      }
    });
  });

$("#save_business_review").on('submit', function(e){
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: base_url+'save_business_review',
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData:false,
        beforeSend: function(){
          $('.submitBtnnn3').attr("disabled","disabled");
          $('#save_business_review').css("opacity",".5");
        },
        success: function(msg){ console.log(msg);
        if(msg == "true"){
          $('#save_business_review')[0].reset();
          $('#review_msginfo').html('<div class="alert alert-success msg_alert" style="font-weight: 600;">Thank you for Submit Your Review.</div>');
          setTimeout(closepanel, 1000);
        }else{
          // Error
          $('#review_msginfo').html('<div class="alert alert-danger msg_alert" style="font-weight: 600;">Error: Review Submission</div>');
        }
        $('#save_business_review').css("opacity","");
        $(".submitBtnnn3").removeAttr("disabled");
      }
    });
  });

$("#save_product_lead").on('submit', function(e){
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: base_url+'save_product_lead',
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData:false,
        beforeSend: function(){
          $('.submitBtnnn').attr("disabled","disabled");
          $('#save_product_lead').css("opacity",".5");
        },
        success: function(msg){ console.log(msg);
        if(msg == "true"){
          $('#save_product_lead')[0].reset();
          $('#msginfo_client_info').html('<div class="alert alert-success msg_alert" style="font-weight: 600; background: green; color: #FFF; text-align: center; padding: 10px;">Thank you for Submit Your Details.</div>');
        }else{
          // Error
          $('#msginfo_client_info').html('<div class="alert alert-danger msg_alert" style="font-weight: 600;">Error: Form Submission</div>');
        }
        $('#save_product_lead').css("opacity","");
        $(".submitBtnnn").removeAttr("disabled");
      }
    });
  });

$("#save_client_info2").on('submit', function(e){
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: base_url+'save_client_info2',
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData:false,
        beforeSend: function(){
          $('.submitBtnnn2').attr("disabled","disabled");
          $('#save_client_info2').css("opacity",".5");
        },
        success: function(msg){ console.log(msg);
        if(msg != "false"){
          $('#save_client_info2')[0].reset();
          $('#msginfo_client_info2').html('<div class="alert alert-success msg_alert" style="font-weight: 600;">Thank you for Submit Your Details.</div>');
        }else{
          // Error
          $('#msginfo_client_info2').html('<div class="alert alert-danger msg_alert" style="font-weight: 600;">Error: Form Submission</div>');
        }
        $('#save_client_info2').css("opacity","");
        $(".submitBtnnn2").removeAttr("disabled");
      }
    });
  });

});