import React from 'react'

const PropsEx = ({brand,random,jadu,carInfo=""}) => {
    {
        if(carInfo)
        console.log(carInfo["name"]);
    }
  return (
    <div>PropsEx car name is {brand}&nbsp;{random}&nbsp;{jadu}{carInfo && (carInfo["name"])}
    </div>
  )
}

export default PropsEx