// info on each experience
export const experiences = [
    {
        company: "mastercard",
        title: "incoming software engineer 1",
        location: "st. louis, mo",
        date: "august 2026 -",
        details: null,
    },
    {
        company: "mastercard",
        title: "software engineer intern",
        location: "st. louis, mo",
        date: "june 2025 - august 2025",
        details: "designed a modernized data pipeline using python and oracle sql to deliver structured billing feeds from mastercard’s IST clearing team to the data warehouse, replacing a legacy mainframe process and removing an intermediary processing layer to streamline data flow. resolved 30+ bugs and reduced 5+ hours of technical debt flagged by SonarQube in the clearing on behalf application, improving maintainability and code quality. additionally, i placed 2nd out of 40+ participants in the north american intern cybersecurity challenge.",
    },
    {
        company: "principal financial group",
        title: "software engineer intern",
        location: "des moines, ia",
        date: "may 2024 - august 2024",
        details: "assisted in the development, maintenance, and unit testing of 50+ web components for PFG’s design system using typescript, jest, and scss, ensuring functionality and usability across company-wide applications.",
    }, 
    {
        company: "washington university z-lab",
        title: "undergraduate research assistant",
        location: "st. louis, mo",
        date: "august 2024 - december 2024",
        details: "built a full-stack gui using flask to control and monitor optical fiber alignment hardware in real time, integrating live video feeds, piezo voltage controls, and real-time power/voltage displays, improving experimental usability for lab researchers. automated fiber alignment for PIC testing using the nelder-mead algorithm, maximizing power meter output and reducing tuning time from 3 minutes to 10 seconds, achieving approximately 90% improvement.",
    },
    {
        company: "washington university",
        title: "teaching assistant",
        location: "st. louis, mo",
        date: "august 2023 - january 2026",
        details: "cse 2407 (data structures), cse 2400 (logic & discrete math), cse 3302 (object-oriented programming). held oﬃce hours, guided problem sets, and graded assignments/labs/exams for 300+ students, providing clear and constructive feedback."
    }

]

// info on each project
export const projects = [
    {
        name: "leftover to makeover (recipe recommendation app)",
        description: "built an interactive web application that recommends ranked recipes from user-provided ingredients using a feasibility score based on ingredient overlap. designed a distributed data pipeline using kafka, spark, and snowflake to process real-time and batch recipe data, implementing ingredient normalization and a scalable schema for eﬃcient recipe-ingredient querying.",
        images: [
            "/screenshots/leftover_1.png",
            "/screenshots/leftover_2.png"
        ],
        link: "https://github.com/johnpp4/cse5114_project",
        tags: [
            "kafka",
            "spark",
            "snowflake",
            "python",
            "html",
            "css",
            "js"
        ]
    },
    {
        name: "ARCH ship (client project for ARCH design)",
        description: "developed a java application that automates art packing calculations, parsing csv specifications for artwork dimensions, materials, and quantities to generate optimal container arrangements tailored to client requirements. reduced processing time by 99%+ by automating manual calculations and minimizing errors through 145+ unit tests.",
        images: [
            "/screenshots/arch_1.png",
            "/screenshots/arch_2.png"
        ],
        link: "https://github.com/cse4504-fl25-2-wustl/team-project-jeong-zhong-huang",
        tags: [
            "java",
            "gradle",
            "java swing"
        ]
    },
    {
        name: "spotify dashboard & playlist generator",
        description: "developed a web app that authenticates with spotify, fetches top tracks/artists/genres, and dynamically generates personalized playlists via chained API requests. designed an interactive dashboard with animated transitions, time-range filters, and real-time loading states to visualize user data and enhance usability.",
        images: [
            "/screenshots/spotify.png",
        ],
        link: "https://github.com/gracehjy/spotify",
        tags: [
            "angular",
            "typescript",
            "spotify web api",
            "html",
            "css"
        ]
    },
    {
        name: "toast it!",
        description: "developed a real-time multiplayer iOS game in swift using multipeerconnectivity for peer-to-peer networking, implementing host-guest architecture, synchronized game state, and lobby/session management across devices. designed and built core gameplay systems including ingredient passing between player screens, recipe assignment, round timers, and a results screen with coordinated play-again flow requiring all players to ready up before restarting.",
        images: [
            "/screenshots/toast.png",
        ],
        link: "https://github.com/jocelynliaoo/CSE4308-ToastIt",
        tags: [
            "swift",
            "uikit",
            "multipeerconnectivity"
        ]
    }
]

export const about_categories = [
  {
    label: "movies and shows",
    items: [
      { title: "how to make millions before grandma dies", image: "/favs/make_millions.jpg", link: "https://www.imdb.com/title/tt31392609/" },
      { title: "twinkling watermelon", image: "/favs/twinkling_watermelon.jpg", link: "https://www.imdb.com/title/tt27446493/" },
      { title: "shine on me", image: "/favs/shine_on_me.jpg", link: "https://www.imdb.com/title/tt34852924/" },
      { title: "high school musical 3", image: "/favs/hsm.jpg", link: "https://www.imdb.com/title/tt0962726/" },
    ]
  },
  {
    label: "artists",
    items: [
      { title: "grent perez", image: "/favs/grent.png", link: "https://open.spotify.com/artist/73BLwSX6gsNeVzS7DgI4xe?si=0UvL99A1S-C_Is0ryecQvw" },
      { title: "ariana grande", image: "/favs/ariana.png", link: "https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR?si=4gfwtlEIRHWmRAVwGF--6g"},
      { title: "niki", image: "/favs/niki.jpeg", link: "https://open.spotify.com/artist/2kxP07DLgs4xlWz8YHlvfh?si=tXU-z8AtS_qREN5xfR7aHw" },
      { title: "justin bieber", image: "/favs/justin.png", link: "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s?si=5Dy7tHLyTlWz-s6UXOfKeA"}
    ]
  },
  {
    label: "games",
    items: [
        { title: "mario kart", image: "/favs/mario.jpg", link: "https://mariokart8.nintendo.com/"},
        { title: "catan", image: "/favs/catan.jpg", link: "https://www.catan.com/"},
        { title: "overcooked", image: "/favs/overcooked.jpg", link: "https://store.steampowered.com/app/448510/Overcooked/"},
        { title: "wordhunt (game pigeon)", image: "/favs/wordhunt.jpg", link: "https://apps.apple.com/jm/app/gamepigeon/id1124197642"}
    ]
  }
]