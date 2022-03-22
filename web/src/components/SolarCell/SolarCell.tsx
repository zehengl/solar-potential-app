export const QUERY = gql`
  query GET_SOLAR($address: String!) {
    solar: getSolar(address: $address) {
      address
      number_of_panels
      ac_annually
      area
      capacity_factor
    }
  }
`

export const Loading = () => (
  <div className="border border-green-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-8">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-green-400 h-12 w-12"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-green-400 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-green-400 rounded"></div>
          <div className="h-4 bg-green-400 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div className="py-12 bg-gray text-center">
    <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
      Error: {error.message}
    </h2>
  </div>
)

export const Success = ({ solar }) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Solar Potential
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {solar.address}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            An optimal size of PV system to be installed on this rooftop area
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Number of Panels
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                The optimal number of panels that can be placed on a rooftop
                area is {solar.number_of_panels}.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Yearly AC
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                The kilowatt-hours AC power generated from those solar panels
                per year is {solar.ac_annually} kwh, with a capacity factor of{' '}
                {solar.capacity_factor}.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
