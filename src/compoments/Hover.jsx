import React from 'react'

export default function Hover() {
  function handleClick(){
    window.open("https://www.fylehq.com/","_blank");
  }
  return (
    <div>
      <img src="images/hover-image.png" />
      <h2 className="m-2">WEB DEVELOPMENT</h2>
      <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
      <button onClick={handleClick} className="btn-lg read-more-btn" ><span className="read-more-btn-cnt">READ MORE</span> <i className="fa-solid fa-arrow-right first-title-color"></i></button>
    </div>
  )
}
