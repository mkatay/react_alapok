import React from 'react'
import { quotes } from '../data';
import { getQuote } from '../utils';
import { Card } from '@heroui/react';

export const RandomQuote = ({nr}) => {
console.log(nr);
console.log(getQuote(nr));
console.log(quotes[getQuote(nr)].split('-'))
const quoteArr=quotes[getQuote(nr)].split('-')

//vagy objektumokká alakítva:
console.log(quoteArr);


  return (
    <div className='p-5'>
      <Card className="w-[320px]" variant="default">
        <Card.Header>
         <Card.Description>{quoteArr[1]}</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>{quoteArr[0]}</p>
        </Card.Content>
      </Card>
    </div>
  )
}

