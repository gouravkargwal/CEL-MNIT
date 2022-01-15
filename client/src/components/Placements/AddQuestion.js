import React, { useEffect } from "react"
import Button from "../utilities/Button"
import Input from "../authform/Input"
import Label from "../portal/Label"
import { useForm, FormProvider } from "react-hook-form"

const AddQuestion = ({ openForm, setOpenForm, initialData }) => {
  // const [isLogin, setIsLogin] = useState(true)
  const formMethods = useForm()
  const {
    handleSubmit,
    register,
    setValue,
    //  formState: { errors },
  } = formMethods

  const dispatch = useDispatch()
  const history = useHistory()

  // get user profile from local storage
  const user = JSON.parse(localStorage.getItem("profile"))

  // handle onSubmit event
  const onSubmit = (data) => {
    console.log(data)
    if (initialData) {
      dispatch(updateQuestion(initialData._id, data))
      setOpenForm(!openForm)
      history.push(`/opportunities/${initialData._id}`)
    } else {
      dispatch(createQuestion({ ...data, name: user?.result?.name }))
      setOpenForm(!openForm)
      history.push("/opportunities")
    }
  }

  useEffect(() => {
    if (initialData) {
      for (const key in initialData) {
        setValue(key, initialData[key])
      }
    }
  }, [initialData, setValue])

  return (
    <div
      className={`transition ${
        !openForm ? "transform translate-x-full hidden" : "-translate-x-full"
      }`}
    >
      <div
        className="fixed top-0 left-0 flex items-center justify-center w-full h-screen z-10 bg-white bg-opacity-10 cursor-pointer"
        onClick={() => setOpenForm(!openForm)}
      ></div>

      <div className="fixed top-0 left-0 z-20">
        <FormProvider {...formMethods}>
          <form
            className="w-screen max-w-3xl h-screen bg-white p-14 pb-28"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-2xl font-semibold text-primary-dark">
              Share an Question!
            </h1>
            <div className="overflow-scroll w-full h-full flex flex-col px-1 pr-7">
              <div>
                <Label labelName="Company Name" />
                <Input inputName="company" type="text" />
              </div>

              <div>
                <Label labelName="Job Title" />
                <Input inputName="title" type="text" />
              </div>

              <div>
                <Label labelName="Job Link" />
                <Input inputName="link" type="text" />
              </div>
              <div>
                <Label labelName="Experience" />
                <small className="text-xs font-semibold text-secondary-dark text-extralight pb-1">
                  Add a clear, concise Job Description
                </small>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="8"
                  className="w-full bg-secondary-light p-4 rounded-md shadow-sm text-primary-dark font-bold text-sm outline-none focus:ring-1 focus:ring-tertiary-dark"
                  {...register("description", { required: true })}
                ></textarea>
              </div>
            </div>

            {/* form buttons */}
            <div className="flex justify-between bg-white py-6 pr-7">
              <Button
                btnText="Discard"
                iconType="fas fa-times"
                bgColor="bg-red-500"
                type="button"
              />
              <Button
                btnText="Submit"
                iconType="fas fa-arrow"
                bgColor="bg-neutral"
                type="submit"
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default AddQuestion
