const activities = [
  {
    title: "FG Lab 2",
    description: "React Components and TypeScript Basics",
    link: "https://andressit-nicko.github.io/FG_LAB3_Andres/?authuser=1",
  },
  {
    title: "FG Lab 3",
    description: "Portfolio Contact Form using EmailJS",
    link: "https://andressit-nicko.github.io/FG_LAB2_Andres/?authuser=1",
  },
  {
    title: "MG LAB 2",
    description: "Student Information Management System",
    link: "https://andressit-nicko.github.io/MG_LAB5_Andres/?authuser=1",
  },
  {
    title: "MG LAB 3",
    description: "Simple Parking Tracker System",
    link: "https://andressit-nicko.github.io/MG_LAB3_Andres/?authuser=1",
  },
];

export default function Activities() {
  return (
    <section className="activities">
      <h2>Home Activities</h2>

      <div className="activity-container">
        {activities.map((activity, index) => (
          <a
            href={activity.link}
            target="_blank"
            rel="noopener noreferrer"
            className="activity-card"
            key={index}
          >
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>

            <span className="view-project">View Project →</span>
          </a>
        ))}
      </div>
    </section>
  );
}