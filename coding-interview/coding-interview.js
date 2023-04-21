const fares = [0.3, 0.4, 0.4, 0.8, 0.9];
const length = 25;
const credit = 20;

const uberMoreExpensiveICanAfford = (length, fares, credit) => { 
	const types = ["UberX", "UberXL", "UberSUV", "UberSUVXL", "UberCool"]
	const index = fares.findIndex(fare => {
  	return (fare * length) > credit
  });
  
  return index < 0 ? types.at(-1) : types[index-1];
}

console.log(uberMoreExpensiveICanAfford(length, fares, credit));