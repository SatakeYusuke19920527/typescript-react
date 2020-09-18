import {
    useState, useEffect, useRef
} from 'react'

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

const useSelectedFromAttrView = (): [Array<number>, (setSelectedRef: Array<number>) => void] => {
    const selectedRef = useRef<Array<number>>(Array<number>());

    const setSelectedRef = (val: Array<number>) => {
        selectedRef.current = val;
    };

    return [selectedRef.current, setSelectedRef];
};


export default useApi