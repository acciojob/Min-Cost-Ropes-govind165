function mincost(arr)
{ 
//write your code here
// return the min cost
	let sum = 0;
	arr.forEach(arr =>{
		if(arr < sum){
			sum = arr;		}
	})
	return sum;
  
}

module.exports=mincost;
