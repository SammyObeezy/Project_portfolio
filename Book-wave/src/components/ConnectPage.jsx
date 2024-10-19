import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider"; 
import "./ConnectPage.css";


const groups = [
  {
    name: "Thriller Fans",
    description: "Discuss gripping thrillers and suspenseful novels on Reddit.",
    members: "8,500",
    platform: "Reddit",
    image: "https://i.cdn.newsbytesapp.com/images/l77820230908183648.jpeg",
    link: "https://www.reddit.com/r/thrillers",
  },
  {
    name: "Sci-Fi Enthusiasts",
    description:
      "Join fellow sci-fi lovers in exploring futuristic worlds on Facebook.",
    members: "12,200",
    platform: "Facebook",
    image:
      "https://snworksceo.imgix.net/asp/0f387215-8a51-4142-adb1-4d05c82a1fc2.sized-1000x1000.jpg?w=800&dpr=2&ar=16%3A9&fit=crop&crop=faces",
    link: "https://web.facebook.com/groups/scifiandfantasybookclub",
  },
  {
    name: "Historical Fiction",
    description:
      "Delve into the past with discussions on historical fiction novels on Reddit.",
    members: "6,300",
    platform: "Reddit",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/booksellers-6709473c475fa.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=360:*",
    link: "https://www.reddit.com/r/historicalfiction",
  },
  {
    name: "Self-Help and Personal Growth",
    description:
      "Empower yourself with personal growth and self-help books on Facebook.",
    members: "4,900",
    platform: "Facebook",
    image:
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe3af5129-b489-4ad8-a000-93e995bac642_1500x996.png",
    link: "https://web.facebook.com/groups/selfdevbookclub",
  },
];

const ConnectPage = () => {
  // Access user data from Firebase Auth using AuthContext
  const { user } = useContext(AuthContext);

  // If the user is logged in, use their display name, otherwise default to 'Avid Reader'
  const userName = user && user.displayName ? user.displayName : "Avid Reader";

  return (
    <div className="connect-container mt-8
    ">
      <h1>Hello, {userName}!</h1>
      <p>
        Explore communities that match your passion for books and connect with
        fellow enthusiasts. Join in, share your thoughts, and enjoy the vibrant
        discussions in our growing book communities!
      </p>

      <div className="group-cards mt-10">
        {groups.map((group) => (
          <div className="connect-card" key={group.name}>
            <img src={group.image} alt={group.name} className="card-image" />
            <div className="card-content">
              <h2>{group.name}</h2>
              <p>{group.description}</p>
              <div className="group-info">
                <span>{group.members} members</span>
                <span>Platform: {group.platform}</span>
              </div>
              <a
                href={group.link}
                target="_blank"
                rel="noopener noreferrer"
                className="join-button"
              >
                Join Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Personalized Group Suggestions */}
      <div className="suggestions-section mt-14">
        <h2>Suggested for You</h2>
        <p>
          Based on your interests and reading habits, you might enjoy these
          groups:
        </p>
        {/* Placeholder for suggested groups */}
        <div className="suggestions-placeholder">
          <p>Coming soon! We’re gathering some great suggestions for you.</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
