interface formulaInput {
    principal:number
    interestRate:number
    numberOfYears: number
}
export default function EstimateFormula(input:formulaInput){
    const exponentialTerm = (1+input.interestRate) ** input.numberOfYears
    return input.principal * ((input.interestRate * (exponentialTerm))/(exponentialTerm - 1))
}