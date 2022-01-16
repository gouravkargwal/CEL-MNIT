import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { createExperience, updateExperience } from "../../actions/experiences"
import Item from "./Item"

const AddQuestion = ({ openForm, setOpenForm, initialData, questionList = true }) => {
  // const [isLogin, setIsLogin] = useState(true)
  const formMethods = useForm()
  const {
    control,
    handleSubmit,
    register,
    setValue,
    //  formState: { errors },
  } = formMethods

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  })

  const dispatch = useDispatch()
  const history = useHistory()

  // get user profile from local storage
  const user = JSON.parse(localStorage.getItem("profile"))

  // handle onSubmit event
  const onSubmit = (data) => {
    if (initialData) {
      dispatch(updateExperience(initialData._id, data))
      setOpenForm(!openForm)
      history.push("/interview-experiences")
    } else {
      dispatch(createExperience({ ...data, name: user?.result?.name }))
      setOpenForm(!openForm)
      history.push("/interview-experiences")
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
        {/* <section className="flex justify-center items-center">
          <div className="w-full min-h-screen max-w-3xl bg-white rounded-md shadow-sm overflow-y-scroll"> */}
        <FormProvider {...formMethods}>
          <form
            className="w-screen max-w-3xl h-screen bg-white p-14 pb-28"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-2xl font-semibold text-primary-dark">
              Share your Interview Experience!
            </h1>
            <div className="overflow-y-scroll w-full h-full flex flex-col px-1 pr-7">
              <div className="flex justify-between">
                <div className="mr-4 w-3/4 ">
                  <Label labelName="Company Name" />
                  <Input inputName="company" type="text" />
                </div>

                <div>
                  <Label labelName="Role" />
                  <Input inputName="role" type="text" />
                </div>
              </div>

              <div>
                <Label labelName="Question Title" />
                <small className="text-xs font-semibold text-secondary-dark text-extralight pb-1">
                  Add a short,descriptive headline
                </small>
                <Input inputName="title" type="text" />
              </div>
              <div>
                <Label labelName="Experience" />
                <small className="text-xs font-semibold text-secondary-dark text-extralight pb-1">
                  Feels free to include all sort of questions,tips,resources etc.{" "}
                </small>
                {/* <Input inputName="Detail" type="text" /> */}
                <textarea
                  name="description"
                  id="experience"
                  cols="30"
                  rows="8"
                  className="w-full bg-secondary-light p-4 rounded-md shadow-sm text-primary-dark font-bold text-sm outline-none focus:ring-1 focus:ring-tertiary-dark"
                  {...register("description", { required: true })}
                ></textarea>
              </div>

              {/* Question List */}
              {questionList && (
                <>
                  <h1 className=" text-secondary-dark text-light mt-6 mb-2 font-semibold">
                    Question List
                  </h1>
                  <div>
                    {fields.map((question, index) => (
                      <Item
                        key={question.id}
                        index={index}
                        fieldId={`questions.${index}`}
                        remove={remove}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="w-full bg-secondary-light text-primary-dark border-none rounded-full mt-4 p-4 text-sm font-bold flex justify-center"
                    onClick={(e) => {
                      e.preventDefault()
                      append({ question: "" })
                    }}
                  >
                    <span className="font-semibold mr-1">+</span>Add New Question
                  </button>
                </>
              )}
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
        {/* </div>
        </section> */}
      </div>
    </div>
  )
}
export default AddQuestion
