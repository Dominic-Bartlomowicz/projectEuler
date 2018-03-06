// Original problem found here: https://projecteuler.net/problem=5

// Description: "2520 is the smallest number that can be divided by each of the numbers from 1 to 10
// 		 without any remainder. 
//
//		 What is the smallest positive number that is evenly divisible by all of the numbers 
//		 from 1 to 20?


function smallestMultiple(maxnumber,lowerlimit,upperlimit)

{
    for (var i = 1; i <= maxnumber; i++)

    {

	var found = true;

        for (var j = lowerlimit; j <= upperlimit; j++)

        {
            if (i%j != 0)

            {
                found = false;
                break;
            }

        }

        if (found == true)

        {
            return i;
        }

    }

}

console.log(smallestMultiple(1000000,1,20));
console.log(smallestMultiple(1000000000,1,20));

// We use a test maxnumber of 1,000,000 to see if there is a result within that fits the solution
// description. Since 'undefined' is returned by the console, we now use a larger number, which is
// chosen to be 1,000,000,000. This returns an output of 232792560 which is the correct answer.
