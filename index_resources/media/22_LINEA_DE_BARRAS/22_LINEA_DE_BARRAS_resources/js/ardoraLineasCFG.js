//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime="SE TERMINO TU TIEMPO"; messageError="FALLO"; messageErrorG="FALLO"; messageAttempts="INTENTE  NUEVAMENTE"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MjJfTElORUFfREVfQkFSUkFT"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var graph;var axes;var dPoints=[];var dPointsState=[];var stateMouse=-1;var mouseX=0;var mouseY=0;
var yStep=200;var xPadding=0;var yPadding = 30;var hFont=10;var iniAxe=1000;
var yStepDiv=10;
var maxY=2000;
var c1=["MTA1MA==","MTgwMA==","MTYwMA==","MTMwMA==","MTIwMA==","MTAwMA==","MTYwMA==","MTgwMA==","MTMwMA=="];
var data={ values:[{X:"PERRO",Y:1000},{X:"CONEJO",Y:1000},{X:"VACA",Y:1000},{X:"LEON",Y:1000},{X:"GATO",Y:1000},{X:"SAPO",Y:1000},{X:"ELEFANTE",Y:1000},{X:"ALPACA",Y:1000},{X:"CERDO",Y:1000},]};
var selectedG=0;
