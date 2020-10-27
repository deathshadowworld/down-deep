document.addEventListener('load',loadPage());
var link = document.createElement('link');
link.rel = "stylesheet";
link.href = "styles.css";
document.head.appendChild(link);

function loadPage(){
    var titles = data["Titles"];
    var values = data["Values"];

    var form = document.createElement('form');
    form.id = "title_select";
    form.action = "chapter.html";
    form.method = "GET";
    document.body.appendChild(form);

    for(var i = 0; i < titles.length; i++){
        var y = document.createElement("BUTTON");
        y.setAttribute("type", "submit");
        y.setAttribute("name","manga");
        y.setAttribute("value", values[i]);
        y.innerHTML = titles[i];
        document.getElementById("title_select").appendChild(y);
    }
}
