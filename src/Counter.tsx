import React, { FC, useState } from 'react'

const Counter: FC<{}> = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(prev => prev + 1)
    }
    return (
        <div>
            <div>
                value : {count}
            </div>
            <button
                onClick={increment}
            >
                +1
            </button>
        </div>
    )
}

export default Counter