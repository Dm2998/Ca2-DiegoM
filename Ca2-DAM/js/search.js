


document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    const searchNotification = document.getElementById("searchNotification");
    const searchQuerySpan = document.getElementById("searchQuery");
  
    // Add event listener for button click
    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (query) {
        searchQuerySpan.textContent = query;
        searchNotification.classList.remove("d-none");
        setTimeout(() => {
          searchNotification.classList.add("d-none");
        }, 3000);
      } else {
        alert("Please enter a search term.");
      }
    });
  });
  
  