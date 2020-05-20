import React from 'react'
import '../../bootstrap.min.css'
 const footer = () => {
    return (
        <div className="footer">
                <div class="card-body" style={{background:"#3498DB"}}>
                 <h3 class="card-title">Rick and Morty Tales</h3>
                  <p class="card-text"><strong>Are you a Fan of Rick and Morty!<br></br>
                    If Yes we've got you covered <br></br>Now
                    Find all the information of your Favorite Rick and Morty episodes on Rick and Morty Tales
                    </strong></p>
                  <div>
                    <h5 style={{display:"inline"}}>Now Streaming On </h5>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/768px-Netflix-new-icon.png"
                        alt="netflix" style={{borderRadius:"50%",width:"5rem"}}/>      
                    </div>
                    <div className="mt-3">
                      <p>Source: Rick and morty API</p>
                    </div>
                   
                </div>
        </div>
    )
}


export default footer;
