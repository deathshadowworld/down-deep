var ul = document.createElement('ul');
ul.className = "navi";
ul.id = "navi";
document.body.appendChild(ul);

var link = data["link"];
var text = data["text"];
var len = link.length;

for(var i = 0;i<len;i++){
    var li = document.createElement('li');
    li.className = "lilink";
    li.id = i.toString();
    var a = document.createElement('a');
    a.href = link[i];
    a.text = text[i];
    document.getElementById('navi').appendChild(li);
    document.getElementById(li.id).appendChild(a);
}