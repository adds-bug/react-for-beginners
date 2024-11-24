import {useParams} from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'

function Detail() {
    const {id} = useParams()

    const [loading, setLoading] = useState(true)
    const [details, setDetails] = useState({})
    
    const getMovie = useCallback(async() => {
        const response =  await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        const json = await response.json()
        setDetails(json.data.movie)
        setLoading(false)
        console.log(json)
    }, [id])

    useEffect(() => {
       getMovie()
    }, [getMovie])

    return (
        <div>
            {loading ? <strong>Loading..</strong> : <div>
                    {details.id}
                </div>}
        </div>
    )
}

export default Detail