import { useEffect, useRef, useState } from "react"

enum Operator{
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷',
}
export const UseCalculator = () => {
    const [formula, setFormula] = useState('0')
    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')
    const lastOperation = useRef<Operator>();

    useEffect(()=>{
        if(lastOperation.current){
            const firstFormulaPart = formula.split(' ').at(0)
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
        }else{
            setFormula(number)
        }

    },[number])

    useEffect(()=>{
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`)


    },[formula])

    const clean =() =>{
        setNumber('0')
        setFormula('0')
        setPrevNumber('0')
        lastOperation.current = undefined
    }

    const toggleSign = () =>{
        if(number.includes('-')){
            return setNumber(number.replace('-',''))
            
        }
        setNumber('-' + number)
    }
    const deleteLast = () =>{
        let currentSign = '';
        let temporalNumber = number;
        if(number.includes('-')){
            currentSign = '-'
            temporalNumber = number.substring(1)
        }
        if(temporalNumber.length > 1){
            setNumber(currentSign + temporalNumber.slice(0,-1))
        }
            setNumber('0')
        
    }

    const setLastNumber = () =>{
        //calcular resultado
        calculateResult()

        if(number.endsWith('.')){
            setPrevNumber(number.slice(0,-1))
        }
        setPrevNumber(number)
        setNumber('0')

    }

    const divideOperation = () =>{
        setLastNumber();
        lastOperation.current = Operator.divide
    }
    const multiplyOperation = () =>{
        setLastNumber();
        lastOperation.current = Operator.multiply
    }
    const substractOperation = () =>{
        setLastNumber();
        lastOperation.current = Operator.subtract
    }
    const addOperation = () =>{
        setLastNumber();
        lastOperation.current = Operator.add
    }

    const calculateSubResult = () =>{
        const [firstValue, operation, secondValue] = formula.split(' ');
        const firstNumber = Number(firstValue);
        const secondNumber = Number(secondValue);
        if (isNaN(secondNumber)) return firstNumber;
        switch (operation) {
            case Operator.add:
                return firstNumber + secondNumber;
            case Operator.subtract:
                return firstNumber - secondNumber;
            case Operator.multiply:
                return firstNumber * secondNumber;
            case Operator.divide:
                return firstNumber / secondNumber;
            default:
                throw new Error(`Unknown operation: ${operation}`);
        }

    }

    const calculateResult = () =>{
        const result = calculateSubResult();
        setFormula(`${result}`)
        lastOperation.current = undefined       
        setPrevNumber('0')        
    }

    const buildNumber =  (numberString: string) =>{
        //verificar si ya existe un punto decimal
        if(number.includes('.') && numberString === '.')return;
        if(number.startsWith('0') || number.startsWith('-0')){
           if(numberString === '.')return setNumber(number + numberString)

            //evaluar si hay otro cero y no hay punto
            if(numberString === '0' && number.includes('.'))return setNumber(number + numberString)

            //evalular si es diferente de cero y no hay punto y es el primer numero
            if(numberString !== '0' && !number.includes('.'))return setNumber(numberString)

            //evitar el 00000000.00000
            if(numberString === '0' && !number.includes('.'))return


        }
        setNumber(number + numberString)

        
    }

    return{
        //props
        formula,
        number,
        prevNumber,

        //methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperation,
        multiplyOperation,
        substractOperation,
        addOperation,
        calculateSubResult,
        calculateResult,
    }

}