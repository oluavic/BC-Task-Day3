var myapp ={
	findMissing: function(arr1,arr2){
		//check length of array
		if (arr1.length == arr2.length){
			//check for empty array
			if(arr1.length == 0){
				//return 0 for empty
				return 0;
			}
			//check for unitary array
			else if (arr1.length == 1){
				//check for equal element
				if (arr1[0] == arr2[0]){
					return 0;
				}
			}
			//check for invalid input
			else {
				return 'Invalid Input';
			}
		}
		
		else{
			//check for element diffrences more than 1 is invalid
			if (Math.abs(arr1.length - arr2.length) != 1) {
				return 'Invalid Input';
			}
			//search for missing
			else{
				//determine largest array
				if (arr1.length < arr2.length){
					//loop through the largest array
					for (var x = 0; x < arr2.length; x++){
						//search for the missing
						if (arr1.indexOf(arr2[x]) == -1){
							return arr2[x];
						}
					}
				}
				//largest array
				else {
					//loop through the largest array
					for (var m = 0; m< arr1.length;m++){
						//find missing
						if (arr2.indexOf(arr1[m]) == -1) {
							return arr1[m];
						}
					}
				}
			}
		}
		
	}
};
module.exports = myapp;