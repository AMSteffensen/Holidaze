const KEY = process.env.REACT_APP_API_KEY
const url = "https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1/"
const proxy = "https://noroffcors.herokuapp.com/"
export const BASE_URL = proxy + url

export const headers = {
  "Content-Type": "application/json",
  key: KEY,
}
export const PATCH = "PATCH"
export const DELETE = "DELETE"
