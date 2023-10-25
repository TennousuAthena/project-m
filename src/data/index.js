import mao from './mao.json';
import marx from './marx.json';

function getQuestionLen() {
  return { 毛概: mao.length, 马原: marx.length };
}

function getQuestionData(subject, showMode, id) {
  switch (subject) {
    case '马原': {
      return marx[id - 1];
    }
    case '毛概': {
      return mao[id - 1];
    }
  }
}

export { getQuestionData, getQuestionLen };
