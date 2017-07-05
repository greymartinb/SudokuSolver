// model variables 
var totalModel=[];

 var rowArray= [[], [], [], [], [], [], [], [], []];
 var rowRelated = [[],[],[],[],[],[],[],[],[]];
 var rowOne= [];
 var rowTwo = [];
 var rowThree= [];
 var rowThree=[];
 var rowFour=[];
 var rowFive=[];
 var rowSix=[];
 var rowSeven=[];
 var rowEight= [];
 var rowNine= [];

 var colArray=[[], [], [], [], [], [], [], [], []];
 var colRelated = [[],[],[],[],[],[],[],[],[]];
 var colOne= [];
 var colTwo = [];
 var colThree= [];
 var colThree=[];
 var colFour=[];
 var colFive=[];
 var colSix=[];
 var colSeven=[];
 var colEight= [];
 var colNine= [];
 

 var setArray=[[], [], [], [], [], [], [], [], []];
 var setRelated = [[],[],[],[],[],[],[],[],[]];
 var setNumber=0;
 var setOne=[];
 var setTwo=[];
 var setThree=[];
 var setFour=[];
 var setFive=[];
 var setSix=[];
 var setSeven=[];
 var setEight=[];
 var setNine=[];

 var potentialAnswers= [];

 var potentialReference=[];


$(".submit").click(function(){
	var test= document.getElementsByTagName("input")[0].value;

		for( var i = 0; i<81; i++){
			var entry= parseInt(document.getElementsByTagName("input")[i].value);

				entry = 0;
				if (i<9){
				rowOne.push(entry);
				potentialReference[i] = [0];
				rowRelated[0].push(i);
				}
				else if (i<18){
				rowTwo.push(entry);
				potentialReference[i] = [1];
				rowRelated[1].push(i);
				}
				else if (i<27){
				rowThree.push(entry);
				potentialReference[i] = [2];
				rowRelated[2].push(i);
				}
				else if (i<36){
				rowFour.push(entry);
				potentialReference[i] = [3];
				rowRelated[3].push(i);
				}
				else if (i<45){
				rowFive.push(entry);
				potentialReference[i] = [4];
				rowRelated[4].push(i);
				}
				else if (i<54){
				rowSix.push(entry);
				potentialReference[i] = [5];
				rowRelated[5].push(i);
				}
				else if (i<63){
				rowSeven.push(entry);
				potentialReference[i] = [6];
				rowRelated[6].push(i);
				}
				else if (i<72){
				rowEight.push(entry);
				potentialReference[i] = [7];
				rowRelated[7].push(i);
				}
				else if (i<81){
				rowNine.push(entry);
				potentialReference[i] = [8];
				rowRelated[8].push(i);
				}
				else {
					console.log("error in entry");
				}
		} 
			
	}

);

$(".submit").click(function(){
	for (var u =0; u<81; u++ ){
		totalModel.push(parseInt(document.getElementsByTagName("input")[u].value));
	}
	console.log("total: ");
	console.log(totalModel);
});

$(".submit").click(function(){
	for( var y=0; y<9; y++){
		for (var t = 0; t<81; t = t+9){
			var position= (t+y);
			if (y === 0){
				colOne.push(parseInt(document.getElementsByTagName("input")[position].value));
				potentialReference[position].push(0);
				colRelated[0].push(position);
			}
			else if (y === 1){
				colTwo.push(parseInt(document.getElementsByTagName("input")[position].value));
				potentialReference[position].push(1);
				colRelated[1].push(position);
			}
			else if (y === 2){
				colThree.push(parseInt(document.getElementsByTagName("input")[position].value));
				potentialReference[position].push(2);
				colRelated[2].push(position);			
			}
			else if (y === 3){
				colFour.push(parseInt(document.getElementsByTagName("input")[position].value));
				potentialReference[position].push(3);
				colRelated[3].push(position);		
			}
			else if (y === 4){
				colFive.push(parseInt(document.getElementsByTagName("input")[position].value));
				potentialReference[position].push(4);
				colRelated[4].push(position);			
			}
			else if (y === 5){
				colSix.push(parseInt(document.getElementsByTagName("input")[position].value));
				potentialReference[position].push(5);
				colRelated[5].push(position);				
			}
			else if (y === 6){
				colSeven.push(parseInt(document.getElementsByTagName("input")[position].value));
				potentialReference[position].push(6);
				colRelated[6].push(position);			
			}
			else if (y === 7){
				colEight.push(parseInt(document.getElementsByTagName("input")[position].value));
				potentialReference[position].push(7);
				colRelated[7].push(position);				
			}
			else if (y === 8){
				colNine.push(parseInt(document.getElementsByTagName("input")[position].value));
				potentialReference[position].push(8);
				colRelated[8].push(position);			
			}
		}
	};
	console.log("columnOne: " + colOne);
});

