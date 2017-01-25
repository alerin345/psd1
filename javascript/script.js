function main() {
	galery();
}
function galery() {
var s = Math.floor(2303/document.body.offsetWidth);
for (var z=0;z<=s;z++)
{
	var li = document.createElement('li');
	document.querySelector('.nav').appendChild(li);
}
const circle = document.querySelector('.nav');
this.circle = circle.getElementsByTagName('li');
 
let that = this;
for(var i = 0; i < this.circle.length; i++) {
		var click = this.circle[i];
		click.name = i;
		click.addEventListener('click', function() {
			document.querySelector('.carousel').style.left = -1*this.name * ((2303-document.body.offsetWidth)/s) + "px" ;
		}, false);
	}

}
window.onload = main;
/*
width = 1903

460px * 5 = 2100px
0,21 * 1903
2303

Math.floor(2303/document.body.offsetWidth);

(2303-document.body.offsetWidth) = 400


2100/4


*/
