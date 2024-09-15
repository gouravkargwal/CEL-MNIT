import axios from "axios"
const mySecret = process.env.REACT_APP_BASE_URL
const API = axios.create({ baseURL: mySecret })

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`
  }
  return req
})

// mentorship endpoints
export const fetchmentorship = () => API.get("/mentorship")
export const createExperience = (newExperience) => API.post(`/mentorship`, newExperience)
export const updateExperience = (id, updatedExperience) =>
  API.patch(`/mentorship/${id}`, updatedExperience)
export const deleteExperience = (id) => API.delete(`/mentorship/${id}`)
export const comment = (value, id) => API.post(`/mentorship/${id}/comment`, { value })
export const fetchmentorshipBySearch = (searchQuery) =>
  API.get(
    `/mentorship/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  )
export const fetchmentorshipByFilter = (searchQuery) =>
  API.get(`/mentorship/filter?query=${searchQuery.searchTerm || "none"}`)

// courses endpoints
export const fetchCourses = () => API.get("/courses")
export const fetchCoursesBySearch = (searchQuery) =>
  API.get(
    `/courses/search?searchQuery=${searchQuery.search || "none"}&tags=${searchQuery.tags}`
  )
export const fetchCoursesByFilter = (searchQuery) =>
  API.get(`/courses/filter?query=${searchQuery.searchTerm || "none"}`)

// auth endpoints
export const signIn = (formData) => API.post("/login", formData)
export const signUp = (formData) => API.post("/register", formData)
