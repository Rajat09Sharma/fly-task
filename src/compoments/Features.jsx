import React, { useState } from 'react'
import FeatureGrid from './FeatureGrid'
import Projects from './Projects'

export default function Features() {
    const [projectNumber, setProjectNumber] = useState(1);
    return (
        <div className="features">
            <p className="h5 first-title-color"> WHY CHOOSE US</p>
            <h1 className="display-4 font-weight-bold my-4">WHY WE ARE BEST</h1>
            <div className="row mb-5">
                <FeatureGrid imgSrc="images/choice-1.png" title="Clarified Vision & Target" content="Lorem ipsum dolor sit amet consetetur sadipscing elitr, diam nonumy" />
                <FeatureGrid imgSrc="images/choice-2.png" title="High Performance" content="Lorem ipsum dolor sit amet consetetur sadipscing elitr, diam nonumy" />
                <FeatureGrid imgSrc="images/choice-3.png" title="Maintain Security" content="Lorem ipsum dolor sit amet consetetur sadipscing elitr, diam nonumy" />
                <FeatureGrid imgSrc="images/choice-4.png" title="Better Strategy & Quality" content="Lorem ipsum dolor sit amet consetetur sadipscing elitr, diam nonumy" />
            </div>
            <p className="h5 first-title-color"> OUR PROJECT</p>
            <h1 className="display-4 font-weight-bold my-4">WHY WE ARE BEST</h1>
            <div className="row mt-5">
                <div className="col-lg-8">
                    <img src={`images/project-${projectNumber}.png`} className="project-img" />
                </div>
                <div className="col-lg-4">
                    <div className="project-container">
                        <Projects title="Genderless Kei - Japan's Hot" content="Set to launch on the manufacturer's new A330neo aircraft in 2017, it's
                            offering lots of" onClick={() => setProjectNumber(1)}  active={projectNumber===1} />
                        <Projects title="Better Strategy & Quality" content="Set to launch on the manufacturer's new A330neo aircraft in 2017, it's
                            offering lots of" onClick={() => setProjectNumber(2)}  active={projectNumber===2} />
                        <Projects title="Genderless Kei - Japan's Hot" content="Set to launch on the manufacturer's new A330neo aircraft in 2017, it's
                            offering lots of" onClick={() => setProjectNumber(3)} active={projectNumber===3}  />
                    </div>

                </div>
            </div>
        </div>
    )
}

