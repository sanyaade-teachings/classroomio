import { QuestionTypes } from '../utils';

import type { ExerciseTemplate } from '$lib/utils/types';

const template: ExerciseTemplate = {
  title: 'Vue.js v-show Quiz',
  description: 'Test your knowledge of Vue.js v-show with practical questions.',
  questionnaire: {
    questions: [
      {
        title: 'What is the purpose of the "v-show" directive in Vue.js?',
        name: 'q1',
        points: 2,
        order: 0,
        question_type: QuestionTypes[0], // RADIO
        options: [
          {
            label: 'To conditionally render an element based on a condition',
            is_correct: true,
          },
          {
            label: 'To toggle a class on an element',
            is_correct: false,
          },
          {
            label: 'To define a computed property in Vue.js',
            is_correct: false,
          },
        ],
      },
      {
        title: 'How do you use "v-show" to conditionally display an element in Vue.js?',
        name: 'q2',
        points: 1,
        order: 1,
        question_type: QuestionTypes[2], // TEXTAREA
        options: [],
      },
      {
        title: 'Explain the key difference between "v-show" and "v-if" directives in Vue.js.',
        name: 'q3',
        points: 2,
        order: 2,
        question_type: QuestionTypes[2], // TEXTAREA
        options: [],
      },
      {
        title: 'In what scenarios is "v-show" typically preferred over "v-if" in Vue.js?',
        name: 'q4',
        points: 3,
        order: 3,
        question_type: QuestionTypes[2], // TEXTAREA
        options: [],
      },
      {
        title: 'How do you conditionally show an element using "v-show" in Vue.js?',
        name: 'q5',
        points: 1,
        order: 4,
        question_type: QuestionTypes[0], // RADIO
        options: [
          {
            label: 'By rendering the element conditionally',
            is_correct: true,
          },
          {
            label: 'By toggling the element display property',
            is_correct: false,
          },
          {
            label: 'By using a computed property',
            is_correct: false,
          },
        ],
      },
      {
        title: 'Explain the usage of "v-show" with "v-else" in Vue.js.',
        name: 'q6',
        points: 1,
        order: 5,
        question_type: QuestionTypes[2], // TEXTAREA
        options: [],
      },
      {
        title: 'How can you use "v-show" with "v-else-if" to conditionally render content in Vue.js?',
        name: 'q7',
        points: 2,
        order: 6,
        question_type: QuestionTypes[2], // TEXTAREA
        options: [],
      },
      {
        title: 'What is the key difference between "v-show" and "v-if" in terms of rendering in Vue.js?',
        name: 'q8',
        points: 3,
        order: 7,
        question_type: QuestionTypes[2], // TEXTAREA
        options: [],
      },
      {
        title: 'How do you use "v-else-if" with "v-show" to conditionally render content in Vue.js?',
        name: 'q9',
        points: 1,
        order: 8,
        question_type: QuestionTypes[0], // RADIO
        options: [
          {
            label: 'By using "v-else" with a condition',
            is_correct: true,
          },
          {
            label: 'By using "v-else" with multiple conditions',
            is_correct: false,
          },
          {
            label: 'By using "v-if" with a condition',
            is_correct: false,
          },
        ],
      },
      {
        title: 'Explain the usage of "v-show" with "v-for" in Vue.js.',
        name: 'q10',
        points: 2,
        order: 9,
        question_type: QuestionTypes[2], // TEXTAREA
        options: [],
      },
    ],
  },
};

export default template;
