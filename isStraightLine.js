
// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.



// Example 1:
// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// Example 2:
// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false
const checkStraightLine = function (coordinates) {
  if (coordinates.length <= 1) {
    return false;
  };
  if(coordinates[1][0] === coordinates[0][0] ){
      for(let i=2;i<coordinates.length;i++){
        if(coordinates[i][0] !== coordinates[1][0]){
            return false
        }  
        
      }
  }else if(coordinates[1][1] === coordinates[1][0] ){
      for(let i=2;i<coordinates.length;i++){
        if(coordinates[i][1] !== coordinates[1][0]){
            return false
        }  
        
      }
  } else{

// my logic
// m=y2-y2/x2-x1
// y=mx+c so,
// c=y-mx

// then check for each points whether y=mx+c if not return false
 let m=(coordinates[1][1]-coordinates[0][1])/(coordinates[1][0]-coordinates[0][0])
 let c= coordinates[0][1]- (coordinates[0][0]* m)
 for (let i=1;i<coordinates.length;i++){
     if((m*coordinates[i][0])+c !== coordinates[i][1]){
         return false 
     }
 }  }
  return true;
};
