import { useEffect, useState } from "react";

 

const LeftSideCard = () => {
    const [aside, setAside] = useState([])

    useEffect(()=>{
        fetch('news.json')
        .then(res=>res.json())
        .then(data=>setAside(data))
    },[])

    return (
        <div>
            <h2 className="text-xl">cards {aside.length}</h2>
        </div>
    );
};

export default LeftSideCard;