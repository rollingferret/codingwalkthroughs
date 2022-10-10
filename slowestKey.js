// Engineers have redesigned a keypad used by ambulance drivers in urban areas. In order to determine which key takes the longest time to press, the keypad is tested by a driver. Given the results of that test, determine which key takes the longest to press.

// Example

// keyTimes = [[0, 2], [1, 5], [0, 9], [2, 15]]

// Elements in keyTimes[i][0] represent encoded characters in the range ascii[a-z] where a = 0, b = 1, ..., z = 25. The second element, keyTimes[i][1] represents the time the key is pressed since the start of the test.   The elements will be given in ascending time order. In the example, keys pressed, in order are 0102[encoded] = abac at times 2, 5, 9, 15.  From the start time, it took 2 - 0 = 2 to press the first key, 5 - 2 = 3 to press the second, and so on. The longest time it took to press a key was key 2, or 'c', at 15 - 9 = 6. 

// Function Description
// Complete the function slowestKey in the editor below.
// slowestKey has the following parameter(s):
//     int keyTimes[n][2]:  the first column contains the encoded key pressed, the second contains the time at which it was pressed
// Returns:
//     char: the key that took the longest time to press

// Constraints

// 1 ≤ n ≤ 105
// 0 ≤ keyTimes[i][0] ≤ 25 (0 ≤ i < n)
// 1 ≤ keyTimes[i][1] ≤ 108 (0 ≤ i < n)
// There will only be one key with the worst time.
// keyTimes is sorted in ascending order of keyTimes[i][1]

const keyTimes = [ [ 0, 2 ], [ 1, 3 ], [ 0, 7 ] ]    

const keyTimes2 = 
[
[0, 3],
[20, 5],
[2, 6],
[15, 7],
[9, 8],
[19, 9],
[24, 10],
[4, 12],
[3, 13]
]

function slowestKey(keyTimes) {
    
    let prev = 0
    let slowTime = 0
    let slowKey = 0

    for (let i = 0; i < keyTimes.length; i++) {

        let time = keyTimes[i][1] - prev

        if (time > slowTime) {
            slowTime = time
            slowKey = keyTimes[i][0]
        }

        prev = keyTimes[i][1]
    }

    return String.fromCharCode(slowKey + 97)
}

console.log(slowestKey(keyTimes2))