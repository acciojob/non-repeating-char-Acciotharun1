function firstNonRepeatedChar(str) {
 // Write your code here
	frequencyMap={};
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(frequencyMap[char]){
            frequencyMap[char]++;
        }else{
            frequencyMap[char]=1;
        }
    }
    // loop to find the First non-repeadted values of a given string.
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(frequencyMap[char]==1){
            return char;
        }
    }
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
