import mao from './mao.json';
import marx from './marx.json';

function getQuestionLen() {
  return { 毛概: mao.length, 马原: marx.length };
}

function questionData(subject, showMode, id) {
  switch (subject) {
    case '马原': {
      console.log(marx[id]);
      return marx[id];
    }
    case '毛概': {
      return mao[id];
    }
  }
}

export { questionData, getQuestionLen };
