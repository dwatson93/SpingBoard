//1
const filterOutOdds = (...nums) => nums.filter(varb => varb % 2 === 0);

//2
const findmin = (...nums) => Math.min(...nums);

//3
const mergeObjects = (o1, o2) => ({...o1, ...o2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
  
  /** Return a new array with every item in array1 and array2. */
  
  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }
  
  /** Return a new object with all the keys and values
  from obj and a new key/value pair */
  
  const addKeyVal = (obj, key, val) => {
  
    // OPTION 1
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  
    
  }
  
  /** Return a new object with a key removed. */
  
  const removeKey = (obj, key) => {
  
    // OPTION 1
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  
    
    
  }
  
  /** Combine two objects and return a new object. */
  
  const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }
  
  /** Return a new object with a modified key and value. */
  
  const update = (obj, key, val) => {
  
    // OPTION 1
  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;}