


function check(str, bracketsConfig) {
	// ===Подготовка===

	//1)  сделать из поданной Строки Массив
	let arr = str.split('')


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



	for (let index = 0; index < arr.length; index++) {

		for (let index = 0; index < splittedConfig.length; index++) {

			if (arr[index] === splittedConfig[index]) {
				if (arr[index + 1] === splittedConfig[index + 1] || arr[index - 1] === splittedConfig[index - 1]) {
					arr.splice(index, 1)
				}
			}
			return console.log(arr);
		}
	}
}
check('()', [['(', ')']]);
