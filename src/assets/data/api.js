import axios from "axios";

export const getEvent = async (id) => {
  const url = `https://oae-mock-api.herokuapp.com/events/${id}`;

  return axios.get(url).then((event) => event.data);
};
