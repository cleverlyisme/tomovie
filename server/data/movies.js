const movies = [
  {
    name: "Army Of The Dead",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "1a.jpg",
    image: "1.jpg",
    category: "Western",
    language: "English",
    year: 2022,
    time: 3,
    video: "",
    rate: 3,
    // reviews: 23,
  },
  {
    name: "The Conjuring",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "2b.jpg",
    image: "2.jpg",
    category: "Thriller",
    language: "Chinese",
    year: 1999,
    time: 4,
    video: "",
    rate: 5,
    // reviews: 10,
  },
  {
    name: "Army Of The Dead",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "1a.jpg",
    image: "1.jpg",
    category: "Western",
    language: "English",
    year: 2022,
    time: 3,
    video: "",
    rate: 2.4,
    // reviews: 23,
  },
  {
    name: "The Conjuring",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "2b.jpg",
    image: "2.jpg",
    category: "Thriller",
    language: "Chinese",
    year: 1999,
    time: 4,
    video: "",
    rate: 3.7,
    // reviews: 10,
  },
  {
    name: "Army Of The Dead",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "1a.jpg",
    image: "1.jpg",
    category: "Western",
    language: "English",
    year: 2022,
    time: 3,
    video: "",
    rate: 4.2,
    // reviews: 23,
  },
  {
    name: "The Conjuring",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "2b.jpg",
    image: "2.jpg",
    category: "Thriller",
    language: "Chinese",
    year: 1999,
    time: 4,
    video: "",
    rate: 1,
    // reviews: 10,
  },
  {
    name: "Army Of The Dead",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "1a.jpg",
    image: "1.jpg",
    category: "Western",
    language: "English",
    year: 2022,
    time: 3.2,
    video: "",
    rate: 1.5,
    // reviews: 23,
  },
  {
    name: "The Conjuring",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "2b.jpg",
    image: "2.jpg",
    category: "Thriller",
    language: "Chinese",
    year: 1999,
    time: 2.2,
    video: "",
    rate: 3.4,
    // reviews: 10,
  },
  {
    name: "Army Of The Dead",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "1a.jpg",
    image: "1.jpg",
    category: "Western",
    language: "English",
    year: 2022,
    time: 2.4,
    video: "",
    rate: 3.4,
    // reviews: 23,
  },
  {
    name: "The Conjuring",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "2b.jpg",
    image: "2.jpg",
    category: "Thriller",
    language: "Chinese",
    year: 1999,
    time: 2.7,
    video: "",
    rate: 3.8,
    // reviews: 10,
  },
  {
    name: "Army Of The Dead",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "1a.jpg",
    image: "1.jpg",
    category: "Western",
    language: "English",
    year: 2022,
    time: 3,
    video: "",
    rate: 2.9,
    // reviews: 23,
  },
  {
    name: "The Conjuring",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "2b.jpg",
    image: "2.jpg",
    category: "Thriller",
    language: "Chinese",
    year: 1999,
    time: 4,
    video: "",
    rate: 5,
    // reviews: 10,
  },
  {
    name: "Army Of The Dead",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "1a.jpg",
    image: "1.jpg",
    category: "Western",
    language: "English",
    year: 2022,
    time: 3,
    video: "",
    rate: 3.4,
    // reviews: 23,
  },
  {
    name: "The Conjuring",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "2b.jpg",
    image: "2.jpg",
    category: "Thriller",
    language: "Chinese",
    year: 1999,
    time: 4,
    video: "",
    rate: 5,
    // reviews: 10,
  },
  {
    name: "Army Of The Dead",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "1a.jpg",
    image: "1.jpg",
    category: "Western",
    language: "English",
    year: 2022,
    time: 3,
    video: "",
    rate: 3.4,
    // reviews: 23,
  },
  {
    name: "The Conjuring",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "2b.jpg",
    image: "2.jpg",
    category: "Thriller",
    language: "Chinese",
    year: 1999,
    time: 4,
    video: "",
    rate: 5,
    // reviews: 10,
  },
  {
    name: "Army Of The Dead",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "1a.jpg",
    image: "1.jpg",
    category: "Western",
    language: "English",
    year: 2022,
    time: 0.8,
    video: "",
    rate: 4.6,
    // reviews: 23,
  },
  {
    name: "The Conjuring",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "2b.jpg",
    image: "2.jpg",
    category: "Thriller",
    language: "Chinese",
    year: 1999,
    time: 1.5,
    video: "",
    rate: 2.4,
    // reviews: 10,
  },
  {
    name: "Army Of The Dead",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    titleImage: "1a.jpg",
    image: "1.jpg",
    category: "Western",
    language: "English",
    year: 2022,
    time: 2,
    video: "",
    rate: 3,
    // reviews: 23,
  },
];

module.exports = movies;