// JavaScript Document
$(document).ready( function(){
	var arregloDeObjetos=[];
	$("button#add-post").on("click", function(event){
		var postText = $("textarea#textoPost").val();
		postText=$.trim(postText);
		if(postText!=="")
		{
			arregloDeObjetos[arregloDeObjetos.length]={ 
				numero:arregloDeObjetos.length+1,
				contenido:postText};
			console.log(arregloDeObjetos);
			var html= $("section#Post").html();
			var miObjeto=arregloDeObjetos[arregloDeObjetos.length-1];
			$("section#Post").prepend('<section class="row" id="'+miObjeto.numero+'">'+
					'<section class="col-1"></section>'+
					'<section class="col-9 col-comment" align="justify">'+
					'<h2>'+'Post#'+miObjeto.numero+'</h2>'+	
					(miObjeto.contenido)+
					'</section>'+
					'<section class="col-1 col-comment" id="closeSection">'+
					'<button class="btn btn-outline-danger btn-sm" id="btn-borrar" data-numero="'+miObjeto.numero+'">×</button>'+
					'</section>'+
					'<section class="col-1"></section>'+
				'</section>'+
				'<br>');
			$("textarea#textoPost").val("");
			//$("button#btnCerrar").click();
			$("section#exampleModal").modal('hide');
		}
	});
	$("section#Post").on("click","button#btn-borrar", function(event){
		var numero=$(this).data("numero");
		if(confirm("Are you sure?"))
			$("section#"+numero+"").remove();
	});
});





































/*
function serializar()
{
	var text="";
	text = $('#myform').serializeJSON();
	if($('#chkAcept').is(':checked'))
	{
		if(text.txtUserName==""||text.txtPass==""||text.txtEmail=="")
			alert("Por favor, llene los campos obligatorios *");
		else
		{
			if(text.txtPass.length<8)
				alert("Contraseña muy corta.\nMinimo 8 Caracteres");
			else
			{
				if(text.txtPass==text.txtVPass)
				{
					console.log(text);
					alert("Gracias "+text.txtUserName+".");
				}
				else
					alert("Las contraseñas no coinciden.\nFavor de volver a intentarlo.")
			}
		}
	}
}*/