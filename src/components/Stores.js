import React from 'react'
import Store from './Store'

const Stores = (data) => {

  return (

    <section>
        {data.data.map(store =>
    <Store key={store.store.id} store={store} />
  )}
    </section>

  )
}
export default Stores

