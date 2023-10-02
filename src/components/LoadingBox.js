import React from 'react'

const LoadingBox = ( {message} ) => {

    return (
<section className="terms-background">
        <div className="loadingBox">
        <h4> {message}  </h4>
        </div>
      </section>
    )
}
export default LoadingBox

