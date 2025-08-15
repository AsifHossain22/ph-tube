function loadCategories() {
  // 1. fetchData
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //   2. convertPromiseToJson
    .then((res) => res.json())

    // 3. sendDataToDisplay
    .then((data) => displayCategories(data.categories));
}

// {
//     "category_id": "1001",
//     "category": "Music"
// }

function displayCategories(categories) {
  // getTheContainer
  const categoryContainer = document.getElementById("category-container");

  // loopOperationOnArrayOfObject
  for (let cat of categories) {
    console.log(cat);
    // createElement
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;
    // appendElement
    categoryContainer.append(categoryDiv);
  }
}

loadCategories();
