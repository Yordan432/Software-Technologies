function calculator(leftOperand , operand , rightOperand) {
    this.leftOperand = leftOperand;
    this.operand = operand;
    this.rightOperand = rightOperand;

    this.calculateResult = function () {
        let result = 0;
        switch(this.operand){
            case "+":
                result = this.leftOperand + this.rightOperand;
                break;
            case "-":
                result = this.leftOperand - this.rightOperand;
                break;
            case "*":
                result = this.leftOperand * this.rightOperand;
                break;
            case "/":
                result = this.leftOperand / this.rightOperand;
                break;
        }
        return result;
    }
}
module.exports = calculator;