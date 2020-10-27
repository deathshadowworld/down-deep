/* <head>
    <link rel="stylesheet" href="../css/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Free Low-Quality content">
    <meta name="keywords" content="Visual Novel">
    <meta name="author" content="deathshadowworld">
    <meta charset="UTF-8">
    <title>Firehub Link</title>
    <link rel="icon" href="../css/bg/bonfire.gif">
</head>


<body>
<header>
    <h1 class="mega">Hi</h1>
    <p style="text-align: center; margin-top: 30px; color: white;">Welcome to the Hub of many things that I may or may not be interested with.</p>
</header>*/

var link = document.createElement('link');
link.rel = "stylesheet";
link.href = "../css/styles.css";
document.head.appendChild(link);
var link = document.createElement('link');
link.rel = "icon";
link.href = "../css/bg/bonfire.gif";
document.head.appendChild(link);

var meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(meta);
var meta = document.createElement('meta');
meta.name = "description";
meta.content = "Free Low-Quality content";
document.head.appendChild(meta);
var meta = document.createElement('meta');
meta.name = "keywords";
meta.content = "General Web";
document.head.appendChild(meta);
var meta = document.createElement('meta');
meta.name = "author";
meta.content = "deathshadowworld";
document.head.appendChild(meta);
var meta = document.createElement('meta');
meta.charset = "UTF-8";
document.head.appendChild(meta);
var title = document.createElement('title');
title.innerHTML = "Hydrangea Opus";
document.head.appendChild(title);

var header = document.createElement('header');
header.id = "header";
document.body.appendChild(header);

var h1 = document.createElement('H1');
h1.className = "mega";
h1.innerHTML = "Hi";
document.getElementById('header').appendChild(h1);
var h1 = document.createElement('P');
h1.className = "desc";
h1.innerHTML = "Welcome to the world hub.";
document.getElementById('header').appendChild(h1);