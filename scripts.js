const container = document.querySelector(".container")
const button = document.getElementById("change-message")
const light = document.querySelector(".light")

function calculateRisk() {
  const today = new Date()
  const dayOfWeek = today.getDay()

  if (dayOfWeek === 0 || dayOfWeek === 6 || dayOfWeek === 5) {
    light.style.backgroundColor = 'red'
    return 3
  } else if (dayOfWeek === 4) {
    light.style.backgroundColor = 'orange'
    return 2
  } else {
    light.style.backgroundColor = 'springgreen'
    return 1
  }
}

button.addEventListener("click", async () => {
  const riskToday = calculateRisk()
  const possibleAnswers = answers.filter((answer) => riskToday === answer.risk)
  const randomIndex = Math.floor(Math.random() * possibleAnswers.length)
  const randomMessage = possibleAnswers[randomIndex].message

  if (document.querySelector(".message")) {
    const message = document.querySelector(".message")
    message.textContent = randomMessage
  } else {
    const newMessage = document.createElement("p")
    newMessage.classList.add("message")
    newMessage.textContent = randomMessage
    
    container.insertBefore(newMessage, container.firstChild)
  }
  
  button.textContent = "Ask again..."
})