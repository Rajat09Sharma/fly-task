import React from 'react'
import GrowthGrid from './GrowthGrid'

export default function Growth() {
    return (
        <div className="growth">
            <p className="h5 first-title-color">EXPERTS GROWTS</p>
            <h1 className="display-4 font-weight-bold mb-5 mt-3">OUR COMPANY GROWTH</h1>
            <div className="growth-container mt-5">
                <GrowthGrid tag={<i className="fa-solid fa-heart first-title-color "></i>} num="199 +" content="Staticfied Customers" />
                <GrowthGrid tag={<i className="fa-solid fa-clock first-title-color "></i>} num="1591+" content="Days Of Operation" />
                <GrowthGrid tag={<i className="fa-regular fa-circle-check first-title-color "></i>} num="283 +" content="Complete Project" />
                <GrowthGrid tag={<i className="fa-solid fa-trophy first-title-color "></i>} num="75+" content="Win Awards" />
            </div>
        </div>
    )
}
