let bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}']]




// 2) сделать из Конфига один массив

let firstPartConfig = bracketsConfig[0];
// console.log(firstPartConfig)

bracketsConfig.shift()
let secondPartConfig = bracketsConfig;
// console.log(secondPartConfig)

let joinedConfig = firstPartConfig.concat(secondPartConfig);
// console.log(joinedConfig)

let configToString = joinedConfig.toString('')
// console.log(configToString);

let splittedConfig = configToString.split(',');
// console.log(splittedConfig);

let evenSplittedConfig = [];
let oddSplittedConfig = [];

for (let index = 0; index < splittedConfig.length; index++) {
	if (index % 2 === 0) {
		evenSplittedConfig.push(splittedConfig[index])
	} else {
		oddSplittedConfig.push(splittedConfig[index])
	}

}
console.log(evenSplittedConfig);
console.log(oddSplittedConfig);