type AppLayoutProps = {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <div>
        <main>
          <div className="w-screen h-screen px-6 border border-dashed border-gray-200">
            {children}
          </div>
        </main>
        <footer className="w-full border-t border-grey pin-b">
          <div className="flex items-center justify-center w-screen">
            <a href="https://www.netlify.com">
              <img
                src="https://www.netlify.com/img/global/badges/netlify-light.svg"
                alt="Deploys by Netlify"
              />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default AppLayout
