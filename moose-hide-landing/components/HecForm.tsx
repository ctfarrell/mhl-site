import { useForm, useFormState } from 'react-hook-form';
import mhl_citizens from '../utils/mhl-citizens.js'


export default function HecForm() {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = data => {
      console.log(data)
      createOrUpdateCard(data.CitizenId,data.FirstName,data.LastName, data.Email, data.CardId, data.instructor,data.bDay,data.issueDate)
  };
  const { isSubmitSuccessful } = useFormState({
    control
  })
  console.log(errors);
  async function createOrUpdateCard(_CitizenId,_FirstName,_LastName, _Email, _cardId, _instructor,_birthday,_issueDate) {
    try{
      var userValidationData = await userExists(_CitizenId)
      console.debug("user exists!")
    } catch (err) {console.debug("failed user validation",err)}
    if(userValidationData.existence){
      try{
        console.log(userValidationData.ref)
        var updatedUserData = await updateExistingCard(userValidationData.ref,_FirstName,_LastName, _Email,_cardId, _instructor,_birthday,_issueDate)
        console.debug(updatedUserData)
      } catch(err) {console.debug("failed to update user info",updatedUserData,err)}
    }
    else {
      try {
        var selfCreatedUserData = await createNewCard(_CitizenId,_FirstName,_LastName, _Email, _cardId, _instructor,_birthday,_issueDate)
        console.debug("user self created successfully", selfCreatedUserData)
      } catch (err) {console.debug("user failed to self create",selfCreatedUserData,err)}
    }
  }
  async function userExists(_id){
    try {
      console.log("before Id check")
      const userDoc = await mhl_citizens.getCitizenById(_id)
      console.log("after Id Check",userDoc)
      console.log(userDoc.ref.value.id)
      return ({existence: true,
              ref:userDoc.ref.value.id
      })
    } catch (err) {console.log(err); return({existence: false, error: err})
  }
}
async function updateExistingCard(_ref,_FirstName,_LastName, _Email, _cardId, _instructor,_birthday,_issueDate){
  try {
  const citizenData = await mhl_citizens.updateCardByRef(_ref,_FirstName,_LastName,_Email,_cardId, _instructor,_birthday,_issueDate)
  return citizenData
} catch (err) {console.log(err)}
}

async function createNewCard(_CitizenId,_FirstName,_LastName, _Email, _cardId, _instructor,_birthday,_issueDate){
  try {
  const citizenData = await mhl_citizens.createCard(_CitizenId,_FirstName,_LastName, _Email, _cardId, _instructor,_birthday,_issueDate)
  return citizenData
} catch (err) {console.log(err)}
}
  return (
    <form
        className = "flex flex-auto flex-col w-2/3 mx-auto space-y-6 pt-6" 
        onSubmit={handleSubmit(onSubmit)}>
      <div className = "flex text-gray-900 text-xl font-bold rounded-lg block w-full p-2.5 mx-auto"> 
      {isSubmitSuccessful? "User Registered!": ""}
      </div>
      <input
        className = "py-2 bg-gray-50 border-2 border-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="text" 
        placeholder="First name" {...register("FirstName", {required: true, maxLength: 80})} />
      <input 
        className = "py-2 bg-gray-50 border-2 border-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="text" 
        placeholder="Last name" {...register("LastName", {required: true, maxLength: 100})} />
      <input        
        className = "py-2 bg-gray-50 border-2 border-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="text" 
        placeholder="Citizen Id" {...register("CitizenId", {})} />
      <input 
        className = "py-2 bg-gray-50 border-2 border-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="number" 
        placeholder="Card Id" {...register("CardId", {required: true, maxLength: 12})} />
      <input 
        className = "py-2 bg-gray-50 border-2 border-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="text" 
        placeholder="Issue Date" {...register("issueDate", {required: true, maxLength: 100})} />
      <input 
        className = "py-2 bg-gray-50 border-2 border-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="text" 
        placeholder="Instructor name" {...register("instructor", {required: true, maxLength: 100})} />
      <input 
        className = "py-2 bg-gray-50 border-2 border-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="email" 
        placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input 
        className = "py-2 bg-gray-50 border-2 border-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="text" 
        placeholder="Birth date" {...register("bDay", {required: true, maxLength: 100})} />
      <input
        className = "py-2 bg-gray-50 border-2 border-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-auto w-1/5 p-2.5" 
        type="submit" />
    </form>
  );
}

