var cookies = document.querySelector(".policy");

function hide() {
    console.log("delete");
    cookies.remove();
}

var city = ["Burbank", "Chicago", "Dallas"]

function report(id) {
    console.log(city[id]);
    alert("Loading " + city[id] + "'s weather report...");
}

function convert(element) {
    if (element.value == "°F"){
        for(var i = 1; i < 9; i++){
        var degree = document.querySelector("#degree" + i).innerHTML
        document.querySelector("#degree" + i).innerHTML= fahrenheit(degree)+"°"
        }
        

    } else { 
        for(var i = 1; i < 9; i++){
        var degree = document.querySelector("#degree" + i).innerHTML
        document.querySelector("#degree" + i).innerHTML= celsius(degree)+"°"
        }
    }
}

function fahrenheit(degree){
    x = parseInt(degree)
    return Math.round(((x)*1.8)+32);

}

function celsius(degree) {
    x = parseInt(degree)
    return Math.round((x-32)/1.8);
}