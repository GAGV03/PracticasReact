import { useEffect, useState } from "react"


const Timer = () => {
    const [count, setCount] = useState(0)

    useEffect
    (() => {
        console.log('useEffect en Timer')
        setTimeout(() => {
            setCount(count + 1)
        },1000)
    },[])

    return <h1> Contador de eventos: {count}</h1>
}

export default Timer