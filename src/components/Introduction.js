import './Introduction.css';

const Introduction = () => (
  <section className="introduction">
    <div className="intro-content">
      <div className="introduction-container">
        <h1>Hey, I'm George</h1>
        <p>Welcome to my personal website. I'm an aspiring software engineer who loves to create and learn about technology.</p>
      </div>
      <div className="profile-pic-container">
        <img src="images/git-profile.jpg" alt="George's Profile Picture" className="profile-pic" />
      </div>
    </div>
  </section>
);

export default Introduction;
