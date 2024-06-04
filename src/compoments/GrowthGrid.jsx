import React from 'react'

export default function GrowthGrid({tag,num,content}) {
    return (
        <div className="growth-box">
            {tag}
            <h1>{num}</h1>
            <p>{content}</p> 
        </div>
    )
}
