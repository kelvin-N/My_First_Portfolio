// Dynamic Quote Generator

// Array of quotes (each quote has text and category)
let quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
  { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Success is not in what you have, but who you are.", category: "Wisdom" }
];

// Select DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");

// Function to show a random quote
function showRandomQuote() {
  if (quotes.length === 0) {
    quoteDisplay.textContent = "No quotes available. Please add one!";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDisplay.innerHTML = `
    <p>"${randomQuote.text}"</p>
    <p><strong>Category:</strong> ${randomQuote.category}</p>
  `;
}

// Attach event listener for showing random quote
newQuoteBtn.addEventListener("click", showRandomQuote);

// Function to add a new quote dynamically
function addQuote() {
  const quoteText = document.getElementById("newQuoteText").value.trim();
  const quoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (!quoteText || !quoteCategory) {
    alert("Please fill out both fields before adding a quote!");
    return;
  }

  // Create a new quote object
  const newQuote = {
    text: quoteText,
    category: quoteCategory
  };

  // Add to array
  quotes.push(newQuote);

  // Clear input fields
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";

  // Update displayed quote immediately
  quoteDisplay.innerHTML = `
    <p>"${newQuote.text}"</p>
    <p><strong>Category:</strong> ${newQuote.category}</p>
  `;
}
