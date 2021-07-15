import { wordsData } from '../data/wordsData.js';
import { Dictionary } from '../components/Dictionary.js';

const dictionary = new Dictionary(".content", "English - Lithuanian dictionary ", wordsData);
console.log(dictionary);