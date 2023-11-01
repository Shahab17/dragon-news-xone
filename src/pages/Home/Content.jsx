import { useEffect, useState } from "react";

 

const Content = () => {

    const [content, setContent] = useState([])

    useEffect(()=>{
        fetch('news.json')
        .then(res=>res.json())
        .then(data=>setContent(data))
    },[])

    return (
        <div>
            <h3 className="text-xl">Main Content {content.length} </h3>
        </div>
    );
};

export default Content;