var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var abc_upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
function code(text,n){
	var i;
	var pos = 0;
	var result_str = "";
	for(pos=0;pos<text.length;pos++){
		if((i = abc.indexOf(text.charAt(pos))) != -1){
            			result_str = result_str.concat(abc[(i+n)%abc.length]);
            		}
            		else if((i = abc_upper.indexOf(text.charAt(pos))) != -1){

            			result_str = result_str.concat(abc_upper[(i+n)%abc_upper.length]);
            		}

            	}
            	console.log(result_str);
            	document.write(result_str);
            	//return result_str;
            }
            function decode(text,n){
            	var i;
            	var j;
            	var pos = 0;
            	var result_str = "";
            	for(pos=0;pos<text.length;pos++){

            		if((i = abc.indexOf(text.charAt(pos)))!= -1){
                             
            			j = (i - n);
            			if(j<0){j = (abc.length + j);}
                    
            			j = j%abc.length;
                     
            			result_str = result_str.concat(abc[j]);
        
            		}
            		else if((i = abc_upper.indexOf(text.charAt(pos))) != -1){
            			j = (i - n);
            			if(j<0){j = (abc_upper.length + j);}
            			j = j%abc_upper.length;
            			result_str = result_str.concat(abc_upper[j]);
            		}
            	}
            	console.log(result_str);
            	document.write(result_str);
            	//return result_str;
            }