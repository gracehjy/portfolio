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
        details: "designed a modernized data pipeline using Python and Oracle SQL to deliver structured billing feeds from Mastercard’s IST Clearing team to the data warehouse, replacing a legacy mainframe process and removing an intermediary processing layer to streamline data flow. resolved 30+ bugs and reduced 5+ hours of technical debt flagged by SonarQube in the Clearing on Behalf application, improving maintainability and code quality. additionally, i placed 2nd out of 40+ participants in the North American intern cybersecurity challenge.",
    },
    {
        company: "principal financial group",
        title: "software engineer intern",
        location: "des moines, ia",
        date: "may 2024 - august 2024",
        details: "assisted in the development, maintenance, and unit testing of 50+ web components for PFG’s design system using TypeScript, Jest, and SCSS, ensuring functionality and usability across company-wide applications.",
    }, 
    {
        company: "washington university z-lab",
        title: "undergraduate research assistant",
        location: "st. louis, mo",
        date: "august 2024 - december 2024",
        details: "built a full-stack GUI using Flask to control and monitor optical fiber alignment hardware in real time, integrating live video feeds, piezo voltage controls, and real-time power/voltage displays, improving experimental usability for lab researchers. automated fiber alignment for PIC testing using the Nelder-Mead algorithm, maximizing power meter output and reducing tuning time from 3 minutes to 10 seconds, achieving approximately 90% improvement.",
    },
    {
        company: "washington university",
        title: "teaching assistant",
        location: "st. louis, mo",
        date: "august 2023 - january 2026",
        details: "cse 2407 (Data Structures), cse 2400 (Logic & Discrete Math), cse 3302 (OOP). held oﬃce hours, guided problem sets, and graded assignments/labs/exams for 300+ students, providing clear and constructive feedback."
    }

]
export const projects = [
    {
        name: "leftover to makeover (recipe recommendation app)",
        description: "built an interactive web application that recommends ranked recipes from user-provided ingredients using a feasibility score based on ingredient overlap. designed a distributed data pipeline using Kafka, Spark, and Snowflake to process real-time and batch recipe data, implementing ingredient normalization, unit standardization, and a scalable schema for eﬃcient recipe-ingredient querying.",
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
        description: "developed a Java application that automates art packing calculations, parsing CSV specifications for artwork dimensions, materials, and quantities to generate optimal container arrangements tailored to client requirements. reduced processing time by 99%+ by automating manual calculations and minimizing errors through 145+ unit tests.",
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
        description: "developed a web app that authenticates with Spotify, fetches top tracks/artists/genres, and dynamically generates personalized playlists via chained API requests. designed an interactive dashboard with animated transitions, time-range filters, and real-time loading states to visualize user data and enhance usability.",
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
        description: "developed a real-time multiplayer iOS game in Swift using MultipeerConnectivity for peer-to-peer networking, implementing host-guest architecture, synchronized game state, and lobby/session management across devices. designed and built core gameplay systems including ingredient passing between player screens, recipe assignment, round timers, and a results screen with coordinated play-again flow requiring all players to ready up before restarting",
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