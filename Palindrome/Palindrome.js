

function isPalindromeTest()
	{
		var temp;
		var remainder;
		var finalNum = 0;
		var number = Number(document.getElementById("numInput").value);

		temp = number;
		while(number>0)
		{
			remainder = number%10;
			number = parseInt(number/10);
			finalNum = finalNum*10+remainder;
		}
		if(finalNum==temp)
		{
			alert("The number entered is a Palindrome");
		}
		else
		{
			alert("The number entered is not a palindrome");
		}
	}