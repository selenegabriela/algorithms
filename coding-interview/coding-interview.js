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

const deleteLetters = (word, letter) => {
	return word.replaceAll(letter, '');
}

console.log(deleteLetters('Yougov', 'o'));

const deleteLettersSecond = (word, letter) => {
	let newWord = '';
	[...word].forEach(l => {
		if(l !== letter) newWord += l;
	})

	return newWord;
}

console.log(deleteLettersSecond('Yougov', 'o'));

const deleteLetterThird = (word, letter) => {
	let newWord = '';
	for(let i = 0; i < word.length; i++){
		if(word[i] !== letter) newWord += word[i];
	}
	return newWord
}

console.log(deleteLetterThird('Yougov', 'o'));