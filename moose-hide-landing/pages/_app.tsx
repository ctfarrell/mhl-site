import { AppProps } from 'next/app'
import '../styles/globals.css'
import NavBar from '../components/NavBar.js'
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core'
import { ethers } from "ethers";
//import Web3 from "web3";
//import Web3Modal from "web3modal";
// Function using fetch to POST to our API endpoint



//const providerOptions = {
  /* See Provider Options Section */
//};

/*
const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});
*/

//const provider = await web3Modal.connect();

//const web3 = new Web3(provider);
// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
//const provider = new ethers.providers.Web3Provider(window.ethereum)

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
//const signer = provider.getSigner()

//function getLibrary(provider) {
//  return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
//}


/*
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
*/
//const Web3ReactProviderReloaded = createWeb3ReactRoot('anotherOne')

//getLibrary: (provider?: any, connector?: AbstractConnectorInterface) => any

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>

  )
    //<Web3ReactProvider getLibrary={getLibrary}>
    //  {/* <...> */}
    //</Web3ReactProvider>
}
export default MyApp

