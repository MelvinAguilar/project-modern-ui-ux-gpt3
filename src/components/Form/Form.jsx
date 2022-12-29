import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import InputField from "./InputField/InputField";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    reset();
  };

  return (
    <form
      className="mx-auto w-full max-w-[39.375rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center gap-4 rounded-lg sm:flex-row sm:justify-between sm:gap-0">
        <InputField
          id="mail"
          className="relative flex-1"
          nameGroup="mail"
          placeholder="Enter your email address"
          label="Input your email"
          innerRef={{
            ...register("mail", {
              required: {
                value: true,
                message: "Please add an email",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email",
              },
            }),
          }}
          validation={errors.mail}
        >
          <div aria-live="polite" aria-atomic="true" className="w-full">
            {errors.mail?.type === "required" && (
              <ErrorMessage>{errors.mail.message}</ErrorMessage>
            )}
            {errors.mail?.type === "pattern" && (
              <ErrorMessage>{errors.mail.message}</ErrorMessage>
            )}
          </div>
        </InputField>
        <button
          type="submit"
          className="h-[3.5rem] w-full bg-orange px-8 font-[700] text-white transition duration-300 ease-in-out hover:bg-light-orange sm:w-auto"
        >
          Contact Us
        </button>
      </div>
    </form>
  );
};

export default Form;
