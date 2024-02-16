import axios from "axios";

export const $mail = axios.create({
  baseURL: "https://api.mailjet.com/",
  auth: {
    username: process.env.MAILJET_USR_KEY || "",
    password: process.env.MAILJET_PWD_KEY || "",
  },
});
