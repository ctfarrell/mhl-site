import mhl_citizens from '../utils/mhl-citizens.js'
import LinkWalletForm from './LinkWalletForm.js'
import { useState, useEffect } from 'react';
import HunterEducationCard from './HunterEducationCard.js';
import { HiArrowRight } from "react-icons/hi";
import {HiCheck} from 'react-icons/hi'
import { ethers } from 'ethers';
import ethereums from '../utils/ethereum.js'
import FadeLoader from "react-spinners/FadeLoader";
import { isNull } from 'util';



export default function HunterFlow() {
    const [linkedWalletState, updateWalletState] = useState(false)
    const [userName,updateUserName] = useState("")
    const [currentWalletAddress,updateWalletAddress] = useState("")
    const [classComplete, updateClassComplete] = useState(false)
    const [hecClaimed, updateHecClaimed] = useState(false)
    const [userState, updateUserState] = useState({})
    const [transactionPending, updateTransactionPending] = useState(false)
    const [walletLinking, updateWalletLinking] = useState(false)


    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page


    useEffect(() => {
        console.log("wallet state", linkedWalletState)
        }, [linkedWalletState]);
/*
    useEffect(()=>{
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        console.log("we have an address" + userAccount)
        updateWalletAddress(account)
        })

    function nextSteps(classCompleted,hecClaimed) {
        if(classCompleted && hecClaimed) {
            return true
        } if(classCompleted && !hecClaimed)
    }
        
*/
    async function checkTransaction(hash) {
        var i = 0
        while (i < 1) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            try{const receipt = await provider.getTransactionReceipt(hash)
            console.log(receipt)
            console.log("confirmations: ", receipt.confirmations)
            i = i + receipt.confirmations}
            catch(err){console.log(err)}
            console.debug("iterable: ",i)
            await ethereums.wait(1000)
        }
    }

    async function acquireCard(){
        console.log(currentWalletAddress,userState.tokenId)
        updateTransactionPending(true)
        try{
            const getCardResult = await ethereums.getCard(currentWalletAddress, userState.tokenId)
            console.log(getCardResult)
            console.log(getCardResult.hash)
            updateHecClaimed(true)
            try{const checkup = await checkTransaction(getCardResult.hash)
                console.debug(checkup)
                updateTransactionPending(false)
                const updatedUserDoc = await updateTokenClaimed(userState.address)
                console.log(updatedUserDoc)
                updateUserState(updatedUserDoc.data)
            } catch(err){console.log(err)
            updateTransactionPending(false)}
        } catch(err) {
            console.debug("failed to acquire card ",err)
            updateTransactionPending(false)
        }
}

