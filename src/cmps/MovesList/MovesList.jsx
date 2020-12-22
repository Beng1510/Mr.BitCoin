
import React from 'react'
import { MovesPreview } from '../MovesPreview/MovesPreview'
import './MovesList.scss'

export function MovesList({ moves,title }) {

    return (
        <ul className='move-list '>
            <h2 className='move-list-title'>{title}</h2>
            {
                moves.map(move => <MovesPreview move={move} key={move.at} />)
            }
        </ul>
    )

}