$(".submit").click(function(){

	rowArray[0] = rowOne;
	rowArray[1] = rowTwo;
	rowArray[2] = rowThree;
	rowArray[3] = rowFour;
	rowArray[4] = rowFive;
	rowArray[5] = rowSix;
	rowArray[6] = rowSeven;
	rowArray[7] = rowEight;
	rowArray[8] = rowNine;

	colArray[0] = colOne;
	colArray[1] = colTwo;
	colArray[2] = colThree;
	colArray[3] = colFour;
	colArray[4] = colFive;
	colArray[5] = colSix;
	colArray[6] = colSeven;
	colArray[7] = colEight;
	colArray[8] = colNine;

	console.log("colArray", colArray);
	console.log(rowArray);
});

$(".submit").click(function(){
	var position=0;
	var horizontalNumber= 0;
	var verticalNumber= 0;
		// selects which set (1-9) to enter # into 	MIGHT NEED 9 for LOOP
	for (var c= 0; c<81; c= c+9){
		// console.log("vert move");
 		if (c >= 0 && c < 27){
 			verticalNumber= 0
 		}
 		else if (c >=27 && c < 54){
 			verticalNumber = 3
 		}
 		else if (c >=54){
 			verticalNumber =6
 		}
		for (var b=0; b<7; b= b+3){
			// console.log("horizontal move");
			if (b >= 0 && b<3 ){
				horizontalNumber= 0
			}
			else if (b >= 3 && b<6 ) {
				horizontalNumber= 1
			}
			else if (b>=6){
					horizontalNumber = 2
			}
			// selects horizontal start

 				// selects vertical start
 			for(var d=0; d<3; d++){
 				//colects 3 numbers horizontal from start postion
 				setNumber= verticalNumber + horizontalNumber;
 				position= (b+c+d);
 				setArray[setNumber].push(parseInt(document.getElementsByTagName("input")[position].value));
 				potentialReference[position].push(setNumber);
 				setRelated[setNumber].push(position);

 			}
 		}	
 	}
});


$(".submit").click(function(){
	for (var u=0; u<81; u++){
		if (totalModel[u] !== 0){
			potentialAnswers[u] = [parseInt(totalModel[u])]
		}
		else{
			potentialAnswers[u]= [1,2,3,4,5,6,7,8,9];
		}
	}
	console.log(potentialAnswers);
	console.log(potentialReference);
	console.log(rowRelated)
	console.log(colRelated)
	console.log(setRelated)


});

$(".sumbit").click(function(){

	for( var i=0; i<81; i++){
		for(var y = 0 ; y< 9; y++){
			for (var x=0; x<3; x++){
				if (potentialAnswers[i].length !== 1){
					if (x===0){
						if (potentialAnswers[i].indexOf(rowArray[potentialReference[i][0]][y]) > -1 ){
							var exists = rowArray[potentialReference[i][0]][y];
							var existsWhere= potentialAnswers[i].indexOf(exists);
							potentialAnswers[i].splice(existsWhere, 1);
						}
					}
					else if ( x === 1){
						 if(potentialAnswers[i].indexOf(colArray[potentialReference[i][1]][y]) > -1 ){
							var exists = colArray[potentialReference[i][1]][y];
							var existsWhere= potentialAnswers[i].indexOf(exists);
							potentialAnswers[i].splice(existsWhere, 1);
						}
					}
					else if(x===2){
						if(potentialAnswers[i].indexOf(setArray[potentialReference[i][2]][y]) > -1 ){
							var exists = setArray[potentialReference[i][2]][y];
							var existsWhere= potentialAnswers[i].indexOf(exists);
							potentialAnswers[i].splice(existsWhere, 1);
						}
					}
				}
			}
		}
	}
	console.log(potentialAnswers);
});

