export const getMockEventById = (id) => {
  return events.filter((event) => event.id === id.toString())[0];
};

// MOCK DATA
export const events = [
  {
    id: "6bb8ffe8-6e5e-4abc-be7f-b05b749849cf",
    name: "Infant Musicality",
    series: "Bach, The Universe & Everything",
    date: "12-12-21/11.30",
    location: "King's Place, London",
    imageSrc: "images/placeholder.png",
    content: [
      {
        heading:
          "If this is your first Bach, the Universe & Everything (BAE), welcome!",
        text: "We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced cantatas at an extraordinary rate, providing innovative music for the weekly services at the church where he worked from 1723 until his death in 1750. At that time, the congregation was as open to science and new ideas as it was united by faith. It is in the spirit that we come together for a thought-provoking cantata and a talk from a leading scientist. <br> Professor Jon Chapman from the University of Oxford invites us to ponder the fleeting moment when sound waves reach our ears before they disappear. Using some careful calculations, Jon suggests that we might even be able to hear the shape of a drum.",
      },
      {
        heading:
          "A note from our Principal Keyboard, Steven Devine, about today's programme",
        text: "lorem ipsumn etc.",
      },
    ],
    schedule: [
      {
        name: "Welcome",
        title: null,
        author: null,
        description: null,
        alternateDescription: null,
      },
      {
        name: "Cantata",
        title: "Ach wie fluchtig, ach wie nichtig BWV 26",
        author: "JS Bach",
        description: "",
        alternateDescription: "", // This is used for any lyric translations. It will create a tab in the component that the end-user can switch between.
      },
    ],
    theme: {
      type: 1,
      fontType: 1,
    },
  },
  {
    id: "5101a840-5606-4097-9b66-a567213ae915",
    name: "Sample Name",
    series: "Sample Name",
    date: "01-01-22/12.45",
    location: "Sample Location",
    imageSrc: "images/placeholder.png",
    content: [
      {
        heading: "Sample Heading 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit blandit, sodales libero non, mollis odio. Duis rhoncus urna nec magna accumsan malesuada.",
      },
      {
        heading: "Sample Heading 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec ligula suscipit, rhoncus sapien eu, varius est. Morbi vestibulum, massa id facilisis vestibulum, quam nibh interdum est, et sollicitudin nulla enim efficitur leo.",
      },
    ],
    schedule: [
      {
        name: "Sample Schedule Item 1",
        title: null,
        author: null,
        description: null,
        alternateDescription: null,
      },
      {
        name: "Sample Schedule Name 2",
        title: "Sample Schedule Title 2",
        author: "Sample Schedule Author 2",
        description: "",
        alternateDescription: "", // This is used for any lyric translations. It will create a tab in the component that the end-user can switch between.
      },
    ],
    theme: {
      type: 2,
      fontType: 2,
    },
  },
];
