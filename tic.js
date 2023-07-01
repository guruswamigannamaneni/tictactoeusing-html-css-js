var count = 0;
		var val;
		var v;
		var arr = [];
		function read(m){
			var test=document.getElementById(m);
			if(test.innerText=='X' || test.innerText=='O'){
				document.getElementById("err").style.display = "block";
			}
			else{
				 if(count % 2 == 0){
					val = 'X';
					count++;
					var v = parseInt(m[1])-1;
					arr[v] = 1;
				}
				else{
					val = 'O';
					count++;
					var v = parseInt(m[1])-1;
					arr[v] = 0;
				}
				test.innerText = val;
				document.getElementById("err").style.display = "none";
			}
			if (
			  (arr[0] == arr[1] && arr[1] == arr[2] && arr[0] != undefined) ||
			  (arr[3] == arr[4] && arr[4] == arr[5] && arr[3] != undefined) ||
			  (arr[6] == arr[7] && arr[7] == arr[8] && arr[6] != undefined) || 
			  (arr[0] == arr[3] && arr[3] == arr[6] && arr[0] != undefined) ||
			  (arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != undefined) || 
			  (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != undefined) || 
			  (arr[0] == arr[4] && arr[4] == arr[8] && arr[0] != undefined) || 
			  (arr[2] == arr[4] && arr[4] == arr[6] && arr[2] != undefined)    
			) {
			  document.getElementById("body").innerHTML = val + " wins";
			  document.getElementById("body").style.padding = "250px";
			}

			if(count === 9){
				document.getElementById("body").innerHTML = " THE GAME ENDS AS TIE";
				document.getElementById("body").style.padding = "250px";
			}
		}