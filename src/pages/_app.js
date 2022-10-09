import Mainlayout from '../layout/mainlayout'

import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
  )
}

export default MyApp
