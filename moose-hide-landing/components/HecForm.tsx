import { useForm, useFormState } from 'react-hook-form';
import mhl_citizens from '../utils/mhl-citizens.js'


export default function HecForm() {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = data => {
      console.log(data)
      mhl_citizens.createCard(data.CitizenId,data.FirstName,data.LastName, data.Email, data.CardId)
  };
  const { isSubmitSuccessful } = useFormState({
    control
  })
  console.log(errors);
  
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
        type="email" 
        placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />

      <input
        className = "py-2 bg-gray-50 border-2 border-secondary text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-auto w-1/5 p-2.5" 
        type="submit" />
    </form>
  );
}

