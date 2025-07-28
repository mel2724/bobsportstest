// Comprehensive player data structure for student-athlete profile
export const playerData = {
  personal: {
    name: "Marcus Johnson",
    nickname: "MJ",
    photo: null, // Will use initials fallback
    position: "Wide Receiver",
    team: "Central High Eagles",
    jerseyNumber: 84,
    height: "6'2\"",
    weight: 185,
    graduationYear: 2025,
    sport: "Football",
    secondarySport: {
      name: "Track & Field",
      events: ["100m", "200m", "Long Jump"],
      personalBests: {
        "100m": "10.85s",
        "200m": "21.42s",
        "Long Jump": "22'8\""
      }
    },
    location: "Atlanta, GA",
    birthDate: "March 15, 2007",
    email: "marcus.johnson@email.com",
    phone: "(555) 123-4567"
  },
  
  academic: {
    gpa: 3.8,
    testScores: "SAT: 1340 | ACT: 29",
    commitmentStatus: "Uncommitted",
    committedSchool: null,
    interests: ["Sports Management", "Business", "Communications"],
    honors: ["Honor Roll", "National Honor Society", "Academic All-State"]
  },
  
  athletic: {
    fortyYard: "4.42s",
    verticalJump: "38\"",
    benchPress: 225,
    squat: 315,
    seasonStats: {
      "2024": {
        receptions: 68,
        receivingYards: 1247,
        touchdowns: 15,
        averagePerCatch: 18.3,
        longestReception: 78
      },
      "2023": {
        receptions: 52,
        receivingYards: 892,
        touchdowns: 11,
        averagePerCatch: 17.2,
        longestReception: 65
      }
    },
    careerHighlights: [
      "State Championship Appearance (2024)",
      "All-Region First Team (2024)",
      "All-Conference Player of the Year (2024)",
      "School Record - Most Receiving Yards in a Season"
    ]
  },
  
  content: {
    bio: {
      personal: "Growing up in Atlanta, I've always been passionate about football and academics. My goal is to excel both on the field and in the classroom while inspiring younger athletes in my community.",
      goals: "To play Division I football while pursuing a degree in Sports Management. I want to eventually work in professional sports operations and give back to youth athletics programs.",
      motivation: "My younger brother who looks up to me and my single mother who works two jobs to support our family. Every rep, every study session, every game is for them.",
      challenges: "Overcoming a shoulder injury junior year taught me resilience and the importance of mental toughness. It made me a better player and person."
    },
    
    achievements: [
      { type: "athletic", title: "All-State First Team", year: "2024", color: "#fbbf24" },
      { type: "athletic", title: "Region Player of the Year", year: "2024", color: "#2563eb" },
      { type: "academic", title: "National Honor Society", year: "2023", color: "#059669" },
      { type: "community", title: "Youth Mentor Award", year: "2024", color: "#dc2626" },
      { type: "athletic", title: "State Championship Finalist", year: "2024", color: "#7c3aed" },
      { type: "academic", title: "Academic All-State", year: "2024", color: "#059669" }
    ],
    
    videos: {
      highlights: {
        title: "2024 Season Highlights",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Best catches and plays from senior season"
      },
      personal: {
        title: "Personal Introduction",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Get to know Marcus off the field"
      },
      workout: {
        title: "Training & Conditioning",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Dedication to fitness and preparation"
      }
    },
    
    mediaLinks: [
      {
        title: "2024 Highlight Reel",
        url: "#",
        type: "video",
        description: "Complete season highlights with stats overlay"
      },
      {
        title: "Athletic Resume",
        url: "#",
        type: "document",
        description: "Comprehensive athletic and academic resume"
      },
      {
        title: "Game Film - vs. North Metro",
        url: "#",
        type: "video",
        description: "Full game footage from championship game"
      },
      {
        title: "Combine Performance",
        url: "#",
        type: "video",
        description: "40-yard dash, vertical jump, and agility drills"
      }
    ],
    
    socialMedia: {
      twitter: "https://twitter.com/mjohnson84",
      instagram: "https://instagram.com/marcus_johnson84",
      youtube: "https://youtube.com/c/marcusjohnson",
      linkedin: "https://linkedin.com/in/marcus-johnson-athlete"
    },
    
    coachQuotes: [
      {
        quote: "Marcus is the most dedicated player I've coached in 20 years. His work ethic is unmatched.",
        author: "Coach Williams",
        title: "Head Coach, Central High"
      },
      {
        quote: "He's not just a great athlete, but an exceptional young man who leads by example.",
        author: "Coach Davis",
        title: "Offensive Coordinator"
      }
    ]
  }
};