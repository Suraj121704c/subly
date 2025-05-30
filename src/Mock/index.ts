import {Images} from '../Utils/images';

export const CarouselData = [
  {
    id: 1,
    image: Images.appInfo1,
    title: 'Grow Spiritually, Together',
    description: 'Read scriptures daily as a couple and reflect with meaning.',
  },
  {
    id: 2,
    image: Images.appInfo2,
    title: 'Strengthen Your Bond Through Shared Faith',
    description: 'Read scripture daily as a couple and reflect with meaning.',
  },
  {
    id: 3,
    image: Images.appInfo3,
    title: 'Reflect, Remember, and Reinforce',
    description:
      'Quick quizzes help you both understand and retain what you read—together.',
  },
  {
    id: 4,
    image: Images.appInfo4,
    title: 'It’s Easy to Drift. This Helps You Stay Anchored.',
    description:
      'Small daily moments in scripture can bring lasting connection.',
  },
];

export const quizSlideData = [
  {
    id: 1,
    question: 'What brings you here today?',
    quizeType: 'radio',
    isQusComplete: false,
    options: [
      {id: 1, question: 'We want to grow spiritually', isSelected: false},
      {id: 2, question: 'We’ve been struggling to connect', isSelected: false},
      {id: 3, question: 'I feel distant from God', isSelected: false},
      {
        id: 4,
        question: 'I want to build a stronger relationship',
        isSelected: false,
      },
    ],
  },
  {
    id: 2,
    question:
      'How would you describe your current spiritual connection as a couple?',
    quizeType: 'slider',
    isQusComplete: false,
    value: 0,
  },
  {
    id: 3,
    question: 'What do you want to be better in your relationship?',
    quizeType: 'checkbox',
    isQusComplete: false,
    options: [
      {id: 1, question: 'Our spiritual bond', isSelected: false},
      {id: 2, question: 'Communication', isSelected: false},
      {id: 3, question: 'Intimacy & trust', isSelected: false},
      {id: 4, question: 'Prayer life', isSelected: false},
      {id: 5, question: 'Bible knowledge', isSelected: false},
      {id: 999, question: 'All of the above', isSelected: false},
    ],
  },
  {
    id: 4,
    question: 'How often do you pray or study the Bible together?',
    quizeType: 'radio',
    isQusComplete: false,
    options: [
      {id: 1, question: 'Daily', isSelected: false},
      {id: 2, question: 'Once a week', isSelected: false},
      {id: 3, question: 'Rarely', isSelected: false},
      {id: 4, question: 'Never', isSelected: false},
      {id: 5, question: 'We’ve been trying…', isSelected: false},
    ],
  },
  {
    id: 5,
    question:
      'What would your relationship feel like if God was at the center every day?',
    quizeType: 'pill',
    isQusComplete: false,
    options: [
      {id: 1, question: 'Peace', isSelected: false},
      {id: 2, question: 'Power', isSelected: false},
      {id: 3, question: 'Joy', isSelected: false},
      {id: 4, question: 'Clarity', isSelected: false},
      {id: 5, question: 'Healing', isSelected: false},
    ],
  },
];

export const imageSlideData = [
  {
    id: 1,
    question: 'Do you want to grow closer to God, as a couple?',
    quizeType: 'text',
    image: Images.slideImg1,
    ans: 'yes',
    isGivenAns: false,
  },
  // {
  //   id: 2,
  //   question:
  //     'Have you been longing for more spiritual intimacy in your relationship?',
  //   quizeType: 'text',
  //   image: Images.slideImg2,
  //   ans: 'yes',
  //   isGivenAns: false,
  // },
  {
    id: 3,
    question:
      'Would it help if someone guided you in studying the Bible as a couple?',
    quizeType: 'text',
    image: Images.slideImg3,
    ans: 'yes',
    isGivenAns: false,
  },
  {
    id: 4,
    question:
      'Do you think a God-centered relationship is stronger and more lasting?',
    quizeType: 'text',
    image: Images.slideImg4,
    ans: 'yes',
    isGivenAns: false,
  },
];

export const questions = [
  {
    id: 1,
    question: 'What sin involves physical or emotional cruelty toward others?',
    options: ['Gluttony', 'Covetousness', 'Greed', 'Idolatry', 'Materialism'],
    correctAnswer: 'Gluttony',
  },
  {
    id: 2,
    question: 'What is the first book of the Bible?',
    options: ['Genesis', 'Exodus', 'Leviticus', 'Deuteronomy', 'Numbers'],
    correctAnswer: 'Genesis',
  },
  {
    id: 3,
    question: 'Who betrayed Jesus?',
    options: ['Peter', 'John', 'Judas', 'James', 'Thomas'],
    correctAnswer: 'Judas',
  },
  {
    id: 4,
    question: 'How many days did God take to create the world?',
    options: ['6 days', '7 days', '10 days', '5 days', '4 days'],
    correctAnswer: '6 days',
  },
  {
    id: 5,
    question: 'What is the last book of the New Testament?',
    options: ['Revelation', 'Hebrews', 'Jude', 'Romans', 'Timothy'],
    correctAnswer: 'Revelation',
  },
];
