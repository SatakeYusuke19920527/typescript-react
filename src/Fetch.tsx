import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import fetchData from './fetchData.json'

type DataType = typeof fetchData

const Fetch: FC<{}> = () => {
    const [data, setData] = useState<DataType>([]);
    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const res = await axios.get("https://qiita.com/api/v2/items")
        console.log(res)
        setData(res.data)
    }

    console.log(data)

    return (
        <div>
            Fetch
        </div>
    )
}

export default Fetch