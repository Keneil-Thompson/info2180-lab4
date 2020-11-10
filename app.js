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