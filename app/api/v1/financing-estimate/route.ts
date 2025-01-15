import EstimateFormula from "@/finance-estimate/estimate"

interface requestType {
    totalPrice: number
    annualTax: number
}
const YEARS = 30
const INTEREST = 0.065  //this is the average interest in 2025
const INSURANCEperMONTH = 100 //average insurace with the cheapest ($200,000) dwelling coverage
const HOA = 300  //average HOA per month for 2025


export function GET(request:requestType) {
    const downPayment = 0.2 * request.totalPrice;
    const loanAmount = request.totalPrice - downPayment;
    const principalAndInterest = EstimateFormula({principal:loanAmount,interestRate:INTEREST,numberOfYears:YEARS})
    return {
        "EstimatedValue": principalAndInterest + (request.annualTax/12) + INSURANCEperMONTH + HOA
    }
}