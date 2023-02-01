import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:brdthompson02@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center overflow-wrap md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center mt-12">
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Thank you for taking the time to look through my website. I always
          love to chat so feel free to reach out{" "}
        </h4>
        <div>
          <div className="flex items-center space-x-5 py-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse" />
            <p className="text-2xl">brdthompson02@gmail.com</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2">
              <input
                {...register("name")}
                className="contactInput"
                placeholder="Name"
                type="text"
              />
              <input
                {...register("email")}
                className="contactInput"
                placeholder="Email"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              className="contactInput"
              placeholder="Subject"
              type="text"
            />
            <textarea
              {...register("message")}
              className="contactInput"
              placeholder="Message"
            />
            <button
              className="bg-white py-5 px-10 rounded-md text-black font-bold text-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
