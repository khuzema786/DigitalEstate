import React, { useEffect } from 'react'

const Bott = () => {
  const tawkTo = require('tawkto-react')

  const tawkToPropertyId = '5fbb9a37920fc91564c9b757'

  useEffect(() => {
    tawkTo(tawkToPropertyId)
  }, [tawkTo])

  return <></>
}

export default Bott
