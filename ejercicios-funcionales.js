//La empresa de abarrotes doña Julia tiene una lista de productos donde almacena 
//(0) la clave del producto, (1) su descripción, (2) precio, (3)clasificación, (4)cantidad de existencia, (5)existencia mínima y (6)máxima. 
//Doña Julia requiere generar varios reportes:

//1) Número de productos con existencia mayor a 20.
//2) Número de productos con existencia menos a 15.
//3) Lista de productos con la misma clasificación y precio mayor 15.50
//4) Lista de productos con precio mayor a 20.30 y menor a 45.00
//5) Número de productos agrupados por su clasificación

//Cree un DAO para cargar la información de un archivo con 80 productos como mínimo.
const fs = require('fs'); 

let DAO = function(input){
	let buffer=input.split("\n");
	this.data=[];
	for(let i=0;i<buffer.length;i++){
		this.data[i]=buffer[i].split(",");
	}
	//console.log(this.data[0][0].toString());
}

fs.readFile('DATOS2.DAT', (err, data) => { 
	if (err) {
		console.log("Archivo no existente");
	} else{
		let dataDAO = new DAO(data.toString());
		console.log("1---- Número de productos con existencia mayor a 20.\n");
		findMoreThanExistence(20,dataDAO);
		console.log("\n\n2--- Número de productos con existencia menos a 15.\n");
		findLessThanExistence(15,dataDAO);
		console.log("\n\n3--- Lista de productos con la misma clasificación y precio mayor 15.50\n");
		findSameCatHigherThanPrice(2,15.50,dataDAO);
		console.log("\n\n4--- Lista de productos con precio mayor a 20.30 y menor a 45.00\n");
		findPriceBetween(20.30,45,dataDAO);
		console.log("\n\n5--- Número de productos agrupados por su clasificación\n");
		countByCat(5,dataDAO);
	}		
});

findMoreThanExistence = (min=0,dao)=>{
	console.log("ID, DESCRIPCION, PRECIO, CLASIFICACION, CANTIDAD EN EXISTENCIA, EXISTENCIA MINIMA, EXISTENCIA MAXIMA\n");
	for (let i=0;i<dao.data.length;i++){
		if(parseInt(dao.data[i][4])>min){
			console.log(dao.data[i].toString());
		}
	}
}

findLessThanExistence = (max=0, dao)=>{
	console.log("ID, DESCRIPCION, PRECIO, CLASIFICACION, CANTIDAD EN EXISTENCIA, EXISTENCIA MINIMA, EXISTENCIA MAXIMA\n");
	for (let i=0;i<dao.data.length;i++){
		if(parseInt(dao.data[i][4])<max){
			console.log(dao.data[i].toString());
		}
	}
}

findSameCatHigherThanPrice = (cat,price,dao) =>{
	console.log("ID, DESCRIPCION, PRECIO, CLASIFICACION, CANTIDAD EN EXISTENCIA, EXISTENCIA MINIMA, EXISTENCIA MAXIMA\n");
	for (let i = 0; i<dao.data.length; i++){
		if(dao.data[i][3]==cat && parseFloat(dao.data[i][2])>=15.50){
			console.log(dao.data[i].toString());
		}
	}
}

findPriceBetween = (min, max, dao)=>{
	console.log("ID, DESCRIPCION, PRECIO, CLASIFICACION, CANTIDAD EN EXISTENCIA, EXISTENCIA MINIMA, EXISTENCIA MAXIMA\n");
	for (let i = 0; i<dao.data.length; i++){
		if(parseFloat(dao.data[i][2])>=min && parseFloat(dao.data[1][2])<=max){
			console.log(dao.data[i].toString());
		}
	}
}

countByCat = (cat, dao)=>{
	console.log("ID, DESCRIPCION, PRECIO, CLASIFICACION, CANTIDAD EN EXISTENCIA, EXISTENCIA MINIMA, EXISTENCIA MAXIMA\n");
	for(let i=0; i<dao.data.length; i++){
		if(dao.data[i][3]==cat){
			console.log(dao.data[i].toString());
		}
	}
}
