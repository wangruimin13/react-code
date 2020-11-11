var maxArea = function(height) {
    // let one = Math.max(...height);
    // if(one>height[height.length-1]){
    //     return height[height.length-1]*height[height.length-1]
    // }else if(one==height[height.length-1]){
    //     return one*one
    // }else{
    //     return one*one
    // }
    let len = height.length-1;
    let arr = height.map((item,index)=>{
        item = len-item;
        return item
    })
    return arr
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))