module.exports = {
	 	toTwenty: function() {
			var arr = [];
    		for (var i = 1; i <= 20; i++) {
       			arr.push(i);
    		}
    		return arr;
		},
		toForty: function() {
			var arr= [];
	    	for (var i = 2; i <= 40; i+=2) {
	       		arr.push(i);
	    	}
	    	return arr;
		},
		toOneThousand: function() {
			var arr = [];
	    	for (var i = 10; i <= 1000; i+=10) {
	       		arr.push(i);
	    	}
	    	return arr;
		},
		search: function(d) {
			var first = 0;
			var last =this.length - 1;
			var found = false;
			var count=0;
			var index = -1;
			var midpoint;
			if (this[first] == d) {
      			index= first;
    		}
    		else if (this[last] == d) {
      			index= last;
			}
			else{
				while ((first <= last) && ( found === false)){
		    		midpoint = Math.floor((first + last) / 2);
		    		if (this[midpoint] == d) {
		    			found = true;
		    			index = midpoint;
		    			
		    		}
		    		else {
		    			if (d < this[midpoint]) {
		    				last = midpoint -1;
		    				count ++;
		    			}
		    			else {
		    				first = midpoint + 1;
		    				count ++;
		    			}
		    		}
	    		
	    		}

			}
	    	
	    	var result = {
	    		count:  count,
	    		index: index,
	    		length: this.length
	  			};
	  		// Return it
	    	return result;

		}
}
