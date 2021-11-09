import { AppProps } from 'next/app'
import '../styles/globals.css'
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core'
// import your favorite web3 convenience library here

function getLibrary(provider) {
  return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

interface Web3ReactContextInterface<T = any> {
  activate: (
    connector: AbstractConnectorInterface,
    onError?: (error: Error) => void,
    throwErrors?: boolean
  ) => Promise<void>
  setError: (error: Error) => void
  deactivate: () => void

  connector?: AbstractConnectorInterface
  library?: T
  chainId?: number
  account?: null | string

  active: boolean
  error?: Error
}

//const Web3ReactProviderReloaded = createWeb3ReactRoot('anotherOne')

//getLibrary: (provider?: any, connector?: AbstractConnectorInterface) => any

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
    //<Web3ReactProvider getLibrary={getLibrary}>
    //  {/* <...> */}
    //</Web3ReactProvider>
}
export default MyApp

