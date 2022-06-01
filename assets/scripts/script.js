function load() {
  let clock = document.querySelector('#clock')
  let periodMessage = document.querySelector('#day-time')
  let date = new Date()
  let hour = date.getHours()
  let minutes = date.getMinutes()

 if(minutes < 10) {
   minutes = `0${minutes}`
 } else {
   minutes = minutes
 }
  
  clock.innerHTML = `${hour}:${minutes}`

  if(hour >= 6 && hour <= 11) {
    periodMessage.innerHTML = "Bom dia"
  } if (hour > 11 && hour <= 17) {
    periodMessage.innerHTML = "Boa tarde"
  } else {
    periodMessage.innerHTML = "Boa noite"
  }
}
