import { useForm, useFormState } from 'react-hook-form';
import mhl_citizens from '../utils/mhl-citizens.js'


export default function LinkWalletForm(props) {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = data => {
      console.log(data)
      createOrUpdateNewCitizen(data.CitizenId,data.FirstName,data.LastName, data.Email, props.address)
  };
  const { isSubmitSuccessful } = useFormState({
    control
  })

  async function createOrUpdateNewCitizen(_CitizenId,_FirstName,_LastName, _Email, _Address) {
    try{
      var userValidationData = await userExists(_CitizenId)
      console.debug("user exists!")
    } catch (err) {console.debug("failed user validation",err)}
    if(userValidationData.existence){
      try{
        console.log(userValidationData.ref)
        var updatedUserData = await updateExistingUser(userValidationData.ref,_FirstName,_LastName, _Email, _Address)
        console.debug(updatedUserData)
        props.updateWalletState(true)
        props.updateUserName(_FirstName)
      } catch(err) {console.debug("failed to update user info",updatedUserData,err)}
    }
    else {
      try {
        var selfCreatedUserData = await createNewUser(_CitizenId,_FirstName,_LastName, _Email, _Address)
        console.debug("user self created successfully", selfCreatedUserData)
        props.updateWalletState(true)
        props.updateUserName(_FirstName)
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

  async function updateExistingUser(_ref,_FirstName,_LastName, _Email, _Address){
    try {
    const citizenData = await mhl_citizens.updateCitizenByRef(_ref,_Address,_FirstName,_LastName,_Email)
    return citizenData
  } catch (err) {console.log(err)}
}

  async function createNewUser(_CitizenId,_FirstName,_LastName, _Email, _Address){
    try {
    const citizenData = await mhl_citizens.citizenSelfCreate(_CitizenId,_FirstName,_LastName, _Email, _Address)
    return citizenData
  } catch (err) {console.log(err)}
}
  console.log(errors);
  
  return (
    <form
        className = "flex flex-auto flex-col w-2/3 mx-auto space-y-6 pt-6" 
        onSubmit={handleSubmit(onSubmit)}>
      <div className = 'h-8 w-1/2 font-bold text-white'> {isSubmitSuccessful? "Successful Submit": ""}</div>
      <input
        className = "py-2 bg-gray-50 border-2 border-primary bg-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="text" 
        placeholder="First name" {...register("FirstName", {required: true, maxLength: 80})} />
      <input 
        className = "py-2 bg-gray-50 border-2 border-primary bg-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="text" 
        placeholder="Last name" {...register("LastName", {required: true, maxLength: 100})} />
      <input
        className = "py-2 bg-gray-50 border-2 border-primary bg-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="text" 
        placeholder="Citizen Id" {...register("CitizenId", {})} />
      <input 
        className = "py-2 bg-gray-50 border-2 border-primary bg-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="email" 
        placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />

      <input
        className = "py-2 bg-gray-50 border-2 border-primary bg-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 mx-auto block w-1/2 p-2.5" 
        type="submit"
        name="form_submit" />
    </form>
  );
}

