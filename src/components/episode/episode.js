import React from 'react'
import '../../bootstrap.min.css'
import './episode.css'
import img from '../../images/Rick_and_Morty.jpg';
 const episode = (props) => {
    return (
        <div className="card mx-auto my-3 bg-light" style={{width:"18rem"}}>
                <img src={img} className="card-img-top" alt="RickandMorty"/>
                <div className="card-body">
                    <p className="card-text">
                         <span  className="text-info"><strong>{props.code}</strong></span><br></br>
                         <span className="text-info"><strong>{props.name}</strong></span><br></br>
                         <span className="text-info">{props.date}</span><br></br>
                         
                    </p>
                </div>
        </div>
    )
}
 export default episode;