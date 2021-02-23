check('())(', [['(', ')']])

check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])


function check(str, bracketsConfig) {
	//сделать из поданной строки массив
	let arr = str.split('')

	// Отсечка:

	// есть ли мусор ?:

	// 	сделать из Конфига один массив

	let firstPartConfig = config[0];
	// console.log(firstPartConfig)

	// config.shift()
	let secondPartConfig = config;
	// console.log(secondPartConfig)

	let joinedConfig = firstPartConfig.concat(secondPartConfig);
	// console.log(joinedConfig)

	let configToString = config.toString()
	// console.log(configToString);

	let splittedConfig = configToString.split(',');
	// console.log(splittedConfig);

	!!!!!!обьединить массивы все, тогда убрать повторы
	//  убрать повторы в этом массиве, тогда сравнить

	// 1) убрать повторы
	let strToSort = str.split('')

	const strSorted = strToSort.filter((it, index) => index === strToSort.indexOf(it = it.trim()));
	//2)тогда сравнить

	// strSorted & splittedConfig сравнить, но можно их конкатинировать и удалить повторы, если непустой - то ошибка

}