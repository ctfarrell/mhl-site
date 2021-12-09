import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET','POST','HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }
var faunadb = require('faunadb'),
  q = faunadb.query

var client = new faunadb.Client({
    //I know this is bad, I'm just super behind
    secret: 'fnAEX71b-OACUPNQdc_uFxSFmm8gvQsrNZ-FbksX',
    domain: 'db.fauna.com',
    // NOTE: Use the correct domain for your database's Region Group.
    port: 443,
    scheme: 'https',
})

function getAllCitizens () {
    let lengthOfAddress = client.query(q.Count(
        q.Documents(q.Index("address"))))
        console.log(lengthOfAddress)

}
function createCard(_id, _firstName, _lastName,_email,_tokenId,_instructor,_birthDate,_issueDate) 
  {client.query(
    q.Create(
      q.Collection('mhl-citizens'),
      { data: {citizenId: _id,
        firstName: _firstName,
        lastName: _lastName,
        email: _email,
        tokenId: _tokenId,
        cardIssueDate: _issueDate,
        birthDate: _birthDate,
        instructor: _instructor,
        classCompleted: true,
        walletLinked: false,
        tokenClaimed: false}
     }
  )
)
}


    // check if the address already exists
    // if the wallet doesn't then prompt user to input info
    // if the userId exists
    // then update address


function getCitizenById(_id, _firstName, _lastName) {
    let docWithId = client.query(q.Get(
    q.Match("ID", _id)))
    return docWithId
}

function getCitizenByAddress1(_address) {
  const docWithAddress = client.query(q.Get(
      q.Match("address", _address)))
      return docWithAddress
  }

function getCitizenByAddress(_address) {
    client.query(q.Get(
        q.Match("address", _address)))
        .then(result=>{
          return(result)
        })
        .catch(error=>console.log("this is the error log",error))
}


function updateTokenClaimed (ref){
  const tokenClaimedDoc = client.query(
    q.Update(q.Ref(
      q.Collection('mhl-citizens'),ref),
      { data: {tokenClaimed: true}}))
      return tokenClaimedDoc
}

function updateCardByRef (ref,_firstName, _lastName,_email,_tokenId,_instructor,_birthDate,_issueDate) {
  {client.query(
    q.Update(q.Ref(
      q.Collection('mhl-citizens'),ref),
      { data: {firstName: _firstName,
        lastName: _lastName,
        email: _email,
        tokenId: _tokenId,
        cardIssueDate: _issueDate,
        birthDate: _birthDate,
        instructor: _instructor,
        walletLinked: true,
        classCompleted: true}
     }
  )
)
}
}



function updateCitizenByRef (ref,_address,_firstName,_lastName,_email) {
  {client.query(
    q.Update(q.Ref(
      q.Collection('mhl-citizens'),ref),
      { data: {firstName: _firstName,
        lastName: _lastName,
        email: _email,
        address: _address,
        walletLinked: true}
     }
  )
)
}
}

function citizenSelfCreate(_id, _firstName, _lastName,_email,_address) 
  {client.query(
    q.Create(
      q.Collection('mhl-citizens'),
      { data: {citizenId: _id,
        firstName: _firstName,
        lastName: _lastName,
        email: _email,
        address: _address,
        classCompleted: false,
        walletLinked: true,
        tokenClaimed: false}
     }
    )
)
}




/*
var createUser () = client.query(
    q.Create(
      q.Collection('mhl-citizens'),
      { data: { testField: 'testValue' } }
    )
)
*/
/*
async function createCardHandler(_id, _firstName, _lastName) {
    // Run the middleware
    await runMiddleware(req, res, cors)
  
    createCard(_id, _firstName, _lastName).then(function(response) {
        console.log(response.ref); // Logs the ref to the console.
      })
    res.json({ message: 'Hello Everyone!' })
  }
*/
export default {
    //create: createCardHandler,
    createCard: createCard,
    getCitizenByAddress: getCitizenByAddress,
    getCitizenByAddress1: getCitizenByAddress1,
    getCitizenById: getCitizenById,
    getAllCitizens: getAllCitizens,
    updateCitizenByRef: updateCitizenByRef,
    citizenSelfCreate: citizenSelfCreate,
    updateCardByRef: updateCardByRef,
    updateTokenClaimed: updateTokenClaimed,
  }