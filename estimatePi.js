// You have a function named random that generates a number from 0 - 1 and it's uniformly distributed. 
// Now calculate pi.

// distance from center  sqrt of x**2 + y**2 < 1 inside circle > 1 outside circle
// Pythagorean Theorem
// pi = 3.14159
// area of circle = pi r**2
// area of square = r**2

// num points in circle
// num points total

// r = 1
// pi = 4 * ( num points circle ) / ( num points total )

// monte carlo method


function estimatePi(n) {
    
    let num_point_circle = 0
    let num_point_total = 0

    for (let i = 0; i < n; i++) {

        const x = Math.random()
        const y = Math.random()

        const distance = x**2 + y**2

        if (distance <= 1) {
            num_point_circle ++
        }
        num_point_total ++
    }

    const pi = 4 * num_point_circle / num_point_total

    return pi
}

console.log(estimatePi(1000000000))