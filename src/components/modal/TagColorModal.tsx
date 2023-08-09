import { SubmitHandler, useForm } from 'react-hook-form';
import PrimaryButton from '../utils/ReUse/PrimaryButton';
import PrimaryInput from '../utils/ReUse/PrimaryInput';

interface IFormInput {
  tagColor: string
}

function TagColorModal() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <section
      className="flex-center flex-col gap-6 text-textColor min-h-[calc(100%-4rem)] px-8 py-2"
    >
      <form
        action=""
        className="space-y-common"
        onSubmit={handleSubmit(onSubmit)}
      >
        <PrimaryInput
          type="text"
          id="tagColor"
          name="tagColor"
          lable="Tag Color"
          register={register}
          errorCondition={{ required: true, maxLength: 5 }}
          error={errors}
        />
        <PrimaryButton>
          Submit
        </PrimaryButton>
      </form>
    </section>
  );
}

export default TagColorModal;
