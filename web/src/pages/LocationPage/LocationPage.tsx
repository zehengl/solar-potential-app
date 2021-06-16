import SolarCell from 'src/components/SolarCell'
import AppLayout from 'src/layouts/AppLayout'

const LocationPage = ({ address }) => {
  return (
    <AppLayout>
      <SolarCell address={address} />
    </AppLayout>
  )
}

export default LocationPage
