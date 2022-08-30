import Mainlayout from '../layout/mainlayout'

import '../styles/style.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
  )
}

export default MyApp
