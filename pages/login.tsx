import useAuth from "@/hooks/useAuth";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div
      className="relative flex h-screen w-screen flex-col bg-black md:items-center
    md:justify-center md:bg-transparent"
    >
      <Head>
        <title>Netflix | Login</title>
        <meta name="description" content="Login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/images/netflix-banner.jpg"
        fill
        className="-z-10 !hidden opacity-60 sm:!inline object-cover"
        alt="Logo"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <form
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6
      md:mt-0 md:max-w-md md:px-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              {...register("email", { required: true })}
              className="input"
              type="email"
              placeholder="email"
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              className="input"
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => {
            setLogin(true);
          }}
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix?{" "}
          <button
            type="submit"
            className="text-white hover:underline"
            onClick={() => {
              setLogin(false);
            }}
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
