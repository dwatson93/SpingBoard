    //Same keys and values
const creatins = function(firstname, lastname)
    {
    return{firstname: firstname, lastname: lastname}   
    }

    //Computed Property Names
    let favoriteNumber = 42;

    const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

    //Object Methods
  const instructor = 
  {
    firstName: "Colt",
    sayHi()
    {
      return "Hi!";
    },
    sayBye()
    {
      return this.firstName + " says bye!";
    }
  }

  function createAnimal(species, verb, noise)
  {
      return{ species, [verb](){ return noise;}};
  }

  const test = createAnimal("sheep", "bleet", "BAAAAaaaa");
