

document.addEventListener("DOMContentLoaded", function() {
  const initialResults = RandomData();
  createResultItems(initialResults);
});

function RandomData() {
    const contents = [];
    for (let i = 1; i <= 20; i++) {
      contents.push(`Product ${i}`);
    }
    return contents;
  }
  

  function createResultItems(contents) {
    const resultsContainer = document.getElementById("resultsContainer");
    contents.forEach(content => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
      // resultItem.textContent = 'ABCD';
      resultItem.textContent = content;
      resultsContainer.appendChild(resultItem);
    });
  }

  function lazyLoad() {
    // const resultsContainer = document.getElementById("resultsContainer");
    const ScreenHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
  
    if (scrollTop + ScreenHeight >= scrollHeight) {
      const moreResults = RandomData();
      createResultItems(moreResults);
    }
  }
  

  window.addEventListener("scroll", lazyLoad);
  

  