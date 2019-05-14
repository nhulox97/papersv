$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.avatar').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
});

function check_val()
{
 var bad_words=new Array("death","kill","murder");
 var check_text=document.getElementById("text").value;
 var error=0;
 for(var i=0;i<bad_words.length;i++)
 {
  var val=bad_words[i];
  if((check_text.toLowerCase()).indexOf(val.toString())>-1)
  {
   error=error+1;
  }
 }
	
 if(error>0)
 {
  document.getElementById("bad_notice").innerHTML="WARNING: Some Bad Words In Your Text";
 }
 else
 {
  document.getElementById("bad_notice").innerHTML="";
 }
}

