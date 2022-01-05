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
    venue: "London's King's Place",
    location: "London",
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
        text: "The Cantata being performed today is BWV 26 - Ach wie flüchtig, ach wie nichtig. The chorale of this name forms the linchpin of the outer movements and it is the only time Bach used this chorale in his cantatas. The melody of the chorale, written by Michael Franck in 1652, is used by others and the organ prelude today is a movement for manuals only (that is, no organ pedals!) from a set of variations on this tune by Georg Bohm (1661 - 1733), an organist whom J S Bach hugely admired and who may even have been his teacher.The irresistable combination of three oboes brought a wealth of different repertoire to mind, but I have been enjoying digging into lesser-known works by George-Philipp Telemann this season and this movement from his “Darmstadt” Ouverture (the title of which roughly translates as “boasting”!) is a witty interplay between the wind and string teams.",
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
    series: "Sample Series",
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
