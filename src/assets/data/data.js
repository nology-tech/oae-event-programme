textColorexport const getMockEventById = (id) => {
  return events.filter((event) => event.id === id.toString())[0];
};

// MOCK DATA
export const events = [
  {
    id: "6bb8ffe8-6e5e-4abc-be7f-b05b749849cf",
    name: "Infant Musicality",
    series: "Bach, The Universe & Everything",
    time: "11.30",
    date: "12-12-21",
    venue: "King's Place",
    location: "London",
    imageSrc:
      "https://oae.co.uk/wp-content/uploads/2021/07/MicrosoftTeams-image-5-1250x825.jpg",
    imageAlt: "Event Poster",
    content: [
      {
        heading:
          "If this is your first Bach, the Universe & Everything (BAE), welcome!",
        text: "We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced cantatas at an extraordinary rate, providing innovative music for the weekly services at the church where he worked from 1723 until his death in 1750. At that time, the congregation was as open to science and new ideas as it was united by faith. It is in the spirit that we come together for a thought-provoking cantata and a talk from a leading scientist. Professor Jon Chapman from the University of Oxford invites us to ponder the fleeting moment when sound waves reach our ears before they disappear. Using some careful calculations, Jon suggests that we might even be able to hear the shape of a drum.",
      },
      {
        heading:
          "A note from our Principal Keyboard, Steven Devine, about today's programme",
        text: "The Cantata being performed today is BWV 26 - Ach wie flüchtig, ach wie nichtig. The chorale of this name forms the linchpin of the outer movements and it is the only time Bach used this chorale in his cantatas. The melody of the chorale, written by Michael Franck in 1652, is used by others and the organ prelude today is a movement for manuals only (that is, no organ pedals!) from a set of variations on this tune by Georg Bohm (1661 - 1733), an organist whom J S Bach hugely admired and who may even have been his teacher.The irresistable combination of three oboes brought a wealth of different repertoire to mind, but I have been enjoying digging into lesser-known works by George-Philipp Telemann this season and this movement from his 'Darmstadt' Ouverture (the title of which roughly translates as 'boasting'!) is a witty interplay between the wind and string teams.",
      },
    ],
    schedule: [
      {
        name: "Welcome",
        title: null,
        author: null,
        description:
          "Non ad labore aliqua adipisicing et laborum exercitation. Enim consectetur aliquip eu commodo. Eiusmod ipsum anim exercitation consectetur elit amet voluptate aliquip ullamco. Duis deserunt dolore et officia ullamco voluptate culpa eiusmod cupidatat ullamco sit anim incididunt nulla. Nisi et et commodo non dolor amet aliquip exercitation. Et fugiat consequat mollit cillum anim aliquip commodo laboris enim voluptate ullamco ipsum nostrud qui. Laboris duis cillum duis aliqua cupidatat nulla.",
        alternateDescription:
          "Not to do any iterative fatigue and fatigue. For the main objectives of the EU. This type of exercise enhanced the mind's desire to enjoy the objectives of any school. They abandon the school district offices in pain and pleasure through no fault of that kind If not, the pain will not be comfortable and the objectives of the exercise are important. And he shuns the consequences of the softening of his soul, for the pleasure of his labors, for the pleasure of any one of us. Laboris duis cillum duis something longing for none.",
      },
      {
        name: "Cantata",
        title: "Ach wie fluchtig, ach wie nichtig BWV 26",
        author: "JS Bach",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta nibh venenatis cras sed felis eget velit.",
        alternateDescription:
          "The pain itself is the love of the pain, the main ecological problems, but I give this kind of time to fall down, so that some great pain and pain. That's the gate of the venenatis tomorrow, but the cat needs to choose.",
      },
    ],
    theme: {
      templateTheme: "Modern",
      primaryColour: "#8BA0E3",
      textColour: "#FFFFFF",
      subtitleColor: "#FFFFC7",
    },
  },
  {
    id: "5101a840-5606-4097-9b66-a567213ae915",
    name: "Can You Hear The Shape of a Drum?",
    series: "Bach, The Universe & Everything",
    time: "11.30",
    date: "21-11-21",
    venue: "King's Place",
    location: "London",
    imageSrc:
      "https://oae.co.uk/wp-content/uploads/2021/07/Shape-of-drum-artwork-fb-event-1250x825.jpg",
    imageAlt: "Event Poster",
    content: [
      {
        heading:
          "If this is your first Bach, the Universe & Everything (BAE), welcome!",
        text: "We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced cantatas at an extraordinary rate, providing innovative music for the weekly services at the church where he worked from 1723 until his death in 1750. At that time, the congregation was as open to science and new ideas as it was united by faith. It is in the spirit that we come together for a thought-provoking cantata and a talk from a leading scientist. Professor Jon Chapman from the University of Oxford invites us to ponder the fleeting moment when sound waves reach our ears before they disappear. Using some careful calculations, Jon suggests that we might even be able to hear the shape of a drum.",
      },
      {
        heading: "Can you hear the shape of a Drum?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis augue et urna volutpat aliquam quis at ipsum. ",
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
        name: "Prelude",
        title: "Ach wie fluchtig, ach wie nichtig",
        author: "Georg Bohm",
        description: null,
        alternateDescription: null,
      },
      {
        name: "Polyphony",
        title: "Haec Dies",
        author: "William Byrd",
        description: null,
        alternateDescription: null,
      },
      {
        name: "Reading",
        title: "Beat! Beat! Drums!",
        author: "Walt Whitman",
        description: null,
        alternateDescription: null,
      },
      {
        name: "Cantata",
        title: "Ach wie fluchtig, ach wie nichtig BWV 26",
        author: "JS Bach",
        description: null,
        alternateDescription: null,
      },
      {
        name: "Science",
        title: "Can You Hear The Shape of a Drum?",
        author: "Professor John Chapman",
        description: null,
        alternateDescription: null,
      },
      {
        name: "Closing",
        title: null,
        author: null,
        description: null,
        alternateDescription: null,
      },
      {
        name: "Postlude",
        title: "Darmstadt Ouverture TWV55:g4 'Gasconnade'",
        author: "Telemann",
        description: null,
        alternateDescription: null,
      },
    ],
    theme: {
      templateTheme: "Classic",
      primaryColour: "#FA825D",
      textColour: "#FFFFFF",
      subtitleColor: "#FFFFC7",
    },
  },
  {
    id: "5354a913-2375-1357-9y37-a522213ae315",
    name: "Undiscovered Universe",
    series: "Bach, The Universe & Everything",
    time: "13.45",
    date: "Sun 06 Feb 2022",
    venue: "King's Place",
    location: "London",
    imageSrc:
      "https://oae.co.uk/wp-content/uploads/2020/04/Undiscovered-Universe-oae-web-1250x825.jpg",
    imageAlt: "Event Poster",
    content: [
      {
        heading:
          "If this is your first Bach, the Universe & Everything (BAE), welcome!",
        text: "We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced cantatas at an extraordinary rate, providing innovative music for the weekly services at the church where he worked from 1723 until his death in 1750. At that time, the congregation was as open to science and new ideas as it was united by faith. It is in the spirit that we come together for a thought-provoking cantata and a talk from a leading scientist. Professor Jon Chapman from the University of Oxford invites us to ponder the fleeting moment when sound waves reach our ears before they disappear. Using some careful calculations, Jon suggests that we might even be able to hear the shape of a drum.",
      },
      {
        heading:
          "A note from our Principal Keyboard, Steven Devine, about today's programme",
        text: "The Cantana by Bach, Ich steh mit einem Fuß in Grabe BWV 156 is a chamber-sized composition with references to two chorale meoldies in the composition. One of these, sung by the soprano in the second movement, is the melody 'Machs mit mir, Gott, nach deiner GÜt' by Johann Hermann Schein in 1628, and i have chosen another setting of this melody by Bach as an opening organ prelude. One of the mose memorable (and well-known)features of the Cantana is the opening sinfonia for the solo oboe and strings, which also exists in a later version for harpsichord and strings, and it seemed very appropriate to continue the concerted apperance of the oboe in the closing music - a wonderful question and answer texture conjured up by the ever-imaginative Telemann",
      },
    ],
    schedule: [
      {
        name: "Welcome",
        title: null,
        author: null,
        description:
          "Exercitation duis excepteur eiusmod eiusmod enim quis cupidatat non. Nostrud tempor pariatur proident reprehenderit amet eu ullamco veniam est amet fugiat excepteur occaecat. Ea elit do sunt non ullamco eiusmod eiusmod aliqua eiusmod laboris in cupidatat quis esse. Nisi consequat qui aliqua commodo adipisicing non et id officia velit nulla. Lorem occaecat laborum duis incididunt reprehenderit qui.",
        alternateDescription:
          "Not to do any iterative fatigue and fatigue. For the main objectives of the EU. This type of exercise enhanced the mind's desire to enjoy the objectives of any school. They abandon the school district offices in pain and pleasure through no fault of that kind If not, the pain will not be comfortable and the objectives of the exercise are important. And he shuns the consequences of the softening of his soul, for the pleasure of his labors, for the pleasure of any one of us. Laboris duis cillum duis something longing for none.",
      },
      {
        name: "Prelude",
        title: "Fugiat consectetur aliquip mollit cupidatat in.",
        author: "Harry Cliff",
        description: "Machs mit mir, Gott, nach deiner GÜt BMV 957.",
        alternateDescription:
          "The pain itself is the love of the pain, the main ecological problems, but I give this kind of time to fall down, so that some great pain and pain. That's the gate of the venenatis tomorrow, but the cat needs to choose.",
      },
    ],
    theme: {
      templateTheme: "Modern",
      primaryColour: "#e6bfd3",
      textColour: "#000000",
      subtitleColor: "#FFFFC7",
    },
  },
];
