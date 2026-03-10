import React from 'react';
import {Check, Loader2} from 'lucide-react';

const Todos = ({ data }) => {
    return (
        <div className='space-y-4'>
            <h2 className='text-lg font-semibold'>Todos are here</h2>
            {data.map((item) => (
                <div key={item.id} className='flex gap-4'>
                    <p>{item.title}</p>
                    {item.completed && <Check />}
                </div>
            ))}
        </div>
    )
}

export default Todos
