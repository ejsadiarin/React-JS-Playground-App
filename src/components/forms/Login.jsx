// uses React Hook Form Library -> for form handling and validation
// RHF docs: https://react-hook-form.com/ 
// check example: https://react-hook-form.com/form-builder
import { useForm } from "react-hook-form"

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input required type="text" placeholder="Username" {...register("username")} />
      <input type="email" placeholder="Email" {...register("email")} />
      <input type="number" placeholder="Age" {...register("age")} />
      <input 
        type="password" 
        placeholder="Password" 
        {...register("password")}
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        {...register("confirmPassword")}
      />
      <input type="submit" />
    </form>
  )
}