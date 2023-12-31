import React from "react";
import {useDimension, useAnimatedScale} from './hooks'

const withContext = (MainComponent : React.FC<any>) : React.FC<any> => {
    return (props : any) => {
        const {w, h} = useDimension()
        const {scale, start : cb} = useAnimatedScale()
        const newProps = {...props, w, h, scale, cb}
        return (
            <MainComponent {...newProps}/>
        )
    }
}

export default withContext