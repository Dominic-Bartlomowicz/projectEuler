// Original problem found here: https://projecteuler.net/problem=1

// Description: "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get
// 		 3, 5, 6 and 9. The sum of these multiples is 23.
//
//		 Find the sum of all the multiples of 3 or 5 below 1000.


function problem1(multiple1,multiple2,limit)

{

var sum1 = 0;
var sum2 = 0;

for(var i = 0; i < limit; i++)
{

if(i%3 == 0)

	{	
		sum1 += i;
	}

else if(i%5 == 0)

	{
		sum2 += i;
	}

}

var sum3 = sum1 + sum2;

return sum3;

}

console.log(problem1(3,5,10)) // Output equals 23
console.log(problem1(3,5,1000)) // Output equals 233168
