check('())(', [['(', ')']])

check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])


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

	// ========================================

	// ===Проверка на ошибки в Массиве:===

	// 1) кол - во элементов нечетное ?
	let isEven = str => {
		if (arr.length % 2 !== 0) {
			return false
		}
	}

	// 2) является ли первый элемент закрывающей скобкой? =  равняется ли он элементу к конфиге с нечетным номером?
	// = делаем отдельный массив из четных элементов, включая 0, и проверяем, включает ли полученный массив этот первый элемент(includes)
	let evenSplittedConfig = [];
	let oddSplittedConfig = [];

	for (let index = 0; index < splittedConfig.length; index++) {
		if (index % 2 === 0) {
			evenSplittedConfig.push(splittedConfig[index])
		} else {
			oddSplittedConfig.push(splittedConfig[index])
		}
	}
	// console.log(evenSplittedConfig);
	// console.log(oddSplittedConfig);

	if (!evenSplittedConfig.includes(arr[0]) || !oddSplittedConfig.includes(arr[arr[length - 1]])) {
		console.log('false')
	}





	// 2) проверить, включает ли Конфиг Массив

	for (let index = 0; index < arr.length; index++) {
		if (!splittedConfig.includes(arr[index])) {
			console.log('false')
		}
	}




	// ========================================


	// Решение:
	// удаляем внутри массива, а не работаем с новым стеком
	// циклом проходим по Массиву
	// внутри проходим циклом по Конфигу
	// если элемент Массива равен элементу Кофига, то
	// сравниваем следующий элемент Массива со следующим элементом Кофнига, и:
	// если они равны - то удаляем эти оба элемента в Массиве
	// если нет - то идем дальше(как идти дальше, continue?)

	// deleteBrackets
	for (let index = 0; index < arr.length; index++) {
		for (let index = 0; index < splittedConfig.length; index++) {
			if (arr[index] === splittedConfig[index]) {
				if (arr[index + 1] === splittedConfig[index + 1] || arr[index - 1] === splittedConfig[index - 1]) {
					arr.splice(index, 1)
				}
			}

		}



	}



















}