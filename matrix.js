var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = screen.height + 500;
c.width = screen.width + 500;


var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
chinese = chinese.split("");

var japanese = "大男竹中虫町天田土二日入年白八百文木本名目立力林六"; japanese = japanese.split("");

var hex = "ABCDEFABCDEFABCDEFABCDEF"; hex = hex.split("");
var numbers = "012345678901234567890123456789"; numbers = numbers.split("");

var matrix_text = japanese.concat(hex).concat(numbers);

var font_size = 10;
var title_font_size = 45;
var columns = c.width/font_size;
var drops = [];
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

function draw(color)
{
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = color;
	ctx.font = font_size + "px arial";
	for(var i = 0; i < drops.length; i++)
	{
		var text = matrix_text[Math.floor(Math.random()*matrix_text.length)];
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		drops[i]++;
	}
}

setColor('green')

function drawgreen(){
	draw("#00ff00");
}

function drawpurple(){
	draw("#551a8b");
}

function drawwhite(){
	draw("white");
}

function drawred(){
	draw("red");
}

function draworange(){
	draw("orange");
}

function drawyellow(){
	draw("yellow");
}

function drawtomato(){
	draw('tomato')
}

function drawdeeppink(){
	draw("deeppink")
}
function drawblue(){
	draw("navy")
}

function drawmagenta(){
	draw("magenta")
}

function drawinvisible(){
	draw("#131313")
}

function setColor(color){
	clearInterval(setColor.intervalId);
	setColor.intervalId = setInterval(window["draw"+color], 33);
}
//green red yellow white blue magenta invisible