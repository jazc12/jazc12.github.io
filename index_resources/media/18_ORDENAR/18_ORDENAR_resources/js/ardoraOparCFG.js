//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
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
var wordsGame="MThfT1JERU5BUg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="18_ORDENAR_resources/media/";
var indexG=0;
var words1G=["TG9zIGVsZWZhbnRlcyBzb24gYW5pbWFsZXMgZmFzY2luYW50ZXMgeSBtYWplc3R1b3Nvcy4=","U29uIGxvcyBtYW3DrWZlcm9zIHRlcnJlc3RyZXMgbcOhcyBncmFuZGVzIHF1ZSBleGlzdGVuLiBUaWVuZW4gdW5hIGVzdHJ1Y3R1cmEgc29jaWFsIGNvbXBsZWphIHkgdW5hIG1lbW9yaWEgZXhjZXBjaW9uYWwu","TG9zIGVsZWZhbnRlcyBzb24gY29ub2NpZG9zIHBvciBzdSBpbnRlbGlnZW5jaWEsIHN1IGNhcGFjaWRhZCBkZSBjb211bmljYWNpw7NuIHkgc3UgaGFiaWxpZGFkIHBhcmEgdXRpbGl6YXIgaGVycmFtaWVudGFzLg==","TGFtZW50YWJsZW1lbnRlLCB0YW1iacOpbiBzZSBlbmZyZW50YW4gYSBhbWVuYXphcyBjb21vIGxhIGNhemEgZnVydGl2YSB5IGxhIHDDqXJkaWRhIGRlIGjDoWJpdGF0Lg=="];
var words2G=[];
var words3G=[];
var c1=[53,118,120,94];
var c2=[];
var c3=[];
