// Original problem found here: https://projecteuler.net/problem=4
//
// Description: "A palindromic number reads the same both ways. The largest palindrome made from the
//		 product of two 2-digit numbers is 9009 = 91 x 99.
//
//		 Find the largest palindrome made from the product of two 3-digit numbers.


function palindrome()

// We know that the multiplication of two 3-digit numbers will result in either a 5 or 6-digit  
// number. Therefore, if made into an array, we want the sequence [0] to [4 or 5] to be the 
// same as the sequence of [4 or 5] to [0]. We can verify this through a series of if-else
// statements. 

{

for (var i = 100; i <= 999; i++)
{

for (var j = 100; j <= 999; j++)

{

var product = (i * j);

var digit1 = (''+product)[0];
var digit2 = (''+product)[1];
var digit3 = (''+product)[2];
var digit4 = (''+product)[3];
var digit5 = (''+product)[4];
var digit6 = (''+product)[5];


if(digit1 == digit6 && digit2 == digit5 && digit3 == digit4)
{
console.log(product);
}



}


}


}


console.log(palindrome());
