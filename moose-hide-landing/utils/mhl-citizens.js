import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
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
function createCard(_id, _firstName, _lastName,_email,_tokenId) 
  {client.query(
    q.Create(
      q.Collection('mhl-citizens'),
      { data: {citizenId: _id,
        firstName: _firstName,
        lastName: _lastName,
        email: _email,
        tokenId: _tokenId,
        cardIssueDate:"today",
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
    console.log(docWithId)
}

function getCitizenByAddress(_address) {
    let docWithAddress = client.query(q.Get(
        q.Match("address", _id)))
        console.log(docWithId)
}

function updateCitizenById (_id) {

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
    getCitizenById: getCitizenById,
    getAllCitizens: getAllCitizens
  }