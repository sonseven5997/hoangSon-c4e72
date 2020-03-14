function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countApples = 0
    for (let i=0; i<apples.length; i++){
        apples[i] += a
        if (s<=apples[i]<=t){
            countApples++
        }
    }
    let countOranges = 0
    for (let i=0; i<oranges.length; i++){
        oranges[i] += b
        if (s<=oranges[i]<=t){
            countOranges++
        }
    }
    console.log(countApples)
    console.log(countOranges)

}
countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])