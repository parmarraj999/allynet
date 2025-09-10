// src/data/usersData.js

const usersData = [
  {
    id: 1,
    profilePhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    username: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    tag: "Alumni",
    description: "Software Engineer at Infosys, passionate about AI & ML.",
    date: "25 Jan 2025",
    connections: 120,
    branch: "CSE",
    role: "Developer",
    availability: "Full-time",
    skills: ["JavaScript", "Python", "React"],
    experience: "3-5 years"
  },
  {
    id: 2,
    profilePhoto: "https://randomuser.me/api/portraits/women/45.jpg",
    username: "Aditi Sharma",
    email: "aditi.sharma@example.com",
    tag: "Mentor",
    description: "Career coach helping students crack top tech interviews.",
    date: "18 Feb 2025",
    connections: 85,
    branch: "AIML",
    role: "Manager",
    availability: "Part-time",
    skills: ["Python", "Data Analysis"],
    experience: "5+ years"
  },
  {
    id: 3,
    profilePhoto: "https://randomuser.me/api/portraits/men/76.jpg",
    username: "Arjun Mehta",
    email: "arjun.mehta@example.com",
    tag: "Alumni",
    description: "Ex-IITian, currently pursuing MBA at IIM Bangalore.",
    date: "10 Mar 2025",
    connections: 64,
    branch: "CSE",
    role: "Developer",
    availability: "Full-time",
    skills: ["Java", "SQL", "React"],
    experience: "1-2 years"
  },
  {
    id: 4,
    profilePhoto: "https://randomuser.me/api/portraits/women/22.jpg",
    username: "Priya Nair",
    email: "priya.nair@example.com",
    tag: "Mentor",
    description: "Research scholar in Data Science, guiding undergrads.",
    date: "02 Apr 2025",
    connections: 42,
    branch: "AIDS",
    role: "Designer",
    availability: "Part-time",
    skills: ["Python", "Machine Learning", "Data Visualization"],
    experience: "3-5 years"
  },
  {
    id: 5,
    profilePhoto: "https://randomuser.me/api/portraits/men/19.jpg",
    username: "Mohammed Salman",
    email: "mohammed.salman@example.com",
    tag: "Alumni",
    description: "Full-stack developer and open-source contributor.",
    date: "14 May 2025",
    connections: 97,
    branch: "AIML",
    role: "Developer",
    availability: "Freelance",
    skills: ["React", "Node.js", "MongoDB"],
    experience: "5+ years"
  },
  {
    id: 6,
    profilePhoto: "https://randomuser.me/api/portraits/women/64.jpg",
    username: "Sneha Patel",
    email: "sneha.patel@example.com",
    tag: "Mentor",
    description: "Helping students build strong resumes & LinkedIn profiles.",
    date: "30 Jun 2025",
    connections: 150,
    branch: "CSE",
    role: "Manager",
    availability: "Full-time",
    skills: ["Career Guidance", "Mentoring", "Networking"],
    experience: "5+ years"
  },
];

export default usersData;

/*
<p>Branch: {user.branch}</p>
<p>Experience: {user.experience}</p>
            <p>Availability: {user.availability}</p>
            <p>Skills: {user.skills?.join(', ')}</p>
            <div key={user.id} className="user-card">*/