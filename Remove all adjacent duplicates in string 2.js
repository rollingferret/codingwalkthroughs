// A student decides to perform some operations on big words to compress them, so they become easy to remember. An operation consists of choosing a group of K consecutive equal characters and removing them. The student keeps performing this operation as long as it is possible. Determine the final word after the operation is performed.

// Example
// word = "abbcccb" 
// k = 3

// Remove k = 3 characters  'c', now word = "abbb".
// Remove 3 characters 'b', so the final word is "a".
 
// It can be easily proven that the final word will be unique. Also, it is guaranteed that the final word consists of at least one character.

// Function Description
// Complete the function compressWord in the editor below.

// compressWord has the following parameter(s):
//     string word:  a string of lowercase English letters
//     int k:  the number of consecutive equal characters

// Returns:
//     string : denotes the final word.

// Constraints
// 1 ≤ |word| ≤ 105
// 1 < k ≤ |word| 

function compressWord(word, k) {

    let stack = []

    for (let i = 0; i < word.length; i++) {

        let char = word[i]

        if (stack.length && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1]++
        } else {
            stack.push([char, 1])
        }
    
        if (stack[stack.length - 1][1] === k) {
            stack.pop()
        }
    }

    let result = []

    for (let letter of stack) {

        for (let i = 0; i < letter[1]; i++) {
            result.push(letter[0])
        }
    }

    return result.join('')
}

const word = "deeedbbcccbdaa"
const k = 3

console.log(compressWord(word, k))
