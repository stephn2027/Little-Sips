import axios from 'axios';
import {toast} from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
  
    if (!expectedError) {
      // console.log("logging the error", error);
      // alert("An unexpected error occurred.");
      
      toast.error('An unexpected error occurred.');
    }
  
    return Promise.reject(error);
  });

  // eslint-disable-next-line import/no-anonymous-default-export
  export default{
      get: axios.get,
      set: axios.post,
      put: axios.put,
      delete: axios.delete,
  }
  