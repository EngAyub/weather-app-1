// write code below
document.querySelector(".btn").addEventListener("click",()=>{
    let city = document.querySelector("#search").value
    
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2765900c2cb0b5190b3a05f4dd4b8fb6`)
  .then((res)=>{
      return res.json()
  })
  .then((data)=>{
      console.log(data)
      document.querySelector("#location").innerText = data.name
      document.querySelector(".desc").innerText = data.weather[0].description
      document.querySelector(".c").innerText = data.main.temp
  })
    
 })