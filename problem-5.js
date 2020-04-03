// 5. Given a 2D array of 1s and 0s, count the number of "islands of 1s" (e.g. groups of 1s)
// eg [0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1] => 7

const islandOfOnes = (arr) => {
    let groupOfOnes = 0;
    let inIsland = false;
    arr.forEach(item => {
        if (item === 1 && inIsland === false) {
            inIsland = true;
            groupOfOnes += 1;
        }
        if (item === 0){
            inIsland = false;
        }
    })
    return groupOfOnes;
}

arr1 = [0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1]
ans1 = 7

arr2 = [0,0,0,0];
ans2 = 0;

arr3 = [1,1,1,1];
ans3 = 1

arr4 = [1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1]
ans4 = 5;

console.log(islandOfOnes(arr1),ans1);
console.log(islandOfOnes(arr2),ans2);
console.log(islandOfOnes(arr3),ans3);
console.log(islandOfOnes(arr4),ans4);

