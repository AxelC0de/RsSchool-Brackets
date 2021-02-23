


function check(str, bracketsConfig) {
	// ===Подготовка===

	//1)  сделать из поданной Строки Массив
	let arr = str.split('')
	// console.log(arr);

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


	// *******************

	// arr = ['(', ']', '[', ')']
	// splittedConfig = ['(', ')', '[', ']']




	// Решение:

	// создаем  Стек (тип данных - массив), куда будем все складывать
	// там уже лежит первый элемент из Массива(он открывающий)

	let stack = [];
	// console.log(stack);
	// console.log(stack[stack.length - 1]);

	stack.push(arr[0]);
	// console.log(stack);
	// проходим циклом по Массиву, начиная со второго элемента
	for (let i = 1; i < arr.length; i++) {
		// проходим циклом по Конфигу
		for (let j = 0; j < splittedConfig.length; j++) {
			// проверяем, является ли скобка закрывающей по отношению к предыдущей скобке

			if (arr[i] === splittedConfig[j]) {
				// console.log(arr[i]);
				// console.log(splittedConfig[j]);
				if (stack[stack.length - 1] === splittedConfig[j - 1]) {
					stack.pop()
				} else stack.push(arr[i])

				// console.log(stack);
			}
		}

	}

	console.log(stack);



}



// check('(][)', [['(', ')'], ['[', ']']]);

check('([])', [['(', ')'], ['[', ']']]);





	// arr = ['(', ']', '[', ')']
	// splittedConfig = ['(', ')', '[', ']']