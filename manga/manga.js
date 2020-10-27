var formatName = ".jpg", pageLimit, path;

document.addEventListener('load',loadPage());

function loadPage(){
    var n = window.location.search.replace("?","");
    var data = n.split("&");
    path = data[0].replace("manga=","") + "/" + data[2].replace("=","_") + "/";
    //document.getElementById("write").innerHTML = path;
    pageLimit = parseInt(data[1].replace("page=",""));
    var x = document.getElementById('page');
    var option;
    for(i = 1; i < pageLimit + 1; i++){
        option = document.createElement('option');
        option.text = "Page " + i.toString();
        option.value = i.toString();
        x.add(option);
    }
    document.getElementById("image").src = path + "1.jpg"
    document.getElementById('manga_name').innerHTML = data[0].replace("manga=","");
}

function nextButton(){
    var x = document.getElementById("image").getAttribute("src");
    y = parseInt(x.replace(formatName,"").replace(path,""));
    if (y != pageLimit){
        y++;
        y = path + y.toString() + formatName;
        document.getElementById("image").src = y;
        changeSelect();
    } else alert("End of Chapter");
}

function prevButton(){
    var x = document.getElementById("image").getAttribute("src");
    y = parseInt(x.replace(formatName,"").replace(path,""));
    if (y != 1){
        y--;
        y = path + y.toString() + formatName;
        document.getElementById("image").src = y;
        changeSelect();
    } else alert("Start of Chapter");
}

function pageSelect(){
    document.getElementById("page").onchange = function(){
        var x = document.getElementById("page").value;
        document.getElementById("image").src = path + x + formatName;
        changeSelect();
    };
}
function changeSelect(){
    var x = document.getElementById("image").getAttribute("src");
    y = x.replace(formatName,"").replace(path,"");
    document.getElementById("page").value = y;
    document.getElementById('image').scrollIntoView();
}
