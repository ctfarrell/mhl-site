const { ethers } = require('ethers')
import {abi} from "./hecABI.js"

const itx = new ethers.providers.InfuraProvider(
  'ropsten', // or 'ropsten', 'rinkeby', 'kovan', 'goerli'
  'ea6f9231bd6f4dfbb3a263e281865f31' // I know this isn't the greatest thing sorry
)

export default {
    getContractName: getContractName,
    getCard: getCard,
    waitTransaction: waitTransaction,
  }

//contract deployed: https://ropsten.etherscan.io/address/0x20b77a15a7fb1efdcda8500d5a1767b4490f889c
const hecAddress = "0x20b77A15a7fb1EFdcda8500d5a1767B4490F889C";
const hecABI =  abi.hec;
const hecContract = new ethers.Contract(hecAddress, hecABI, itx)

const wait = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }
  
  async function waitTransaction(relayTransactionHash) {
    let mined = false
  
    while (!mined) {
      const statusResponse = await itx.send('relay_getTransactionStatus', [
        relayTransactionHash
      ])
  
      if (statusResponse.broadcasts) {
        for (let i = 0; i < statusResponse.broadcasts.length; i++) {
          const bc = statusResponse.broadcasts[i]
          const receipt = await itx.getTransactionReceipt(bc.ethTxHash)
          if (receipt && receipt.confirmations && receipt.confirmations > 1) {
            mined = true
            return receipt
          }
        }
      }
      await wait(1000)
    }
  }
async function getContractName() {
    const contractName = await hecContract.name()
    return(contractName)
}

async function signRequest(tx) {
    const relayTransactionHash = ethers.utils.keccak256(
      ethers.utils.defaultAbiCoder.encode(
        ['address', 'bytes', 'uint', 'uint', 'string'],
        [tx.to, tx.data, tx.gas, 4, tx.schedule] // Ropsten chainId is 3
      )
    )
    return await signer.signMessage(ethers.utils.arrayify(relayTransactionHash))
  }

async function getCard(address, tokenId) {
    console.log("getting card")
    //const computedAddress = ethers.utils.computeAddress(address)
    console.log("computed address")
    const metamask = new ethers.providers.Web3Provider(window.ethereum)
    const mmSigner = metamask.getSigner()
    console.log("signer set")
    const hecWithSigner = hecContract.connect(mmSigner)
    console.log("wallet connected to signer")
    const tx = hecWithSigner.safeMint(address, tokenId)
    await wait(45000)
    console.log(tx)
}


async function getBalance() {
    response = await itx.send('relay_getBalance', [signer.address])
    console.log(`Your current ITX balance is ${response.balance}`)
  }



  async function deposit(signer) {
    const tx = await signer.sendTransaction({
      // ITX deposit contract (same address for all public Ethereum networks)
      to: '0x015C7C7A7D65bbdb117C573007219107BD7486f9',
      // Choose how much ether you want to deposit to your ITX gas tank
      value: ethers.utils.parseUnits('0.1', 'ether')
    })
    // Waiting for the transaction to be mined
    await tx.wait()
  }

  async function callContract() {
    const iface = new ethers.utils.Interface(['function echo(string message)'])
    const data = iface.encodeFunctionData('echo', ['Hello world!'])
    const tx = {
      to: '0x6663184b3521bF1896Ba6e1E776AB94c317204B6',
      data: data,
      gas: '100000',
      schedule: 'fast'
    }
    const signature = await signRequest(tx)
    const relayTransactionHash = await itx.send('relay_sendTransaction', [
      tx,
      signature
    ])
    console.log(`ITX relay hash: ${relayTransactionHash}`)
    return relayTransactionHash
  }
