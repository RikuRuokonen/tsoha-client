

const logoutUnauthorized = () =>  {
  sessionStorage.removeItem("authenticated")
}

export const callApi = (url, options = {}, headers = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...options,
  };

  return fetch(url, defaultOptions)
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      if(res.status === 401) {
        logoutUnauthorized()
      }
      return res.json();
    })
    .catch(error => {
      console.log(error)
      throw error;
    })
}

export default callApi;