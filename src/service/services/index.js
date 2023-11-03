import api from "../axios";

const useServicesApi = {
  getAllServices: () => api.get("/service"),
  getOneService: (id) => api.get(`/service/?id=${id}`),
  createService: (data) => api.post("/service", data),
  registerService: (data) => api.post("/user/register", data),
  updateService: (data, id) => api.put(`/service/${id}`, data),

  // updateCourse: (data) => api.put("/course", data),
};

export default useServicesApi;
