import { useState, useEffect } from "react";
const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIspending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("couldn't fetch blogs")
                }
                return res.json()
            }).then(data => {
                setData(data)
                setIspending(false)
                setError(null)
            })  
            .catch(error => {
                setIspending(false)
                setError(error.message)
            });
        }, 500);

        
    }, [url]);

    return {data, isPending, error} ;
}
 
export default useFetch;