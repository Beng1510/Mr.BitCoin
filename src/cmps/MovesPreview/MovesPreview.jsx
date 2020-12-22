
import React from 'react'

import './MovesPreview.scss'

export function MovesPreview({ move }) {

    return (
            <li className='move-preview'>
                <p className='text-left'>Transfered To: {move.to}</p>
                <p className='text-left'>At: {move.at}</p>
                <p className='text-left'>Amount Transfered: {move.amount} BitCoins</p>
            </li>
       
    )
}






