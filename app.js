check('())(', [['(', ')']])

check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])


function check(str, bracketsConfig) {
	//сделать из поданной строки массив
	let arr = str.split('')


	// 	1) сделать из Конфига один массив

	let firstPartConfig = bracketsConfig[0];
	// console.log(firstPartConfig)

	// config.shift()
	let secondPartConfig = bracketsConfig;
	// console.log(secondPartConfig)

	let joinedConfig = firstPartConfig.concat(secondPartConfig);
	// console.log(joinedConfig)

	let configToString = bracketsConfig.toString()
	// console.log(configToString);

	let splittedConfig = configToString.split(',');
	// console.log(splittedConfig);


	// Отсечка:

	// есть ли мусор ?:

	// 2) проверить, включает ли Конфиг Массив

	for (let index = 0; index < arr.length; index++) {
		if (!splittedConfig.includes(arr[index])) {
			console.log('false')
		}
	}


}