async function updateTokenClaimed(_address) {
    try{
      var userDoc = await mhl_citizens.getCitizenByAddress1(_address)
      console.log(userDoc)
      console.log(userDoc.ref.value.id)
      var updatedUserDoc = await mhl_citizens.updateTokenClaimed(userDoc.ref.value.id)
      return(updatedUserDoc)
    } catch(err) {console.debug("unable to claim token ", err)}
}


    async function getContract() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const name = await ethereums.getContractName()
        console.log(name)
        //const hecContract = new ethers.Contract(ethereums.hecAddress, ethereums.hecAbi, provider)
        //console.log(hecContract.getContractName())
    }
    async function getCitizenAccount() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        updateWalletAddress(account)
        return (account)
    }

    async function accountExists() {
        updateWalletLinking(true)
         try{
            const userAccount = await getCitizenAccount()
            console.log("we have an address" + userAccount)
            const userData = await mhl_citizens.getCitizenByAddress1(userAccount)
            console.log("waiting on the user data")
            console.log(userData.data.firstName)
            updateUserName(userData.data.firstName)
            if(userData!=='undefined'){console.log("wallet state is true"); 
            updateWalletState(true)
            updateClassComplete(userData.data.classCompleted)
            console.debug("is class complete? ",classComplete)
            updateUserState(userData.data)
        updateWalletAddress(userAccount)
        updateWalletLinking(false)}
         } catch(err){
             console.log("address doesn't exist",err)
             updateUserState({})
             updateHecClaimed(false)
             updateWalletLinking(true)
         }
    }



    return (
        <div className = "flex flex-col w-screen bg-primary">
            <span className="flex flex-initial flex-col w-full h-1/2 z-20">
                    <h1 className="text-5xl text-white text-center mx-auto pt-10">HUNTER REGISTRATION</h1>
                <div className="flex flex-row self-center justify-items-center align-items-center space-x-10 mt-10">
                    <div className="flex flex-col flex-none h-80 w-80 mx-auto place-items-center cursor-pointer place-self-auto group p-3">
                        <div className="flex flex-none rounded-full h-1/3 w-1/3 bg-white ">
                            {linkedWalletState? <HiCheck className = "flex mx-auto my-auto place-items-center align-center" size="50"/>:
                            walletLinking? <p  className = "flex mx-auto my-auto pl-2 place-items-center align-center"><FadeLoader/></p>:
                            <p/>}
                        </div>
                        <h1 className="group-hover:font-bold text-white text-3xl font-bold text-center pt-8">Register</h1>
                        {!linkedWalletState?
                        <button className="my-10 py-2 bg-gray-50 border-2 border-primary bg-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 mx-auto block w-full p-2.5"
                                onClick = {accountExists} >{!walletLinking?"Connect Wallet":"Connecting Wallet"}
                        </button>:
                        <button className="my-10 py-2 bg-gray-50 border-2 border-primary bg-grey-400 text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 mx-auto block w-full p-2.5"
                        >Wallet Connected
                        </button>}
                    </div>
                    <HiArrowRight className = "my-top h-35 mt-8" color="white" size="60"/>
                    <div className="flex flex-col flex-none h-80 w-80 mx-auto place-items-center cursor-pointer place-self-auto group p-3">
                        <div className="flex flex-none rounded-full h-1/3 w-1/3 bg-white ">
                            {userState.classCompleted? <HiCheck className = "flex mx-auto my-auto place-items-center align-center" size="50"/>:<p/>}
                        </div>
                        <h1 className="group-hover:font-bold text-white text-3xl font-bold text-center pt-8">Complete the Class</h1>
                        {!userState.classCompleted?
                        <button className="my-10 py-2 bg-gray-50 border-2 border-primary bg-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 mx-auto block w-full p-2.5"
                                onClick={accountExists}>Schedule Class
                        </button>:
                        <button className="my-10 py-2 bg-gray-50 border-2 border-primary bg-grey-400 text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 mx-auto block w-full p-2.5"
                            >Class Completed
                            </button>
                        }
                    </div>
                    <HiArrowRight className = "my-top h-35 mt-8" color="white" size="60"/>
                    <div className="flex flex-col flex-none h-80 w-80 mx-auto place-items-center cursor-pointer place-self-auto group p-3">
                        <div className="flex flex-none rounded-full h-1/3 w-1/3 bg-white ">
                            {userState.tokenClaimed? <HiCheck className = "flex mx-auto my-auto place-items-center align-center" size="50"/>:
                            transactionPending?<p  className = "flex mx-auto my-auto pl-2 place-items-center align-center"><FadeLoader/></p>:
                            <p/>}
                        </div>
                        <h1 className="group-hover:font-bold text-white text-3xl font-bold text-center pt-8">Claim your Card</h1>
                        {userState.classCompleted&&!userState.tokenClaimed?
                        <button className="my-10 py-2 bg-gray-50 border-2 border-primary bg-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 mx-auto block w-full p-2.5"
                                onClick={acquireCard}>Claim Card
                        </button>:
                        <button className="my-10 py-2 bg-gray-50 border-2 border-primary bg-grey-400 text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 mx-auto block w-full p-2.5">
                            Card Claimed
                        </button>
                        }
                    </div>
                </div>
            </span>
            <div className = "flex flex-col">
                {linkedWalletState?
                <p></p>
                    :
                    <LinkWalletForm 
                    linkedWalletState = {linkedWalletState}
                    updateWalletState = {updateWalletState}
                    userName = {userName}
                    updateUserName = {updateUserName}
                    address={currentWalletAddress} />
                }
            </div>
            {userState.tokenClaimed?
            <div className = "flex">
                <HunterEducationCard 
                firstName = {userState.firstName} 
                lastName = {userState.lastName} 
                issueDate = {userState.cardIssueDate} 
                address={currentWalletAddress} 
                token = {userState.tokenId} 
                instructor={userState.instructor}
                birthDate = {userState.birthDate}/>
            </div>:
            <p></p>
            }
        </div>
    )
}
