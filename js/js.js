


var x = document.getElementById('myAudio')
var elements = document.getElementsByClassName("child")
var card = document.getElementsByClassName('card')

for(var i = 0; i < elements.length; i++){
	elements[i].onclick = function(){
		x.play()
		pName = this.alt
		document.getElementById("myImage").src = "img/gif/"+pName+".gif";
	};
}

for(var a = 0; a < card.length; a++){
	card[a].onclick = function(){

		var el = card[0]
		console.log(el)
		while(el){
				if(el.tagName === "LI"){
					el.classList.remove("outline");
				}
				el = el.nextSibling;
		}
		this.classList.add('outline')
	}
}