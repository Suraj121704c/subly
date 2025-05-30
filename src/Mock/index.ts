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
    title: "It's Easy to Drift. This Helps You Stay Anchored.",
    description:
      'Small daily moments in scripture can bring lasting connection.',
  },
];

export const quizSlideData = [
  {
    id: 1,
    question: 'What do you want to achieve with subliminals?',
    quizeType: 'checkbox',
    isQusComplete: false,
    options: [
      {id: 1, question: 'Glow up', isSelected: false},
      {id: 2, question: 'Body and face transformation', isSelected: false},
      {id: 3, question: 'Confidence and charisma', isSelected: false},
      {id: 4, question: 'Wealth and success', isSelected: false},
      {id: 5, question: 'Other personal goals', isSelected: false},
    ],
  },
  {
    id: 4,
    question: 'Tell us about your experience with subliminals',
    quizeType: 'radio',
    isQusComplete: false,
    options: [
      {id: 1, question: 'I use subliminals regularly', isSelected: false},
      {
        id: 2,
        question: 'I use subliminals but I\'m inconsistent',
        isSelected: false,
      },
      {id: 3, question: 'I\'m new to subliminals', isSelected: false},
    ],
  },
  {
    id: 5,
    question: 'When do you prefer to listen to subliminals?',
    quizeType: 'checkbox',
    isQusComplete: false,
    options: [
      {id: 1, question: 'While sleeping', isSelected: false},
      {id: 2, question: 'During daily activities', isSelected: false},
      {id: 3, question: 'During meditation', isSelected: false},
      {id: 4, question: 'I\'m not sure yet', isSelected: false},
    ],
  },
  {
    id: 6,
    question: 'Select the thoughts you struggle with:',
    quizeType: 'checkbox',
    isQusComplete: false,
    options: [
      {id: 1, question: 'I doubt I can change', isSelected: false},
      {id: 2, question: 'I struggle with consistency', isSelected: false},
      {id: 3, question: 'I fear failure', isSelected: false},
      {id: 4, question: 'I\'m too impatient for results', isSelected: false},
      {id: 5, question: 'None of these', isSelected: false},
    ],
  },
  {
    id: 7,
    question: 'Many people struggle with subconscious resistance. What might be holding you back?',
    quizeType: 'checkbox',
    isQusComplete: false,
    options: [
      {id: 1, question: 'I doubt I can change', isSelected: false},
      {id: 2, question: 'I doubt subliminals work', isSelected: false},
      {id: 3, question: 'I get impatient for results', isSelected: false},
      {id: 4, question: 'I forget to listen daily', isSelected: false},
      {id: 5, question: 'None of these', isSelected: false},
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
