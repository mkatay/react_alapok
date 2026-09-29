import { Tag } from '@heroui/react'
import { TagGroup } from '@heroui/react'
import React from 'react'
import { getPrograms } from '../utils';

export const ProgramsCateg = ({categories,setselectedPrograms}) => {
    console.log(categories);
    
    return (
        <div className='flex flex-col items-center gap-3 p-6'>
            <h3>Kategóriák</h3>
            <TagGroup aria-label="Tags" selectionMode="single">
                <TagGroup.List>  
                    {categories.map((item,index)=>
                        <Tag  key={index} onClick={()=>setselectedPrograms(getPrograms(item))}>                      
                           {item}
                        </Tag>  
                    )}
                       

                </TagGroup.List>
            </TagGroup>
        </div>
    )
}


