const handleCalculation = (method,x,y) => {
	switch(method.toLowerCase()){
		case 'add':
			return {result: x+y, operand: '+' };
		case 'subtract':
			return {result: x-y, operand: '-' };
		case 'divide':
			return {result: x/y, operand: '/' };
		case 'multiply':
			return {result: x*y, operand: '*' };
		default:
			return 'This is an invalid option. Please Try Again';
	}
};

const validOptions = ['add','subtract','multiply','divide'];

const handleHttpCalculation = (req , res) => {
	const query  = req.query;
	const x = Number(query.x);
	const y = Number(query.y);
	const method = query.method;

	if(isNaN(x) && isNaN(y)){
		return res.send('Both X and Y must be numbers');
	}

	if(isNaN(x)){
		return res.send('X must be a number');
	}

	if(isNaN(y)){
		return res.send('Y must be a number');
	}

	

	if(!method || !validOptions.includes(method.toLowerCase())){
		return res.send(`Invalid method. The method must be included and be one of the following: ${validOptions.join(',')}`);
	}

	const result = handleCalculation(method,x,y);



	res.send(`${x} ${result.operand} ${y} = ${result.result}`);

};

module.exports = handleHttpCalculation;