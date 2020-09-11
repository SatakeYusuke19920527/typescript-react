import { useState, useEffect } from 'react'

function useApi() {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        seconds()
    }, [count])

    const seconds = () => {
        let i = 0
        setInterval(() => {
            i++
            setCount(prev => prev + i)
        }, 1000)
    }

    return count
}

export default useApi