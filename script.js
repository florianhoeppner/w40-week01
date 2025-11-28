// Simple list of ideas for future weeks
const ideas = [
  "Build a simple to-do list.",
  "Make a random quote generator.",
  "Create a page that shows the current time.",
  "Design a landing page for a fictional product."
];

// Pick one random idea
const ideaOfTheWeek = ideas[Math.floor(Math.random() * ideas.length)];

// Put it into the page
const ideaTextElement = document.getElementById("idea-text");
if (ideaTextElement) {
  ideaTextElement.textContent = ideaOfTheWeek;
}

// Show today's date as the 'deploy date'
const deployDateElement = document.getElementById("deploy-date");
if (deployDateElement) {
  const today = new Date();
  deployDateElement.textContent = today.toLocaleDateString();
}
