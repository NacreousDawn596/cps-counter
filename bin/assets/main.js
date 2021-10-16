/*by NacreousDawn596*/

var time = 0;

var click = 0;

function daclick() {
    click++
    document.getElementById("clicks").innerHTML = "clicks: " + click
}

function start(){
document.getElementById("daclick").setAttribute('onclick','daclick();')
document.getElementById("daclick").innerHTML = "click faster!!!"
document.getElementById("daclick").id = "clicked";
document.getElementById("data").style.display = "block";
var myfunc = setInterval(function() {
    time++
    try{
       var sec = document.getElementById('bruh').value;
    }catch (error){

    }
    document.getElementById("time").innerHTML = 'time: ' + time + "s"
    if (time == sec) {
    	document.getElementById("beforeclick").style.display = "none";
    	document.getElementById("body").style.background = '100% 100% url("./assets/img/afterclick.jpg") fixed no-repeat'
    	document.getElementById("body").style.backgroundSize = "cover";
    	document.getElementById("body").style.backgroundPosition = "center";
        document.getElementById("afterclick").style.display = "block";
        var cps = click/time + "     ";
        var cps = cps.slice(0, 4)
        document.getElementById("result").innerHTML = cps + "cps"
    }
    }, 1000)
}

var func = setInterval(function() {
    var cps = click/time;
    try{
    document.getElementById("clickperseconds").innerHTML = "clicks/second: " + cps + "cps"
    }catch (error){
        
    }
    }, 200)
    
/*after click*/

function retry(){
	location.reload();
}
