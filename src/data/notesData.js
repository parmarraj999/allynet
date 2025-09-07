// src/data/notesData.js

export const dummyNotes = [
  {
    id: 1,
    title: "Quantum Mechanics Notes",
    description: "Covers basics of wave functions and probability theory.",
    uploader: "Guest User",
    createdAt: "2025-01-05T10:30:00Z",
    fileUrl: "#",
    size: 2_500_000, // bytes (~2.5 MB)
    category: "Physics"
  },
  {
    id: 2,
    title: "Data Structures Cheat Sheet",
    description: "Quick revision for arrays, linked lists, stacks, and queues.",
    uploader: "Guest User",
    createdAt: "2024-09-03T08:00:00Z",
    fileUrl: "#",
    size: 1_100_000, // bytes (~1.1 MB)
    category: "CS"
  },
  {
    id: 3,
    title: "Organic Chemistry Notes",
    description: "Covers hydrocarbons, alcohols, phenols, and ethers.",
    uploader: "Guest User",
    createdAt: "2025-09-01T14:15:00Z",
    fileUrl: "#",
    size: 3_600_000, // bytes (~3.6 MB)
    category: "Chemistry"
  },
  {
    id: 4,
    title: "Database Management Systems",
    description: "Normalization, ER diagrams, SQL basics with examples.",
    uploader: "Guest User",
    createdAt: "2025-08-28T09:45:00Z",
    fileUrl: "#",
    size: 5_000_000, // bytes (~5 MB)
    category: "CS"
  }
];

export const getTimeAgo = (dateString) => {
  const createdDate = new Date(dateString);
  const today = new Date();
  const diffTime = today - createdDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays < 30) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;

  const diffYears = Math.floor(diffMonths / 12);
  return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
};