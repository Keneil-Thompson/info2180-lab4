function getText(){


  var xhr = new XMLHttpRequest();
  
  xhr.open('GET','superheroes.php',true)
  
  xhr.onload = function(){
    if (this.status == 200){
        /*console.log(this.responseText)*/
  
        alert(document.getElementById('resText').innerText = this.responseText)
    }
    
  }
  
  xhr.send()
  }

$(document).ready(function(){
  $('#search').keyup(function(){
      var name = $('#search').val();

      $.ajax({
        url: 'superheroes.php',
        type: 'post',
        data:{ajax: 1, name: name},
        success: function(result){
          ${'#result'}.text('name : ' + result);
        }

      });

  });

});
