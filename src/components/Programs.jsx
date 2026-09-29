import React from 'react'
import { programs } from '../data'
import { Card } from '@heroui/react'
import { ProgramsCateg } from './ProgramsCateg'
import { getCategories, getPrograms } from '../utils'
import { useState } from 'react'

export const Programs = () => {
    const [selectedPrograms, setselectedPrograms] = useState(getPrograms('összes'))
    console.log(selectedPrograms);
    
    return (
        <div>
            <h2 className='text-2xl text-center p-5'>Iskolai programok</h2>
            <ProgramsCateg categories={getCategories(programs)} setselectedPrograms={setselectedPrograms}/>
            <div className='flex flex-wrap justify-center gap-4'>
                {selectedPrograms.map(({id,title,category,price,participants,capacity,indoor}) =>
                    <Card key={id} className="w-[260]" variant="default">
                        <Card.Header>
                            <Card.Title>{title}</Card.Title>
                            <Card.Description>Kategória:{category} - Ár:{price}Ft</Card.Description>
                        </Card.Header>
                        <Card.Content>
                            <p>Maximális létszám:{capacity}</p>
                            <p>Szabadhelyek száma:{capacity-participants}</p>
                            <p>{indoor ? 'Beltéri' : 'Kültéri'}</p>
                        </Card.Content>
                    </Card>

                )}
            </div>
        </div>
    )
}


