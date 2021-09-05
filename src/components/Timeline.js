import React from 'react'
const Timeline = ({ data }) => {


    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag">
                    {data?.method}
                </span>
                <time>{data?.timestamp}</time>
                <p>{data?.call_path}</p>

                <span className="circle" />
            </div>
        </div>
    )
}


export default Timeline
