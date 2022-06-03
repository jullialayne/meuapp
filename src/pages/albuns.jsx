import React,{useState,useEffect} from 'react';
import '../style/style.css'; 
import Loading from '../components/loading';

const Albuns = () => {
  const [isLoading, setIsLoading] =useState(false);
  const [albuns,setAlbuns] = useState([]);

  useEffect(()=>{
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response=>response.json())
    .then(data=>{
      setAlbuns(data)
      setIsLoading(false)
    })
  },[]);

  return (
    < > 
      <Loading visable={isLoading} />
      {albuns.map(album =>{
        return(
          <div>
            <span  key={album.id} >{album.id} - {album.title} </span>
          </div>
        )
      })}
    </>
  );
}

export default Albuns;