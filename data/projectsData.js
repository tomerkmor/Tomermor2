const dummyData = [
  {
    id: '',
    img: "/projects/tictactoe.jpg",
    title: "Tic Tac Toe",
    description:
      "The Classic game.",
    keyFeatures: ["Props drilling", "useState", "Practising logic and writing"],
    cons: ["Pretty basic and lacks of material"],
    link: "/projects/tic-tac-toe",
    github: 'https://github.com/tomerkmor/React-Repo/tree/master/02%20-%20Tic%20Tac%20Toe',
    techs: ['React', 'JavaScript', 'Vanilla CSS' ]
  },
  {
    id: '2',
    img: "/projects/countdown.jpg",
    title: "Reaction Game",
    description: "Try to click exactly in time.",
    keyFeatures: ["Working with times", "Components sync practise", "useRef"],
    cons: ["Not a big project, lacks of state managements"],
    link: "https://reaction-game-tomermor.netlify.app/",
    github: 'https://github.com/tomerkmor/React-Repo/tree/master/03%20-%20Reaction%20Game',
    techs: ['React', 'JavaScript', 'Vanilla CSS' ]
  },
  {
    id: '3',
    img: "/projects/project-management.jpg",
    title: "Projects Management",
    description: "Manage, organize and keep track of your tasks!",
    keyFeatures: ["Hooks practise", "usePortal", "TailWind"],
    cons: [
      "I used props drilling instead of Redux or useContext",
      "No backend/server",
    ],
    link: "https://project-management-tomermor.netlify.app/",
    github: 'https://github.com/tomerkmor/React-Repo/tree/master/04%20-%20Project%20Management',
    techs: ['React', 'JavaScript', 'Tailwind CSS' ]
  },
  {
    id: '4',
    img: "/projects/place-picker.jpg",
    title: "Place Picker",
    description: "Pick your dream vaction!",
    keyFeatures: [
      "Hooks practise",
      "Animations",
      "LocalStorage",
      "Creation of Modals",
    ],
    cons: ["Requires Geolocation access"],
    link: "/projects/place-planner",
    github: 'https://github.com/tomerkmor/React-Repo/tree/master/07%20-%20Place%20Planner%20-%20useEffect',
    techs: ['React', 'useContext','JavaScript', 'Vanilla CSS']
  },
  {
    id: '5',
    img: "/projects/react-game.jpg",
    title: "React Game",
    description: "Test your knowledge about react!",
    keyFeatures: ["Working with heavy timers", "CSS", "Heavy logic"],
    cons: ["Redux not used"],
    link: "https://react-quiz-tomermor.netlify.app/",
    github: 'https://github.com/tomerkmor/React-Repo/tree/master/08%20-%20React%20Quiz',
    techs: ['React', 'useContext','JavaScript', 'Vanilla CSS']
  },{
    id: '6',
    img: "/projects/authentication.jpg",
    title: "Authentication Forms",
    description: "Login and Register with bcyrpt.",
    keyFeatures: ["Working with heavy timers", "CSS", "Heavy logic"],
    cons: ["Redux not used"],
    link: "/projects/auth/login",
    github: 'https://github.com/tomerkmor/React-Repo/tree/master/08%20-%20React%20Quiz',
    techs: ['React', 'useContext','JavaScript', 'Vanilla CSS']
  }
];

export default dummyData;
