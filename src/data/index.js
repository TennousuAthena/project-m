import { useLocalStorage } from '@uidotdev/usehooks';
import shuffle from '../util/arrayUtils';

import mao from './mao.json';
import marx from './marx.json';

function getQuestionLen() {
  return { 毛概: mao.length, 马原: marx.length };
}

function range(m, n) {
  return Array.from({ length: n - m + 1 }, (_, index) => index + m);
}

function getQuestionData(subject, showMode, id) {
  const [shuffleSeq, setShuffleSeq] = useLocalStorage('shuffleSeq', {
    马原: range(0, marx.length - 1).shuffle(),
    毛概: range(0, mao.length - 1).shuffle(),
  });
  switch (showMode) {
    case '顺序':
      switch (subject) {
        case '马原': {
          return marx[id - 1];
        }
        case '毛概': {
          return mao[id - 1];
        }
      }
      break;
    case '随机':
      switch (subject) {
        case '马原': {
          return marx[shuffleSeq.马原[id]];
        }
        case '毛概': {
          return mao[shuffleSeq.毛概[id]];
        }
      }
      break;
  }
}

export { getQuestionData, getQuestionLen };