var rowHolder= [];
var colHolder= [];
var setHolder= [];
var filled = [];
var macro= 0;
$(".createAnswer").click(function(){
	while (filled.length< 81 && macro < 50 ){
		macro++;
	for(var i = 0 ; i<81; i++){
		console.log("first", i, "set", potentialAnswers[i])
		if(potentialAnswers[i].length === 1 && filled.indexOf(i) === -1){
			console.log("filled : " + potentialAnswers[i][0] + " at " + i);
			$('#'+i ).attr('value', potentialAnswers[i][0]);
			filled.push(i);

			for (var u= 0; u<81; u++){
				for (var d = 0;  d<3; d++){
					if (potentialReference[i][d] === potentialReference[u][d] && u !== i){
						if(potentialAnswers[u].indexOf(parseInt(potentialAnswers[i][0])) > -1){
							var existsWhere = potentialAnswers[u].indexOf(potentialAnswers[i][0]);
							potentialAnswers[u].splice(existsWhere,1);
							
							console.log(" cut : cell ", u , "is now ", potentialAnswers[u], "because", i, "is", potentialAnswers[i]);
						}
					}
				}
			}
			console.log(i)
			console.log("==========================");
		// } else if (potentialAnswers[i]=  []){
		// 	potentialAnswers[i]=[1,2,3,4,5,6,7,8,9]
		}
		else {
			rowHolder= potentialAnswers[i].slice();
			colHolder= potentialAnswers[i].slice();
			setHolder= potentialAnswers[i].slice();
				for (var d = 0;  d<3; d++){
						if (d === 0 ){
							console.log("set rowholder as", potentialAnswers[i], " & ", rowHolder,' at ', i)
							var counter= 0;
							for(var y = 0; y<9; y++){
								var comparedCell = rowRelated[potentialReference[i][0]][y];
								if (i !== comparedCell){
									counter++
									// console.log("counter ", counter)
									
									for( var w = 0; w<potentialAnswers[comparedCell].length; w++){
										if (rowHolder.indexOf(parseInt(potentialAnswers[comparedCell][w])) !== -1 ){
											console.log("removed row  cell", potentialAnswers[comparedCell][w],  "from", i, "leaving", rowHolder, counter ,"because", comparedCell, "contains", potentialAnswers[comparedCell] );
											rowHolder.splice(parseInt(rowHolder.indexOf(potentialAnswers[comparedCell][w])), 1);
											if ( counter === 8 && rowHolder.length === 1 && w === (potentialAnswers[comparedCell].length-1)){
												potentialAnswers[i] = rowHolder.slice();
												console.log("changed row ", i, " to ", rowHolder, potentialAnswers[i])
											}
										}
										else if ( counter === 8 && rowHolder.length === 1 && w === (potentialAnswers[comparedCell].length-1)){
												potentialAnswers[i] = rowHolder.slice();
												console.log("changed row ", i, " to ", rowHolder, potentialAnswers[i])
											}
									}
								}
							}
						}
						else if (d === 1 && potentialAnswers[i].length !== 1){
							console.log("set colHolder as", potentialAnswers[i], " & ", colHolder,' at ', i);
							var counter= 0;
							for(var y = 0; y<9; y++){
								var comparedCell = colRelated[potentialReference[i][1]][y];
								if (i !== comparedCell){
									counter++
									// console.log("counter", counter)

									for ( var w = 0; w<potentialAnswers[comparedCell].length; w++){
										
										if (colHolder.indexOf(parseInt(potentialAnswers[comparedCell][w])) !== -1 ){
											console.log("removed  col cell", potentialAnswers[comparedCell][w], "by extracting from", colHolder.indexOf(potentialAnswers[comparedCell][w])," to ",colHolder.indexOf(potentialAnswers[comparedCell][w])+1, "from", i, "leaving", colHolder, counter, "because of", comparedCell);
											colHolder.splice(parseInt(colHolder.indexOf(potentialAnswers[comparedCell][w])), 1);
											if ( counter === 8 && colHolder.length === 1  && w === (potentialAnswers[comparedCell].length-1)){
												potentialAnswers[i] = colHolder.slice();
												console.log("changed col ", i, " to ", colHolder, potentialAnswers[i])
											}

										}
										else if ( counter === 8 && colHolder.length === 1 && w === (potentialAnswers[comparedCell].length-1)){
											potentialAnswers[i] = colHolder.slice();
											console.log("changed col ", i, " to ", colHolder, potentialAnswers[i])
										}
										
									}
								}
							}
						}
						else if (d === 2 && potentialAnswers[i].length !== 1 ){	
							console.log("set setHolder as", potentialAnswers[i], " & ", setHolder,' at ', i)
							var counter=0;
							for(var y = 0; y<9; y++){
								var comparedCell = setRelated[potentialReference[i][2]][y];
								if (i !== comparedCell){
									counter++

									for ( var w = 0; w<potentialAnswers[comparedCell].length; w++){
										
										if (setHolder.indexOf(parseInt(potentialAnswers[comparedCell][w])) !== -1 ){
											console.log("removed  set cell", potentialAnswers[comparedCell][w], "by extracting from", setHolder.indexOf(potentialAnswers[comparedCell][w])," to ",setHolder.indexOf(potentialAnswers[comparedCell][w])+1, "from", i, "leaving", setHolder, counter,"because of", comparedCell);
											setHolder.splice(parseInt(setHolder.indexOf(potentialAnswers[comparedCell][w])), 1);
											if ( counter === 8 && setHolder.length === 1  && w === (potentialAnswers[comparedCell].length-1)){
												potentialAnswers[i] = setHolder.slice();
												console.log("changed row ", i, " to ", setHolder, potentialAnswers[i])
											}
											
										}
										else if ( counter === 8 && setHolder.length === 1  &&  w === (potentialAnswers[comparedCell].length-1)){
												potentialAnswers[i] = setHolder.slice();
												console.log("changed row ", i, " to ", setHolder, potentialAnswers[i])
										}
									}
								}
							}
						}
					}
				}
			} console.log(potentialAnswers);
		}
	
});

