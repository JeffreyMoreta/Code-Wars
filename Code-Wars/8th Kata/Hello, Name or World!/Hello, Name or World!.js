function hello(name) {
  if (name === undefined || name === ""){
    return "Hello, World!";
  }else{
    name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${name}!`;
  }
};
