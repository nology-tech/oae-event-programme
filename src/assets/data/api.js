import axios from "axios";

export const getEvent = async (id) => {
  const url = `https://aoeo-338811.ey.r.appspot.com/events/${id}`;
  const axiosResult = axios
    .get(url)
    .then((event) => event.data)
    .catch(() => null);

  return axiosResult;
};
