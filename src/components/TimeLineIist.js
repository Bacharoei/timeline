import React from 'react'
import dataSet from './data-set.json'
import Timeline from './Timeline'


const TimeLineIist = () => {
    return (
        dataSet.length > 1 && (
            <div className="timeline-container">
                {dataSet.map((data, idx) => (
                    <Timeline data={data} key={idx} />
                )

                )}



            </div>
        )

    )
}

export default TimeLineIist