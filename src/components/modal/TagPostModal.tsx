/* eslint-disable import/no-extraneous-dependencies */
import { SubmitHandler, useForm } from 'react-hook-form';
import PrimaryButton from '../utils/ReUse/PrimaryButton';
import PrimaryInput from '../utils/ReUse/PrimaryInput';

interface IFormInput {
  name: string
}

function TagPostModal() {
  // const [postTag, { isSuccess, isLoading, isError }] = usePostSingleTagMutation();

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = () => {};

  return (
    <section
      className="flex flex-col items-center justify-center gap-6 text-textColor min-h-[calc(100%-4rem)] px-8 py-2"
    >
      <form
        action=""
        className="space-y-common"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-[1.3rem] font-medium tracking-wide">Write Your Tag</h2>
        <PrimaryInput
          type="text"
          id="tagName"
          name="tagName"
          lable="Tag Name"
          register={register}
          errorCondition={{ required: true }}
          error={errors}
        />
        <PrimaryInput
          type="text"
          id="color"
          name="color"
          lable="Color Name"
          register={register}
          errorCondition={{ required: true, maxLength: 5 }}
          error={errors}
        />
        <PrimaryButton
          type="submit"
        >
          Submit
        </PrimaryButton>
      </form>
    </section>
  );
}

export default TagPostModal;
