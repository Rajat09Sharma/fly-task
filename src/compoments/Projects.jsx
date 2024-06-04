import React from 'react'

export default function Projects({title,content,onClick,active}) {
    let css="project-box not-active";
    if(active){
        css="project-box active-img"
    }
    return (
        <div className={css} onClick={onClick}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}
