// Binge watching

// A friend of Alex has gifted a movie collection, and Alex is excited to watch them all as quickly as possible. The duration of the movies is given in array durations[n]. n is the number of movies, and each movie's duration is between 1.01 and 3.00 units of time (up to two decimal places). Every day, Alex wants to spend no more than 3.00 units of time watching the movies and to complete the movies in the minimum number of days possible. If a movie is started, Alex watches the complete movie on the same day. Find the minimum number of days needed to watch all the movies.

// Example
// n = 5 
// duarations = [1.90, 1.04, 1.25, 2.5, 1.75]

// Considering 1-based indexing, Alex can watch the movies in a minimum of 3 days as:
// Day 1:     first and second movie: 1.90 + 1.04 = 2.94 ≤  3.00
// Day 2:     fourth movie: 2.5 ≤  3.00
// Day 3:     third and fifth movies: 1.25 + 1.75 = 3.00 ≤  3.00

// Function Description
// Complete the function findMinimumDays in the editor.

// findMinimumDays has the following parameter(s):

// float durations[n]:  the duration of each movie.

// Returns

// int:  the minimum number of days required to watch all the movies.

// Constraints

// 1 ≤ n ≤ 1000

// 1.01 ≤ durations[i] ≤ 3.0

const durations = [1.01, 1.01, 1.01, 1.4, 2.4]

function findMinimumDays(durations) {
    
    durations.sort((a, b) => b - a) // nlogn

    let days = 0 //0(1) space

    let left = 0 //0(1) space
    let right = durations.length - 1 //0(1) space

    while (left <= right) { // n
        if (durations[left] + durations[right] <= 3) {
            right--
        }
        left++
        days++
    }

    return days
}

//time complexity: O(nlogn)
//space complexity: O(1)
console.log(findMinimumDays(durations))