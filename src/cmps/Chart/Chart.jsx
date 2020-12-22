
import React from 'react'
import { Sparklines, SparklinesLine, SparklinesNormalBand } from 'react-sparklines';

import './Chart.scss'

export default function Chart({ data }) {
    return (
        <div className={ 'data-chart' }>
            <Sparklines data={ data }>
                <SparklinesLine style={ { fill: '#AA00AA', fillOpacity: 0.8, height: '350', width: 500 } } />
                <SparklinesNormalBand />
            </Sparklines>
        </div>
    )
}
