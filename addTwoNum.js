
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function sumTwoNum(nums, target){
    // create new map
    const myMap = new Map();
    for(let i =0; i<nums.length; i++){
        let targetDifference = target -nums[i];
        if(myMap.has(targetDifference)){
            return [myMap.get(targetDifference), i]
        }
        myMap.set(nums[i] , i)
    }
    return null;
}

let firstArray = sumTwoNum([8,4,6,1,3,2,-6,5], 13)
console.log(firstArray)