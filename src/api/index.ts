import axios from "axios";

export const api = axios.create({
    baseURL: 'https://private-anon-d961bd650c-blissrecruitmentapi.apiary-mock.com'
})