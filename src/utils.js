import { programs } from "./data"

export const generateRandNr=(min,max)=>Math.floor(Math.random()*(max-min+1))+min

export const getCategories=(arr)=>{
    let categories=arr.map(({category})=>category)
    categories=['összes',...new Set(categories)]
    return categories
}

export const getPrograms=(categ)=>{
    return categ=='összes' ? programs : programs.filter(({category})=>category==categ)
}