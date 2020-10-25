document.addEventListener('load',loadPage());

function loadPage(){
    var limit = JSON.parse('{"Yotsubato": [48, 36],"Kobayashi": [15],"Values":["Yotsubato","Kobayashi"], "Titles":["Yotsubato!","Kobayashi-san Chi no Maid Dragon"]}');
    var titles = limit["Titles"];
    var values = limit["Values"];

    for(var i = 0; i < titles.length; i++){
        var y = document.createElement("BUTTON");
        y.setAttribute("type", "submit");
        y.setAttribute("name","manga");
        y.setAttribute("value", values[i]);
        y.innerHTML = titles[i];
        document.getElementById("title_select").appendChild(y);
    }
}