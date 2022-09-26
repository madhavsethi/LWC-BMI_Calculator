import { LightningElement,track } from 'lwc';
export default class SimpleCalculator extends LightningElement {

firstNumber;
secondNumber;
@track result;

firstNumberInput(event){
    this.firstNumber = parseInt(event.target.value);
}
secondNumberInput(event){
    this.secondNumber = parseInt(event.target.value);
}

AddhandleClick(){
    this.result = 'The result of ' + this.firstNumber + '+' + this.secondNumber + ' = ' + (this.firstNumber + this.secondNumber);
    console.log(this.result);
}
SubHandleClick(){
    this.result = 'The result of ' + this.firstNumber + '-' + this.secondNumber + ' = ' + (this.firstNumber - this.secondNumber);
    console.log(this.result);
}
MultHandleClick(){
    this.result = 'The result of ' + this.firstNumber + '*' + this.secondNumber + ' = ' + (this.firstNumber * this.secondNumber);
    console.log(this.result);
}
DivHandleClick(){
    this.result = 'The result of ' + this.firstNumber + '/' + this.secondNumber + ' = ' + (this.firstNumber / this.secondNumber);
    console.log(this.result);
}

}