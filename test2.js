// check('())(', [['(', ')']])

// check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])


function check(str, bracketsConfig) {
	// ===Подготовка===

	//1)  сделать из поданной Строки Массив
	let arr = str.split('')

	// ===Решение===
	let stack = [];

	for (let i = 0; i < arr.length; i++) {
		stack.push(arr[i]);	// кладем элемент в Массив
		for (let j = 0; j < bracketsConfig.length; j++) {



			// если предыдущий элемент в Массиве равен открывающему элементу в Конфиге, а текущий - закрывающему - то удаляем их из массива
			if (stack[stack.length - 2] === bracketsConfig[j][0] && stack[stack.length - 1] === bracketsConfig[j][1]) {
				stack.pop()
				stack.pop()
			}

		}

	}

	if (stack.length !== 0) {
		return false
	} else {
		return true
	}
}

check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])
