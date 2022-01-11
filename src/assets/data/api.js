export const getEvent = async (id) => {
  const url = `https://oae-mock-api.herokuapp.com/events/${id}`;

  return fetch(url)
    .then((resp) => resp.json())
    .then((event) => event);
};
