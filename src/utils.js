import { programs, quotes } from "./data"

export const generateRandNr=(min,max)=>Math.floor(Math.random()*(max-min+1))+min

export const getCategories=(arr)=>{
    let categories=arr.map(({category})=>category)
    categories=['összes',...new Set(categories)]
    return categories
}

export const getPrograms=(categ)=>{
    return categ=='összes' ? programs : programs.filter(({category})=>category==categ)
}

export const getQuote=(diceValue)=>{
    const randomIndex = Math.floor(Math.random() * quotes.length);//1 és 10 közt véletlen szám
    const index = (randomIndex + diceValue - 1) % quotes.length;// 0 és 9 közt minden indexet visszakaphatunk a gurítástól függően
    return index
}
