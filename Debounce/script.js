const input = document.querySelector(".search-input");

// function that is handling the main request wala chij

const handler = async (e) => {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();

  console.log(products);
};

const debouce = (func, delay = 1000) => {
  
  let timerID ;  
  return function(...arg){
   
    clearTimeout(timerID)
    timerID = setTimeout(() => {
      func(...arg);
    }, delay);
  };
};

// we want to debouce the handler for some period and acheieve efficiecny

const debounced = debouce(handler, 1000);
  
input.addEventListener("input", debounced);
