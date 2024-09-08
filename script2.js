const textElement = document.getElementById("message");
let messages = [
  "Xcluding the Mainstream",
  "Xalting the Local Community",
  "Xchanging ideas freely",
  "Xorcising the profit motive",
  "Xerography",
];

// Set the initial index to 0
let index = 0;

// Function to update the message
function updateMessage() {
  // Set the text of the element to the current message
  textElement.innerText = messages[index];

  // Increment the index
  index++;

  // If the index exceeds the array length, reset it to 0 (looping)
  if (index >= messages.length) {
    index = 0;
  }
}

// Call updateMessage function every 3 seconds (3000 milliseconds)
setInterval(updateMessage, 3000);

// Optionally, call it immediately to show the first message right away
updateMessage();
