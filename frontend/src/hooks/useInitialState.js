import {useState, useEffect} from 'react'

const useInitialState = (API) => {
    const [videos, setVideos] = useState(API)
    useEffect(() => setVideos(API))
    console.log(videos)
    // useEffect(() => {
	// 	fetch(initialState.tendencias = () => done)
	// 		.then(response => response.json())
    //         .then(data => setVideos(data))
    // }, [])
    return videos
}

export default useInitialState