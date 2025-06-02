function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fbEVSnE7TG":
        Script1();
        break;
      case "5uM5u9G3wCF":
        Script2();
        break;
      case "6S9P7jTrEee":
        Script3();
        break;
      case "6AApPGy9VB3":
        Script4();
        break;
      case "6WLxamwbpyG":
        Script5();
        break;
      case "5Z5Nl5oa8lj":
        Script6();
        break;
      case "5n46UjpJ8nI":
        Script7();
        break;
      case "5qtW0bcfhNq":
        Script8();
        break;
      case "6O7ehSIAFIt":
        Script9();
        break;
      case "64lQdKv1vH3":
        Script10();
        break;
      case "68ronrO9stK":
        Script11();
        break;
      case "6Iwd42WRyQv":
        Script12();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById("bgsong");
var status = localStorage.getItem("audioStatus");

if(audio){
    if(status === "off"){
        audio.volume = 0;
    } else {
        audio.volume = 1;
        audio.play();
    }
}

}

function Script2()
{
  var audio = document.getElementById("bgsong");
if(audio){
    audio.volume = 0;
    localStorage.setItem("audioStatus", "off");
}

}

function Script3()
{
  var audio = document.getElementById("bgsong");
if(audio){
    audio.volume = 0.1;
    localStorage.setItem("audioStatus", "on");
}

}

function Script4()
{
  var audio = document.getElementById("bgsong");
if(audio){
    audio.volume = 0.2; 
    localStorage.setItem("audioStatus", "on");
}

}

function Script5()
{
  var audio = document.getElementById("bgsong");
if(audio){
    audio.volume = 0.3; 
    localStorage.setItem("audioStatus", "on");
}

}

function Script6()
{
  var audio = document.getElementById("bgsong");
if(audio){
    audio.volume = 0.5; 
    localStorage.setItem("audioStatus", "on");
}

}

function Script7()
{
  var audio = document.getElementById("bgsong");
if(audio){
    audio.volume = 0.6; 
    localStorage.setItem("audioStatus", "on");
}

}

function Script8()
{
  var audio = document.getElementById("bgsong");
if(audio){
    audio.volume = 0.7; 
    localStorage.setItem("audioStatus", "on");
}

}

function Script9()
{
  var audio = document.getElementById("bgsong");
if(audio){
    audio.volume = 0.8; 
    localStorage.setItem("audioStatus", "on");
}

}

function Script10()
{
  var audio = document.getElementById("bgsong");
if(audio){
    audio.volume = 0.4; 
    localStorage.setItem("audioStatus", "on");
}

}

function Script11()
{
  var audio = document.getElementById("bgsong");
if(audio){
    audio.volume = 0.9; 
    localStorage.setItem("audioStatus", "on");
}

}

function Script12()
{
  var audio = document.getElementById("bgsong");
if(audio){
    audio.volume = 1.0; 
    localStorage.setItem("audioStatus", "on");
}

}

