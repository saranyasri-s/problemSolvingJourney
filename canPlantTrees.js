// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

const canPlaceFlowers = function(flowerbed, n) {
    let planted=0;
    let startIndex=0;

    if(flowerbed.length===1&& flowerbed[0]===0){
        planted++
    };
     if(flowerbed.length===2&& flowerbed[0]===0 &&flowerbed[1]===0 ){
        planted++
    };
    if(flowerbed[0]===0&& flowerbed[1]===0 && flowerbed[2]===1){
    planted++;
    startIndex=1;

};
 if(flowerbed[0]===0&& flowerbed[1]===0 && flowerbed[2]===0){
    planted++;
    startIndex=1;

};
 if(flowerbed[flowerbed.length-3]===1&& flowerbed[flowerbed.length-2]===0 && flowerbed[flowerbed.length-1]===0){
    planted++;
    
};
 if( flowerbed[flowerbed.length-3]===0&& flowerbed[flowerbed.length-2]===0 && flowerbed[flowerbed.length-1]===0){
    planted++;
    
};

    for(let i=startIndex;i<flowerbed.length-3;i++){
if(flowerbed[i]===0 && flowerbed[i+1]===0 && flowerbed[i+2]===0  ){
    planted++;
    i++;
};

if(i>=flowerbed.length-3){
    break;
}
    }



if(planted<n){
    return false
}
    return true
};
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
