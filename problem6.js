// Original problem found here: https://projecteuler.net/problem=6


function squares(numbers)

{

var sum1 = 0;
var sum2 = 0;

for(var i = 1; i <= numbers; i++)

	{

	var square = (i*i);	
	sum1 += square;

	}

for(var j = 1; j <= numbers; j++)

	{
		
	sum2 += j;	

	}

var sumsquare = (sum2 * sum2);
var squarediff = (sumsquare - sum1);

return squarediff;

}

console.log(squares(100));
