// In ../API/CoverLetterService.js
import axios from "axios";

export const baseURLL = "http://localhost:8080"; // Or import from ResumeService.js
export const axiosInstance = axios.create({
  baseURL: baseURLL,
}); // Or import from ResumeService.js

export const generateCover = async (description) => {
  const response = await axiosInstance.post("/api/v1/generate/coverLetter", {
    userDescription: description,
  });
  return response.data;
};