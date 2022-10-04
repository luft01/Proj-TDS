import { useForm } from "react-hook-form";

function Form() {


    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();


    const loginUser = data => console.log(data);

    return (

         <form onSubmit={handleSubmit(loginUser)}>

            <input type="email" className="input-form" {...register("name", { required: true })} />

            {errors.name && <span className="span-form">Fill the username</span>}

            <input type="password" className="input-form"{...register("password", { required: true })} />

            {errors.password && <span className="span-form">Fill the password</span>}

            <input type="submit" className="input-form" />

            <input type="button" className="input-form" onClick={() => reset()} value="Limpar" />

            </form>

    );

}

export default Form;