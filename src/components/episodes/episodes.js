import React ,{useState,useEffect}from 'react';
import '../../bootstrap.min.css'
import '../../App.css'
import axios from 'axios';
import Episode from '../episode/episode'
import Footer from '../footer/footer';
function Episodes() {
   const [url,setUrl] = useState('https://rickandmortyapi.com/api/episode');
   const [results,setResults]= useState([]);
   const [prev,setPrev] = useState('');
   const [next,setNext]=useState('');
   const [disablePrev,setDisablePrev]=useState();
   const [disableNext,setDisableNext]=useState();
   const [searchText,setSearchText]=useState('');
   const [error,setError] = useState('');

   useEffect(() => {
       const fetchData= async ()=>{
         const res = await axios.get(url)
                           .catch(err=>"Not Found!");
          if(res==="Not Found!"){
               setError(res);
          }
          else{
            res.data.results.length>1 ? setResults(res.data.results.slice(0,18)):setResults(res.data.results);
            setNext(res.data.info.next);
            setPrev(res.data.info.prev);
          }
        
       }
       fetchData();
      next===null?setDisableNext(true):setDisableNext(false);
      prev===null?setDisablePrev(true):setDisablePrev(false);
   }, [url,next,prev]);

   const updatePrevUrl = ()=>setUrl(prev);
   const updateNextUrl = ()=>setUrl(next);
   const resetUrl = ()=>{
             setUrl('https://rickandmortyapi.com/api/episode');
             setError('')
   }
   const searchEpisode =()=>{
        if(searchText===null){
          return
        }
        else{
          setUrl(`https://rickandmortyapi.com/api/episode/?name=${searchText}`);
          setNext(null);
          setPrev(null);
        }
   }
  return (
        <div className="bg-dark text-center">
           <h1 className="text-info"> Welcome to Rick and Morty Tales</h1>
           <div className="container">
                <input type="search" 
                   value={searchText}
                   onChange={(e)=>setSearchText(e.target.value)}
                  className="searchBar"
                  placeholder="search episode by Name"/>
                 <button type="button" 
                 className="btn btn-outline-warning btn-lg mx-3"
                 onClick={searchEpisode}>
                   Search
                </button>
            </div>       
           <div className="episodesContainer">
                 { error ?
                    <div  className="mx-auto my-auto">
                         <h1 className="text-info">{error}</h1>
                    </div>:
                     
                   results.map(result=>{
                    return (<Episode 
                     key={result.id}
                     name={result.name} 
                     date={result.air_date}  
                     code={result.episode}/>);
                  })
                 }
           </div>
              {results.length===1||error?
              <button className="btn btn-info mx-3" onClick={()=>resetUrl()}> Go Back</button>:
              null
              } 
               <button disabled={disablePrev} className="btn btn-info mx-3" onClick={()=>updatePrevUrl()}>Previous</button>
               <button  disabled={disableNext} className="btn btn-info mx-3" onClick={()=>updateNextUrl()}>Next</button>
               <Footer/>
      </div>
  );
}

export default Episodes;
