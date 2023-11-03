import api from "../axios";

const useStudentsApi = {
  getAllStudents: () => api.get("/student"),
  getOneStudent: (id) => api.get(`/student/${id}`),
  getSummary: () => api.get("/summary"),
  createStudent: (data) => api.post("/student/register", data),
  updateStudent: (data, id) => api.put(`/student/${id}`, data),
};

export default useStudentsApi;
