import React,{useState, useEffect} from 'react'
import axios from 'axios'
const FetchData = () => {
    const [dogs,setDogs] = useState([])
    useEffect(() => {
        document.title = "Dogs"
        axios.get('https://api.thedogapi.com/v1/breeds')
        .then(res =>{
            console.log((res));
            setDogs(res.data);
        })
        .catch(err =>{
            console.log(err);
        })

    },[])
    return (
        <>
            <h1 className = "header">THEDOGAPI.COM</h1>
            <hr />
            {dogs.map(dog => <div className="wrapper" key =  {dog.id}>
                <div className = "image-div"><img className = "image" src = {dog.image.url} alt = {dog.name} /></div>
                <div className = "info">
                    <h1 className = "name">{dog.name}</h1>
                    <div className = "para">
                        <p className = "temperament">{dog.temperament}</p>
                        <p className = "life-span">Life Span: {dog.life_span}</p>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default FetchData
