import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const apiUrl = 'https://us-central1-skooldio-react-hooks.cloudfunctions.net'

export const useApi = (path) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(() => {  
        setLoading(true)
        fetch(`${apiUrl}/${path}`)
          .then((resp) => resp.json())
          .then((data) => {
              setData(data)
              setLoading(false)
          }
        );
    }, [path]);
    return {products: data,loading}
}
export default useApi;