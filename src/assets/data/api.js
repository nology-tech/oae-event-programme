const url = `https://oae-mock-api.herokuapp.com/events/${id}`;

export const getEvent = async (id) => {
  fetch(url)
    .then((res) => res.json())
    .then((event) => {
      console.log(event);
    });
};

async function getUserAsync() {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
