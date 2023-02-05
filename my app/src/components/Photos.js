import React, { useEffect, useState } from "react";

const Photos = () => {
    const [photoList, setPhotoList] = useState([]);
    const [isLoding, setIsLoding] = useState(true);

    useEffect(() => {
        fetch ("https://jsonplaceholder.typicode.com/photos")
        .then ((response) => response.json())
        .then ((json) => setPhotoList(JSON.parse(json)))
        .finally(() => setIsLoding(false))    }, []);

    if (isLoding) {
        return <h4>Loding...</h4>
    }
    return (
        <div>
            {photoList.map ((Photos, id) => {
                <div key = {index}>
                    <img src = {photoList.url} alt = {photoList.title}/>
                </div>;
            })}
        </div>
    )
}