// import { useState } from 'react'
// import './App.css'





const learning = "I am learning React. ";
const level = "It is hard?";
let five = 5;
let eight = 8;

const profile = {
    firstName : "Jacqui",
    location: "California",
    favActivities: [
      "knitting",
      "gardening",
      "reading",
      "walking"
    ]
};
const cat = {
  color: "gray",
  numberKittens: "5",
  catImg: "https://bestfriends.org/sites/default/files/inline-images/Foster-Agave-1-byAnnika-Harley.jpg"

}



function App() {
  // const [count, setCount] = useState(0)

  return (
  <div>
    <h1>
    {learning} {level}
    </h1>
    <p>{five} + {eight} = {five + eight}</p>
    <p>{eight} - {five} = {eight - five}</p>
    <p>{five} x {eight} = {five * eight}</p>
    <p>{eight} / {five} = {eight / five}</p>
    <h2>This profile is about {profile.firstName} in {profile.location}</h2>
    <ul>
      {profile.favActivities.map((activity) =>(
          <li>{activity}</li>

      ))}
      {/* <li>{profile.favActivities[0]}</li>
      <li>{profile.favActivities[1]}</li>
      <li>{profile.favActivities[2]}</li>
      <li>{profile.favActivities[3]}</li> */}
    </ul>
    <figure><img src={cat.catImg} alt="A {cat.color} with her {cat.numberKittens} kittens" />
    <figcaption>A {cat.color} with her {cat.numberKittens} kittens</figcaption>
</figure>
{/* Comments are weird in JSX */}
  </div>
  )
}

export default App
