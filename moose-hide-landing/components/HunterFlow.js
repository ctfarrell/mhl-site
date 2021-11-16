import mhl_citizens from '../utils/mhl-citizens.js'
import LinkWalletForm from './LinkWalletForm.js'
import { useState, useEffect } from 'react';
import HunterEducationCard from './HunterEducationCard.js';

export default function HunterFlow() {
    const [linkedWalletState, updateWalletState] = useState(false)
    const [userName,updateUserName] = useState("")
    const [currentWalletAddress,updateWalletAddress] = useState("")
    const [classCompleted, updateClassComplete] = useState(false)
    const [hecClaimed, updateHecClaimed] = useState(false)


    useEffect(() => {
        console.log(linkedWalletState)
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
    async function getCitizenAccount() {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        updateWalletAddress(account)
        return (account)
    }

    async function accountExists() {
         try{
            const userAccount = await getCitizenAccount()
            console.log("we have an address" + userAccount)
            const userData = await mhl_citizens.getCitizenByAddress1(userAccount)
            console.log("waiting on the user data")
            console.log(userData.data.firstName)
            updateUserName(userData.data.firstName)
            if(userData!=='undefined'){console.log("wallet state is true"); updateWalletState(true)
        updateWalletAddress(userAccount)}
         } catch(err){
             console.log("address doesn't exist",err)
             updateWalletState(false)
         }
    }

    return (
        <div 
        className = "flex flex-col w-screen bg-primary">
            <button
                className="my-10 py-2 bg-gray-50 border-2 border-primary bg-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 mx-auto block w-1/5 p-2.5"
                onClick = {accountExists}
                >Connect Wallet
            </button>
            <div className = "flex flex-col">
                {linkedWalletState?
                    <p className = "text-white text-3xl mx-auto">
                    Hi {userName}, your wallet is linked!
                    </p>
                    :
                    <LinkWalletForm 
                    linkedWalletState = {linkedWalletState}
                    updateWalletState = {updateWalletState}
                    userName = {userName}
                    updateUserName = {updateUserName}
                    address={currentWalletAddress} />
                }
            </div>
            <div className = "flex ">
                <HunterEducationCard firstName = "Chance" lastName = "Farrell" issueDate = "10/21/2018"/>
            </div>
        </div>
    )
}
