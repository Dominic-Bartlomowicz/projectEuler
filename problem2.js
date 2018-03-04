// Original problem found here: https://projecteuler.net/problem=2

// Description: "Each new term in the Fibonacci sequence is generated by adding the previous two
//		 terms. By starting with 1 and 2, the first 10 terms will be:
//
//		 1,2,3,5,8,13,21,34,55,89,...
//
//		 by considering the terms in the Fibonacci sequence whose values do not exceed four
//		 million, find the sum of the even-valued terms.


function fibonacci(limit,condition)

{

var n1 = 1;
var n2 = 2;
var n3;


if(condition == "odd")

{

var sum = 1;

for(var i = 1; i <= 99999999; i++) // Program supports up to 99999999 terms

	{	

		n3 = (n1 + n2);


	if (n3 <= limit && n3%2 == 1)

		{

		sum+=n3;
		
		}

		n1 = n2; 
		n2 = n3;

	}

return sum;

}


else if(condition == "even")

{

var sum = 2;

for(var i = 1; i <= 99999999; i++)

	{	

		n3 = (n1 + n2);


	if (n3 <= limit && n3%2 == 0)

		{

		sum+=n3;
		
		}

		n1 = n2; 
		n2 = n3;

	}

return sum;

}


else if(condition == "all");

{

sum = 3;

for(var i = 1; i <= 99999999; i++) 

	{	

		n3 = (n1 + n2);


	if (n3 <= limit)

		{

		sum+=n3;
		
		}

		n1 = n2; 
		n2 = n3;

	}

}

return sum;

}

console.log(fibonacci(4000000, "all")); // Output: 9227463
console.log(fibonacci(4000000, "odd")); // Output: 4613731
console.log(fibonacci(4000000, "even")); // Output: 4613732
