const keyToNote = {
  a: "F",
  s: "G",
  d: "A",
  f: "B",
  g: "C",
  h: "D",
  j: "E",
  k: "F",
  l: "G",
  ";": "A",
  "'": "B",
  q: "F#",
  w: "F#",
  e: "G#",
  r: "A#",
  t: "C#",
  y: "C#",
  u: "D#",
  i: "F#",
  o: "F#",
  p: "G#",
  "[": "A#",
};

const allKeys = {
  blackkeys: [
    { id: "q  w", pressed: false, shiftUp: false },
    { id: "e", pressed: false, shiftUp: false },
    { id: "r", pressed: false, shiftUp: false },
    { id: "t  y", pressed: false, shiftUp: true },
    { id: "u", pressed: false, shiftUp: true },
    { id: "i  o", pressed: false, shiftUp: true },
    { id: "p", pressed: false, shiftUp: true },
    { id: "[", pressed: false, shiftUp: true },
  ],
  whitekeys: [
    { id: "a", pressed: false, shiftUp: false },
    { id: "s", pressed: false, shiftUp: false },
    { id: "d", pressed: false, shiftUp: false },
    { id: "f", pressed: false, shiftUp: false },
    { id: "g", pressed: false, shiftUp: true },
    { id: "h", pressed: false, shiftUp: true },
    { id: "j", pressed: false, shiftUp: true },
    { id: "k", pressed: false, shiftUp: true },
    { id: "l", pressed: false, shiftUp: true },
    { id: ";", pressed: false, shiftUp: true },
    { id: "'", pressed: false, shiftUp: true },
  ],
};


const drumKeys = {
  blackkeys: [
    { id: "q  w", pressed: false, disabled: true },
    { id: "e", pressed: false, disabled: true },
    { id: "r", pressed: false, disabled: true },
    { id: "t  y hihat", pressed: false, disabled: false },
    { id: "u", pressed: false, disabled: true },
    { id: "i  o", pressed: false, disabled: true },
    { id: "p", pressed: false, disabled: true },
    { id: "[", pressed: false, disabled: true },
  ],
  whitekeys: [
    { id: "a kick", pressed: false, disabled: false },
    { id: "s snare", pressed: false, disabled: false },
    { id: "d", pressed: false, disabled: true },
    { id: "f", pressed: false, disabled: true },
    { id: "g", pressed: false, disabled: true },
    { id: "h", pressed: false, disabled: true },
    { id: "j", pressed: false, disabled: true },
    { id: "k", pressed: false, disabled: true },
    { id: "l", pressed: false, disabled: true },
    { id: ";", pressed: false, disabled: true },
    { id: "'", pressed: false, disabled: true },
  ],
};

export { keyToNote, allKeys, drumKeys };
