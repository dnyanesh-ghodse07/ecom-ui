import axios from 'axios';

const BASE_URL = `http://localhost:4000/api/`;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzExMzA4MDczYThmYzM3NmQzNDQ5ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTE3ODM0NCwiZXhwIjoxNjY5NDM3NTQ0fQ.mkb777o9W3a9EiGFVsrMBb1uYA8riGM43Nns9sXcbuM";

export const publicRequest = axios.create(({
    baseURL: BASE_URL,
}))

export const userRequest =   axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`,
    }
})
export {BASE_URL};