import uuidv4 from 'uuid/v4';

const generate = (sides) => {
   return {
      id: uuidv4(),
      label: `d${sides}`,
      input: `1d${sides}`
   };
};

export const dices = [
   generate(4),
   generate(6),
   generate(8),
   generate(10),
   generate(12),
   generate(20),
   generate(100)
];
