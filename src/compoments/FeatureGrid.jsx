import React from 'react'

export default function FeatureGrid({imgSrc,title,content}) {
  return (
    <div className="col-lg-3 feature-grid">
        <img className="feature-grid-img" src={imgSrc}/>
        <h4 className="my-3">{title}</h4>
        <p>{content}</p>
    </div>
  )
}
