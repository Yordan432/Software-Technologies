const calculator = require("../models/calculator");
module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req , res) => {
        let bodyReq = req.body;
        let calculateParams = calculator.body;

        let calc = new Calculator(
            Number(calculateParams.leftOperand),
            calculateParams.operand,
            Number(calculateParams.rightOperand)
        );
        let result = calc.calculateResult();

        res.render('home/index' , {'calculate': calc , 'result': result})
    }
};