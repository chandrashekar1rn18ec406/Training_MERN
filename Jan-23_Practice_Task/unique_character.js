function uniqueCharacters(str)
{
     
    // Converting string to set
    var setstring = new Set(str)
     
    if (setstring.size == str.length)
    {
        return true
    }
    else
    {
        return false
    }
}
 
// Driver Code
var input = "apple"
 
if (uniqueCharacters(input))
{
    console.log("The String " + input +
                   " has all unique characters") ;
}
else
{
    console.log("The String " + input +
                   " has duplicate characters")
}
 
