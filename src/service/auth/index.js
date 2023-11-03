import api from "../axios";

const useAuthApi = {
  login: (data) => api.post("/admin/login", data),
  getMe: () => api.get("/admin/get-my-data"),
};

export default useAuthApi;
