/* eslint-disable import/no-extraneous-dependencies */
import { SubmitHandler, useForm } from 'react-hook-form';
import { usePostSingleTagMutation } from '../../feauters/Tags/TagsApi';
import useHotToast from '../hook/useHotToast';
import PrimaryButton from '../utils/ReUse/PrimaryButton';
import PrimaryInput from '../utils/ReUse/PrimaryInput';

interface IFormInput {
  name: string
}

function TagPostModal() {
  const [postTag, { isSuccess, isLoading, error }] = usePostSingleTagMutation();

  useHotToast({
    isLoading, isSuccess, error, itemName: 'tag',
  });

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (inpurdata) => {
    const data = {
      ...inpurdata,
      postAt: new Date().toDateString(),
    };
    postTag(JSON.stringify(data));
    console.log(inpurdata);
  };

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
          errorCondition={{ required: true, maxLength: 20 }}
          maxLengthText="max length is 20"
          error={errors}
        />
        <PrimaryInput
          type="text"
          id="colorCode"
          name="colorCode"
          lable="Color Code"
          register={register}
          errorCondition={{ required: true, minLength: 7, maxLength: 7 }}
          maxLengthText="only 7 carecter is accepted"
          minLengthText="only 7 carecter is accepted"
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
