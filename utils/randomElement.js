// // utils/randomElement.js
// const randomElement = (array) => {
//   return array[Math.floor(Math.random() * array.length)];
// };

// export default randomElement;

import { sample } from "lodash";

// ...

const randomElement = (array) => {
  return sample(array);
};

export default randomElement;
