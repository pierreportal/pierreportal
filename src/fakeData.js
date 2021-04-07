// const Post = require('../../models/Post')
const data = {
  skills: [
    { label: "JAVASCRIPT", level: 8 },
    { label: "TYPESCRIPT", level: 7 },
    { label: "ES6", level: 8 },
    { label: "NODE JS", level: 6 },
    { label: "GRAPHQL", level: 4 },
    { label: "EXPRESS", level: 6 },
    { label: "MONGODB", level: 6 },
    { label: "MONGOOSE", level: 6 },
    { label: "REACT", level: 8 },
    { label: "VUE", level: 5 },
    { label: "HTML", level: 9 },
    { label: "CSS", level: 9 },
    { label: "DOCKER", level: 3 },

    { label: "PYTHON", level: 6 },
    { label: "MACHINE LEARNING", level: 6 },
    { label: "DEEP LEARNING", level: 5 },
    { label: "NLP", level: 4 },
    { label: "NUMPY", level: 6 },
    { label: "PYTORCH", level: 4 },
    { label: "TENSORFLOW", level: 3 },
    { label: "KERAS", level: 5 },
    { label: "SCIKIT-LEARN", level: 6 },

    { label: "GIT", level: 6 },
    { label: "GRAPHIC DESIGN", level: 6 },
    { label: "AGILE METHODOLOGY", level: 6 },
    { label: "PROJECT MANAGEMENT", level: 6 },
    { label: "TESTING (TDD)", level: 6 },
  ],

  experience: [
    {
      header: "Software Engineer",
      company: "Zendesk",
      details: [
        `"Zendesk is a service-first CRM company that builds software designed to improve customer relationships. Our software is powerful and flexible, and scales to meet the needs of any business. Even yours." (see zendesk.com/about)`,
        "Stack used: Javascript, es6, TypeScript, GraphQL, Ruby, Rails, HTML, CSS",
      ],
      dates: "Apr 2021-present",
    },
    {
      header: "Full Stack Software Developer",
      company: "LAWLIFT",
      details: [
        "LAWLIFT is a legal tech company offering solutions to law firms and big companies for creating dynamic legal document templates. I am working as a full stack software developer and I am in charge of building new exciting features or fixing bugs and issues in an agile working environment.",
        "Stack used: Javascript, es6, Node js, Meteor, Vue, JQuery, HTML, CSS",
      ],
      dates: "Jan 2020-Apr 2021",
    },
    {
      header: "Teacher Assistant",
      company: "Ironhack - Berlin",
      details: [
        "Being part of the teaching team, I was assisting the lead teacher during the lectures and supporting students in labs and projects. This experience allowed me to reinforce my knowledge, work on my own technical projects and keep learning more advanced topics. I also gave lectures and conducted technical interviews. As well I developed valuable skills in project management, debugging, and tutoring.",
        "Stack used: Javascript, es6, Node js, Express, React, MongoDB, HTML, CSS",
      ],
      dates: "Aug-Dec 2019",
    },
  ],

  works: [
    {
      title: "Neural Network Playground",
      baseline:
        "A visual playground where we can build, compile and train a small fully connected neural network.",
      icon: "🤖",
      // date: "May 6",
      source: "Github",
      url: "https://github.com/pierreportal/neural-network-playground",
      categories: ["machine learning"],
      tech: ["python", "tensorflow", "javascript", "react"],
    },

    {
      title: "Machine Learning | Anomaly detection",
      baseline: "Using probability and statistics.",
      icon: "🧠",
      // date: "May 6",
      source: "Medium",
      url:
        "https://medium.com/@hello.pierreportal/machine-learning-anomaly-detection-d0f8d8492975",
      categories: ["machine learning"],
      tech: ["python"],
    },
    {
      title: "Understand Entropy and Cross-entropy",
      baseline: "",
      icon: "🧮",
      // date: "Apr 20",
      source: "Medium",
      url:
        "https://medium.com/@hello.pierreportal/understand-entropy-and-cross-entropy-8d37c698e698",
      categories: ["other"],
    },
    {
      title: "Asymptotic analysis 101",
      baseline: "Big O",
      icon: "💻",
      // date: "Apr 18",
      source: "Medium",
      url:
        "https://medium.com/@hello.pierreportal/asymptotic-analysis-101-c48e956a7b18",
      categories: ["other"],
    },
    {
      title: "Deep learning | Study notes",
      baseline: "Basic equations for the fully connected Neural Network.",
      icon: "🧠",
      // date: "Dec 20",
      source: "Medium",
      url:
        "https://medium.com/@hello.pierreportal/deep-learning-equations-to-remember-a8c5d769c201",
      categories: ["machine learning"],
      tech: ["python", "tensorflow"],
    },
    {
      title: "Neural network introduction | Part 3",
      baseline: "Backward propagation.",
      icon: "🧠",
      // data: "Nov 15, 2018",
      source: "Medium",
      url:
        "https://medium.com/@hello.pierreportal/neural-network-introduction-part-3-5a1ccabc51f8",
      categories: ["machine learning"],
      tech: ["python", "tensorflow"],
    },
    {
      title: "Optimisation | Gradient descent",
      baseline: "And a refresher on derivatives.",
      icon: "∇",
      // data: "Nov 9, 2018",
      source: "Medium",
      url:
        "https://medium.com/@hello.pierreportal/optimisation-gradient-descent-879c4c95cbda",
      categories: ["machine learning"],
    },
    {
      title: "Neural network introduction | Part 2",
      baseline: "Forward propagation and Cost function.",
      icon: "🧠",
      // data: "Nov 6, 2018",
      source: "Medium",
      url:
        "https://medium.com/@hello.pierreportal/neural-network-forward-propagation-and-cost-function-f6bf2545ed18",
      categories: ["machine learning"],
      tech: ["python", "tensorflow"],
    },
    {
      title: "Neural network introduction | Part 1",
      baseline: "Building the model.",
      icon: "🧠",
      // data: "Nov 4, 2018",
      source: "Medium",
      url:
        "https://medium.com/@hello.pierreportal/neural-network-building-the-model-dc56610f0e0b",
      categories: ["machine learning"],
      tech: ["python", "tensorflow"],
    },

    {
      title: "Genetic algorithm",
      baseline: "Example of genetic algorithm in JavaScript using p5.",
      icon: "🧬",
      source: "Github",
      url: "https://github.com/pierreportal/genetic-algorithm",
      deploy: "https://pierreportal.github.io/genetic-algorithm/",
      categories: ["other", "web"],
      tech: ["javascript", "p5"],
    },
    {
      title: "p5 collision",
      baseline:
        "This is an introduction lecture to object distance and collision detection in p5 sketches I presented as a teacher assistant at Ironhack, Berlin.",
      icon: "🚀",
      source: "Github",
      url: "https://github.com/pierreportal/p5-collision",
      deploy: "https://pierreportal.github.io/p5-collision/",
      categories: ["other", "web"],
      tech: ["javascript", "p5"],
    },
    {
      title: "Machine learning lab | k-mean clustering",
      baseline: "",
      icon: "🤖",
      source: "Github",
      url:
        "https://github.com/pierreportal/machine-learning-lab-k-mean-clustering",
      categories: ["machine learning"],
      tech: ["python"],
    },
    {
      title: "Machine learning lab | Anomaly detection",
      baseline: "Machine learning for anomaly detection.",
      icon: "🤖",
      source: "Github",
      url:
        "https://github.com/pierreportal/machine-learning-lab-anomaly-detection",
      categories: ["machine learning"],
      tech: ["python"],
    },
    {
      title: "Space !",
      baseline: "Javascript game with p5.",
      icon: "👽",
      source: "Github",
      url: "https://github.com/pierreportal/space",
      deploy: "https://pierreportal.github.io/space/",
      categories: ["web", "other", "design"],
      tech: ["javascript", "p5"],
    },
    {
      title: "NodeJS command line chat app",
      baseline: "Mini chat app running on the command line.",
      icon: "📟",
      source: "Github",
      url: "https://github.com/pierreportal/nodejs-chat-app",
      deploy: "",
      categories: ["web", "other"],
      tech: ["javascript", "nodeJS", "socket.io"],
    },
  ],
  education: [
    {
      header: "Udacity Deep Learning Nanodegree",
      company: "Udacity",

      details:
        "Projects: Predictions of bike Sharing patterns (With a Neural Network built with Python and Numpy), Dog Breed Classifier (Building a CNN from scratch, then using Transfer Learning), Generate TV Script (NLP, LSTM network), Generate Faces (With Generative Adversarial Network), Deploying a Sentiment Analysis Model.",
      dates: "Apr-Aug 2020",
    },
    {
      header: "Web development bootcamp",
      company: "Ironhack - Berlin",
      details:
        "During the bootcamp, I learned the best practice for developing full MERN stack applications.",
      dates: "Jun-Aug 2019",
    },
    {
      header: "Deep Learning certificate",
      company: "Deeplearing.ai via Coursera",
      details:
        "Neural network architectures, Deep neural networks, Natural language processing, CNN, RNN, LSTM networks. In depth theoretical courses and practice with Python, Keras and Tensorflow",
      dates: "Jan 2019",
    },
    {
      header: "Machine Learning certificate",
      company: "Stanford via Coursera",

      details:
        "Supervised learning, Unsupervised learning, Statistics, Probability. Basic and advanced algorithms with a focus on theoretical approach and mathematical models.",
      dates: "Dec 2018",
    },
  ],
  memos: {
    git: [
      "~ git init",
      "~ git status",
      "~ git add",
      "~ git checkout (-b) <branch> | <file>",
      `~ git commit -m "..."`,
      "~ git push",
      "~ git merge <branch name>",
    ],
    docker: [
      "FROM <env>",
      "WORKDIR </path>",
      "COPY package*.json ./",
      "RUN npm install",
      "COPY ..",
      "ENV PORT=8080",
      "EXPOSE 8080",
      `CMD ["npm", "start"]`,
      "~ docker ps",
      "~ docker build -t <name>",
    ],
  },
  biblio: {
    resources: [
      {
        title: "Open Yale Courses",
        link: "https://www.youtube.com/channel/UC4EY_qnSeAP1xGsh61eOoJA",
      },
      {
        title: "Coursera",
        link: "https://www.coursera.org/",
      },
      {
        title: "Christopher Olah's blog",
        link: "https://colah.github.io/",
      },
      {
        title: "Edwin Chen's blog",
        link: "http://blog.echen.me/",
      },
      {
        title: "Tania Rascia",
        link: "https://www.taniarascia.com/",
      },
      {
        title: "Atlassian's Git tutorials",
        link: "https://www.atlassian.com/git/tutorials",
      },
      {
        title: "Discrete Math by Dr. Trefor Bazett",
        link:
          "https://www.youtube.com/playlist?list=PLHXZ9OQGMqxersk8fUxiUMSIx0DBqsKZS",
      },
    ],
    books: [
      {
        title: "Artificial Intelligence",
        author: "Melanie Mitchell",
        link: "/",
        tag: ["Artificial Intelligence", "Society"],
      },
      {
        title: "Hello World",
        author: "Hannah Fry",
        link: "/",
        tag: ["Artificial Intelligence", "Machine Learning", "Society"],
      },
      {
        title: "Naked Statistics",
        author: "Charles Wheelan",
        link: "/",
        tag: ["Machine Learning"],
      },
      {
        title: "The Brain that Changes Itself",
        author: "Norman Doidge",
        link: "/",
        tag: ["Science", "Society"],
      },
      {
        title: "Life 3.0",
        author: "Max Tegmark",
        link: "/",
        tag: ["Artificial Intelligence", "Science"],
      },
      {
        title: "Sérénade pour un Cerveau Musicien",
        author: "Pierre Lemarquis",
        link: "/",
        tag: ["Science", "Music", "Society"],
      },
      {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        link: "/",
        tag: ["Science", "Society"],
      },
      {
        title: "The Elephant in The Brain",
        author: "Robin Hanson, Kevin Simler",
        link: "/",
        tag: ["Science", "Society"],
      },
      {
        title: "Libérez Votre Cerveau!",
        author: "Idriss Aberkane",
        link: "/",
        tag: ["Science", "Psychology", "Society"],
      },
      {
        title: "Deep Learning",
        author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
        link: "/",
        tag: ["Machine Learning"],
      },
      {
        title: "The Hundred-Page Machine Learning Book",
        author: "Andriy Burkov",
        link: "/",
        tag: ["Machine Learning"],
      },
      {
        title: "Machine Learning Engineering",
        author: "Andriy Burkov",
        link: "/",
        tag: ["Machine Learning"],
      },
      {
        title: "L'art Contemporain",
        author: "Catherine Millet",
        link: "/",
        tag: ["Art", "Society"],
      },
      {
        title: "The Nature of Code",
        author: "Daniel Shiffman",
        link: "/",
        tag: ["Digital Art"],
      },
      {
        title: "Cinq Leçons sur la Psychanalyse",
        author: "Sigmund Freud",
        link: "/",
        tag: ["Psychology"],
      },
      {
        title: "Sum: Tales from the Afterlives",
        author: "David Eagleman",
        link: "/",
        tag: ["Spirituality"],
      },
      {
        title: "How to Create a Mind",
        author: "Ray Kurzweil",
        link: "/",
        tag: ["Artificial Intelligence"],
      },
      {
        title: "AI Superpowers",
        author: "Kai-Fu Lee",
        link: "/",
        tag: ["Artificial Intelligence", "Society"],
      },
      {
        title: "The Age of Em",
        author: "Robin Hanson",
        link: "/",
        tag: ["Artificial Intelligence", "Society"],
      },
      {
        title: "Seven Brief Lessons on Physics",
        author: "Carlo Rovelli",
        link: "/",
        tag: ["Science"],
      },
    ],
    articles: ["articleA", "articleB", "articleC"],
    people: [
      "Neri Oxman",
      "Max Tegmark",
      "Lex Fridman",
      "Bjork",
      "Leonard Bernstein",
      "Étienne Klein",
      "Brian Eno",
      "Michio Kaku",
      "Ben Goertzel",
      "Olafur Eliasson",
      "Steve Reich",
      "Joscha Bach",
      "Nick Bostrom",
      "Elon Musk",
      "Lisa Feldman Barrett",
      "Andrew Ng",
      "Zaha Hadid",
      // "Yann LeCun",
      // "Kai-Fu Lee",
      "Philip Glass",
    ],
    art: ["artA", "artB", "artC"],
  },
};

export default data;
