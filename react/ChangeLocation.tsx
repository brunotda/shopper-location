import React, { FunctionComponent } from 'react'

import ChangeLocationContainer from './components/ChangeLocationContainer'
import {
  LocationContextProvider,
  initialLocationState,
} from './components/LocationContext'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChangeLocation: FunctionComponent = (props: any) => {
  return (
    <LocationContextProvider {...initialLocationState}>
      <ChangeLocationContainer {...props} />
    </LocationContextProvider>
  )
}

export default ChangeLocation
