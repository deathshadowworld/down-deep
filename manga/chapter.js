document.addEventListener('load',loadPage());
var link = document.createElement('link');
link.rel = "stylesheet";
link.href = "styles.css";
document.head.appendChild(link);

function loadPage(){
    //extract query
    var name = window.location.search.replace("?manga=","");
    var pages = data[name];

    for(var i = 0; i < pages.length; i++){
        var id = i.toString();
        var x = document.createElement("FORM");
        x.setAttribute("action", "manga.html");
        x.setAttribute("method", "GET");
        x.setAttribute("id",id);
        document.body.appendChild(x);

        var y = document.createElement("INPUT");
        y.setAttribute("type", "hidden");
        y.setAttribute("name","manga");
        y.setAttribute("value", name);
        document.getElementById(id).appendChild(y);  

        var y = document.createElement("INPUT");
        y.setAttribute("type", "hidden");
        y.setAttribute("name","page");
        y.setAttribute("value", pages[i]);
        document.getElementById(id).appendChild(y);

        var chap = i+1;
        chap = chap.toString();
        var y = document.createElement("BUTTON");
        y.setAttribute("type", "submit");
        y.setAttribute("name","Chapter");
        y.setAttribute("value", chap);
        y.innerHTML = "Chapter " + chap;
        document.getElementById(id).appendChild(y);
    }
}
