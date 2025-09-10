import { useForm, type FieldValues } from "react-hook-form";
import { Inputs } from "@/components/inputs";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Inputs.Text placeholder="Email" {...register("email")} />
        <Inputs.Text placeholder="Password" {...register("password")} />
        <button
          type="submit"
          className=" cursor-pointer bg-blue-500 text-white p-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}
