import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <div className='bg-neutral-800 min-w-screen min-h-screen'>
        <Component {...pageProps} />
      </div>
    </ParallaxProvider>
  )
}

export default MyApp
