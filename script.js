//funcion request y comprobacion obtenida de w3 schools
//se guarda en la variable xhttp el request al archivo xml
var xhttp;
var xhttp = new XMLHttpRequest(); 

//se comprueba que el archivo .xml existe y que no devuelve errores
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        pinto(this);  //si todo es correcto se lanza la funcion pinto. 
    }
};

//se hace un GET request para coger el xml para poderlo procesar
xhttp.open("GET", "questions.xml", true);
xhttp.send();


//funcion para pintar el contenido del xml en el index.html
function pinto(xml) {
	
    var x, i, j, k, y, txt, xmlDoc, btn; 
    xmlDoc = xml.responseXML;
    txt = "";
	x = xmlDoc.getElementsByTagName("question");
	//pintamos mientras haya preguntas
    for (i = 0; i < x.length; i++) { 
	
		
		txt += "<br><br><div class=divpregunta>" + x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "<br>";
		
		var tipodeinput = x[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;
		
		var hayOptions = x[i].getElementsByTagName("option").length;
		var hayAnswers = x[i].getElementsByTagName("answer").length;
		
	    if (hayOptions >= 1 && tipodeinput == "select"){
			txt += "<select id=select"+[i]+">";
			for (j = 0; j < hayOptions; j++){
				txt += "<option>" + x[i].getElementsByTagName("option")[j].childNodes[0].nodeValue + "</option>";
			}
			txt += "</select>" + "<br>";
			txt += "</div>";
		}
		
		else if(hayOptions >= 1 && tipodeinput == "multiple"){
			txt += "<select id=selectmultiple"+[i]+">";
			for (j = 0; j < (hayOptions/2); j++){

				txt += "<option>" + x[i].getElementsByTagName("option")[j].childNodes[0].nodeValue + "</option>";
			}
			txt += "</select>";

			txt += "<select id=selectmultiplesegunda"+[i]+">";
			for (j = (hayOptions/2); j < hayOptions; j++){
				
				txt += "<option>" + x[i].getElementsByTagName("option")[j].childNodes[0].nodeValue + "</option>";
				
			}
			txt += "</select>" + "<br>";
			txt += "</div>";
		}
		
		else if(hayOptions >= 1){
			for (j = 0; j < hayOptions; j++){
				if(tipodeinput == "radio"){
				txt += "<input type=radio id=radiopregunta"+[i]+"respuesta"+[j]+" name=radio"+[i]+">";
				txt += x[i].getElementsByTagName("option")[j].childNodes[0].nodeValue + "<br>";
				}
				else if(tipodeinput == "checkbox"){
				txt += "<input type=checkbox id=checkpregunta"+[i]+"respuesta"+[j]+">";
				txt += x[i].getElementsByTagName("option")[j].childNodes[0].nodeValue + "<br>";
				}
			}
			txt += "</div>";
		}
		
		else if (tipodeinput == "text"){
		txt += "<input type=text id=pregunta"+[i]+">" + "<br>";
		txt += "</div>";
		}
		
		else if(tipodeinput == "number"){
		txt += "<input type=number id=pregunta"+[i]+">";
		txt += "</div>";
		}
		
		
		for (var m = 0; m < hayAnswers; m++){
			txt += "<p class=myP style=display:none id=respuesta"+[m]+"depregunta"+[i]+">";
			txt += "Respuesta correcta: "+x[i].getElementsByTagName("answer")[m].childNodes[0].nodeValue;
			txt += "</p>";
		}
		
    }    
	
    document.getElementById("pintoform").innerHTML = txt;

}



function corregir() {
	var correctas = 0;
	
	var usuarioRespuesta0 = document.getElementById("pregunta0").value;
	
	var e1 = document.getElementById("select1");
	var usuarioRespuesta1 = e1.options[e1.selectedIndex].text;
	
	var e2 = document.getElementById("selectmultiple2");
	var usuarioRespuesta2 = e2.options[e2.selectedIndex].text;
	
	var e3 = document.getElementById("selectmultiplesegunda2");
	var usuarioRespuesta3 = e3.options[e3.selectedIndex].text;
	
	
	var usuarioRespuesta4 = document.getElementById("checkpregunta3respuesta0");
	var usuarioRespuestaMal4 = document.getElementById("checkpregunta3respuesta1");
	
	
	var usuarioRespuesta5 = document.getElementById("checkpregunta3respuesta2");
	var usuarioRespuestaMal5 = document.getElementById("checkpregunta3respuesta3");
	
	var usuarioRespuesta6 = document.getElementById("radiopregunta4respuesta1");
	
	var usuarioRespuesta7 = document.getElementById("pregunta5");
	
	var e8 = document.getElementById("select6");
	var usuarioRespuesta8 = e8.options[e8.selectedIndex].text;
	
	var usuarioRespuesta9 = document.getElementById("pregunta7").value;
	
	var usuarioRespuesta10 = document.getElementById("radiopregunta8respuesta3");
	
	var e11 = document.getElementById("select9");
	var usuarioRespuesta11 = e11.options[e11.selectedIndex].text;
	
	if (usuarioRespuesta0 == "Bird" || usuarioRespuesta0 == "bird" ){
		document.getElementById("respuesta0depregunta0").style.backgroundColor = 'green';
		correctas++;
	}

	
	if (usuarioRespuesta1 == "Na" ){
		document.getElementById("respuesta0depregunta1").style.backgroundColor = 'green';
		correctas++;
	}
	
	if (usuarioRespuesta2 == "la mancha" ){
		document.getElementById("respuesta0depregunta2").style.backgroundColor = 'green';
		correctas++;
	}
	
	if (usuarioRespuesta3 == "de cuyo nombre no puedo acordarme" ){
		document.getElementById("respuesta1depregunta2").style.backgroundColor = 'green';
		correctas++;
	}
	
	if (usuarioRespuesta4.checked){
		document.getElementById("respuesta0depregunta3").style.backgroundColor = 'green';
		correctas++;
	}
	
	if (usuarioRespuesta5.checked){
		document.getElementById("respuesta1depregunta3").style.backgroundColor = 'green';
		correctas++;
	}
	
	if (usuarioRespuestaMal4.checked){
		correctas--;
	}
	
	if (usuarioRespuestaMal5.checked){
		correctas--;
	}
	
	if(usuarioRespuesta6.checked){
		document.getElementById("respuesta0depregunta4").style.backgroundColor = 'green';
		correctas++;
	}
	
	if(usuarioRespuesta7.value == "1914"){
			document.getElementById("respuesta0depregunta5").style.backgroundColor = 'green';
		correctas++
	}
	
	if (usuarioRespuesta8 == "G" ){
			document.getElementById("respuesta0depregunta6").style.backgroundColor = 'green';
		correctas++;
	}
	
	if (usuarioRespuesta9 == "#FF0000" || usuarioRespuesta9 == "#ff0000" ){
		document.getElementById("respuesta0depregunta7").style.backgroundColor = 'green';
		correctas++;
	}
	
	if(usuarioRespuesta10.checked){
			document.getElementById("respuesta0depregunta8").style.backgroundColor = 'green';
		correctas++;
	}
	
	if(usuarioRespuesta11 == "8848m"){
		document.getElementById("respuesta0depregunta9").style.backgroundColor = 'green';
		correctas++;
	}
	
	
	
	alert("Respuestas correctas: "+correctas+" de 12\nLas respuestas correctas se muestran en verde.\nLas incorrectas en rojo y se muestra la respuesta que debería haber sido.");
	
	for (var a=0; a < document.getElementsByClassName("myP").length; a++){
		 if (document.getElementsByClassName("myP")[a].style.display === 'none') {
             document.getElementsByClassName("myP")[a].style.display = 'block';
            } 
	}
	
}