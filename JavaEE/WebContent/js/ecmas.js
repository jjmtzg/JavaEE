// JavaScript Document
function miFuncion()
{
	var miVariable0="Soy una variable que varía";
	console.log(miVariable0);
	miVariable0=10;
	console.log(miVariable0);
}
function bucles()
{
	for(var i=0;i<10;i++)
		{
			console.error(i);
		}
	for(var i=10;i>0;i--)
		{
			console.warn(i);
		}
	var c=20;
	while(++c<30)
		{
			
			console.log(c);
		}
	do
		{
			console.error(c);
		}while(--c>0)
}
function operacionesAritmeticas()
{
	var op1=3,op2=10,res=0;
	console.log("Suma			"+(res=op1+op2));
	console.log("Resta			"+(res=op1-op2));
	console.log("Multiplicacion	"+(res=op1*op2));
	console.log("Division		"+(res=op1/op2));
	console.log("Modulo			"+(res=op1%op2));
	console.log("Exponencial	"+(res=(op1**2)));
	console.log("Raíz Cuadrada	"+(Math.sqrt(op2)));
	console.log("Logaritmo		"+(Math.log(op2)));
	console.log("Logaritmo		"+(Math.log(-op2)));
	console.log("Logaritmo		"+(Math.log(0)));
}
function operacionesLogicas()
{
	var a=true,b=false,c=0,d=3,e=-3;
	console.log("AND	"+a&&b);
	console.log("OR		"+a||b);
	if(e>c)
		console.log(e);
	else
		console.log(c);

}
function estructurasDecision()
{
	var opc=3;
	switch(opc)
		{
			
			case 0:
				console.log(opc);
				break;
			case 1:
				console.log(opc);
				break;
			case 2:
				console.log(opc);
				break;
			case 3:
				console.log(opc);
				break;
			case 4:
				console.log(opc);
				break;
			default :
				console.error(opc);
				break;
			
		}
}
function manejarDatos()
	{
		var arr=[5,1,3,7,8,0,9,4];
		console.log("inicializar valores");
		for(var i=0;i<arr.length;i++)
			{
				console.log(arr[i]);
			}
		console.log("Buscar datos en un arreglo y parar when found");
		var valorReferencia=10;
		for(var i=0;i<=arr.length;i++)
			{
				if(arr[i]!=valorReferencia)
					{
						continue;
					}/*
				else if(i<arr.length)
					{
						continue;
					}*/
				else
					{
						console.log("Valor encontrado	"+arr[i]+" En posicion	"+i);
						break;
					
					}
				console.log("valor no encontrado");
			}
		for(var e in arr)
			{
				console.log(arr[e]);
			}
	}
	var cad="Soy";
function alerts()
	{
		alert(cad);
	}
var persona=[{
		anana:{
		nombre:"Juan",
		edad:5,
		enfermo:false,
		estadoCivil:'S',
		colorDeOjos:"verde",
		}
		/*miFuncion: function(holo)
		{
			console.log("funcionInterna "+holo);
		}*/
	},{
		anita:{
		nombre:"Juanita",
		edad:50,
		enfermo:true,
		estadoCivil:'C',
		colorDeOjos:"cafe"}
	},{
		ana:{
		nombre:"Pedro",
		edad:20,
		enfermo:false,
		estadoCivil:'V',
		colorDeOjos:"cafe"}
	}];
function manejarObjeto()
	{
		for(var e in persona)
			{
				console.log(e);
				if(Object.keys(persona[e])=="anana")
				{
					console.warn(e);
					for(var f in persona[e])
						{
							console.log(f);
							for(var g in persona[e][f])
							{
								console.log(g+": "+(persona[e][f][g]));
							}
						}
					break;
				}
			}
		/*
		saludo="holiwi";
		a=7,b=5,r=a+b
		console.log(r)
		persona[0].miFuncion(saludo);]*/
	}