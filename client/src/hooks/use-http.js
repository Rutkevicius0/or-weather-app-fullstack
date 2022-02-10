import { useCallback } from 'react';
const useHttp = () => {
  const sendRequest = useCallback(async (requestFor, value, callbackFn) => {
    let url = 'https://foreca-weather.p.rapidapi.com/';
    if (requestFor === 'search') {
      url = url + `location/search/${value}?lang=en`;
    } else if (requestFor === 'info') {
      url = url + `location/${value}`;
    } else if (requestFor === 'current') {
      url =
        url +
        `current/${value}?alt=0&tempunit=C&windunit=MS&tz=Europe%2FVilnius&lang=en`;
    } else if (requestFor === 'forecast') {
      url =
        url +
        `forecast/daily/${value}?alt=0&tempunit=C&windunit=MS&periods=8&dataset=full`;
    }
    if (value === '') {
      return;
    }

    try {
      await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          callbackFn(data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {}
  }, []);

  return { sendRequest };
};

export default useHttp;
