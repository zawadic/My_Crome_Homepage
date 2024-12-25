function searchGoogle() {
    const searchQuery = document.getElementById("search-input").value;
    if (searchQuery) {
      // Redirect to Google with the search query
      const googleSearchURL = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
      window.location.href = googleSearchURL;
    } else {
      alert("Please enter a search query.");
    }
  }