import  {useState, useEffect, CSSProperties} from 'react'

export const useAnimatedScale = (scGap : number = 0.01, delay : number = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {

                            setAnimated(false)
                            clearInterval(interval)
                            return 0
                        }
                        //console.log("SCALE", prev)
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    }, [])
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const position = 'absolute'
    const background = 'indigo'
    const size = Math.min(w, h) / 10
    return {
        parentStyle() : CSSProperties {
            return {
                position, 
                left: `${w / 2}px`, 
                top : `${h / 2}px`,
                transform: `rotate(${180 * Math.sin(scale * Math.PI)}deg)`
            }
        },
        barStyle() : CSSProperties {
            return {
                position, 
                left: `${-size / 2}px`,
                top: `${-size}px`,
                background,
                width: `${size}px`,
                height: `${size}px`
            }
        }
    }
}