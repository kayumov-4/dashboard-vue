import api from "../axios";

const useCoursesApi = {
  getAllCourses: () => api.get("/course"),
  getOneCourse: (id) => api.get(`/course/${id}`),
  createCourse: (data) => api.post("/course", data),
  updateCourse: (data, id) => api.put(`/course/${id}`, data),
};

export default useCoursesApi;
