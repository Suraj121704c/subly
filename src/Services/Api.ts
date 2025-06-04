import { instance, formInstance } from "./axiosService";

class ApiConfig {
  postJSON(URL: string, params = {}) {
    return instance.post(URL, params);
  }

  postFormJSON(URL: string, params = {}) {
    return formInstance.post(URL, params);
  }

  getJSON(URL: string) {
    return instance.get(URL);
  }

  deleteJSON(URL: string) {
    return instance.delete(URL);
  }

  putJSON(URL: string, params = {}) {
    return instance.put(URL, params);
  }

  patchJSON(URL: string, params = {}) {
    return instance.patch(URL, params);
  }
}

export const Api = new ApiConfig();
