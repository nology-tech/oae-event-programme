const url = `https://oae-mock-api.herokuapp.com/events/${id}`;

export const getEvent = async () => {
  fetch(url)
    .then((res) => res.json())
    .then((event) => {
      console.log(event);
    });
};

// function showGithubUser(handle) {
//   const url = `https://api.github.com/users/${handle}`
//   fetch(url)
//     .then(resp => resp.json())
//     .then(user => {
//       console.log(user.name)
//       console.log(user.location)
//     })
// }
// showGithubUser(‘minsooshin’)
