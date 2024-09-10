function palindrome(str) {
  // Step 1: Remove all non-alphanumeric characters and convert the string to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Step 2: Reverse the cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  // Step 3: Check if the cleaned string is equal to the reversed string
  return cleanedStr === reversedStr;
}