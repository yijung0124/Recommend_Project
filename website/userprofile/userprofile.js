$(function(){$("#RestaurantName").keyup(function(e){if(e.keyCode==13){ajax();}});$("#button").click(function(){ajax();});
function ajax(){var val=$("#RestaurantName").val(),buttonmsg='search';
$.ajax({type:"GET",url:"userprofilemain.php",data:{RestaurantName:val}
	,beforeSend:function(){$("#button").attr("disabled",true),$("#msg").hide(),$("#button").html("Searching.....");}
	,success:function(a){$("button").attr("disabled",false),$("#button").html(buttonmsg),$("#msg").slideDown(),$("#msg").html(a);}
	,error:function(a){$("button").attr("disabled",false),$("#button").html(buttonmsg),alert("Failed");}});}});
function logout(){
	$.ajax({
           type: "POST",
           data:{action:'call_this'},
           success:function(html) {
           }

      });
}