const url = `https://oae-mock-api.herokuapp.com/events/${id}`;

export const getEvent = async () => {
  fetch(url)
    .then((res) => res.json())
    .then((event) => {
      console.log(event);
    });
};
