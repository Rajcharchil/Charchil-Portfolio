const SITE = {
  profile: {
    name: "Charchil Raj",
    title: "QA Automation Engineer",
    location: "Gurugram, Haryana, India",
    availability: "Open to full-time roles in Gurugram, Bengaluru or remote",
    cv: "assets/Charchil_Raj_QA_Automation_Engineer_Resume.pdf",
    photo: "assets/craj.jpg"
  },

  about: {
    paragraphs: [
      "I'm a QA automation engineer and a B.Tech Computer Science graduate from Lovely Professional University (2026). I test web, mobile and API products end to end: manual exploratory, functional and regression testing, plus automation with Selenium, Appium, TestNG and RestAssured, and API checks in Postman and Swagger.",
      "My largest project is the L2B Vendor Partner Android app, where I do the manual testing and built the Appium framework. It covers 72 screens, with 857 of 866 planned cases executed, 53 defects filed and a live Allure report after every run. I've also tested Android and web releases as a QA intern at Techugo, tracking defects in Jira, and I'm now a software tester intern at Vedapixel.",
      "I build apps as well as test them. I made Chat Nova, a Kotlin Android chatbot with Firebase sign-in and Google's Gemini API, and released it as an installable APK. On the AI side, I built ARIMA and LSTM forecasting models and computer-vision models as a data science intern at Zidio, and my team placed 2nd runner-up at the HackAI 24-hour hackathon with a TensorFlow and OpenCV disease-detection app.",
      "I've studied generative and agentic AI through Vanderbilt's AI Agents courses and DeepLearning.AI's Generative AI with Large Language Models, and I use Claude and Cursor in my everyday engineering work. I'm looking for a QA automation role where testing, mobile and AI meet."
    ]
  },

  projects: [
    {
      slug: "l2b-vendor-appium-automation",
      title: "L2B Vendor Partner — Mobile Test Automation",
      tagline: "End-to-end manual + Appium automation for a vendor marketplace app",
      category: "Mobile test automation",
      date: "Oct 2026",
      role: "QA Engineer — manual testing and test automation",
      summary: "",
      goal: "Own end-to-end quality for the L2B Vendor Partner Android app (QA build), from first-launch onboarding and OTP to rental and material booking lifecycles, fleet, KYC, earnings and support — combining systematic manual testing with a scalable Appium automation framework.",
      whatIDid: [
        "Own end-to-end QA for the complete vendor app: manual exploratory, functional, regression and edge-case testing across 72 screens, with screenshot evidence packs and a written test plan per module (happy path, interactions, edges and lifecycle states)",
        "Designed a layered test architecture per feature module — data (Swagger/OpenAPI clients and DTOs over RestAssured), domain (suite environment, session and reset policy) and presentation (Page Objects and TestNG tests) — so UI tests stay decoupled from backend state setup and verification",
        "Built the Appium 3 + Java 17 + TestNG + Maven framework with a thread-safe driver lifecycle (DriverFactory / DriverManager), an explicit-wait strategy with zero implicit waits, failure screenshots and a TestNG listener feeding Allure reporting",
        "Automated a Jetpack Compose UI that exposes no resource-ids, using Compose clickable-View XPath locators, gesture and scroll handling, and back-stack, rapid-tap, offline-mode, relaunch and permission-dialog edge cases",
        "Structured every module into Landing, Interact, Edge, Lifecycle and API suites (479 isolated TestNG suite files), verifying backend state through APIs after UI actions such as accept, decline and operator assignment",
        "Ran manual defect hunting in parallel with automation: defects logged with severity, preconditions, steps to reproduce and screenshot evidence, plus retest packs for fixed issues",
        "Publish a live Allure report with history and trend, plus a coverage dashboard, to GitHub Pages after each run so results stay visible without re-running the suite"
      ],
      results: [
        "857 of 866 planned cases executed across 72 screens (published coverage dashboard)",
        "18 feature modules automated — 108 test classes and 25 page objects",
        "53 defects filed, including a high-priority booking accept/assign blocker",
        "Live Allure report updated after every test run"
      ],
      tools: ["Java", "Appium", "TestNG", "RestAssured", "Allure reports", "Swagger (OpenAPI)", "Android Studio", "Android"],
      links: {
        repo: "https://github.com/Rajcharchil/L2B-Vendor-Appium-Automation",
        demo: "https://rajcharchil.github.io/l2b-vendor-allure/",
        apk: "",
        docs: "https://charchilfromlink2build.github.io/L2B-Vendor-Appium-Automation/",
        certificate: ""
      },
      cover: "assets/projects/l2b-vendor/cover.webp",
      coverFallback: "",
      gallery: [
        { src: "assets/projects/l2b-vendor/home.webp", alt: "L2B Vendor Partner home screen with fleet and booking summary", caption: "Home — active fleet, upcoming bookings and projected earnings (rental vendor)" },
        { src: "assets/projects/l2b-vendor/quick-booking.webp", alt: "Quick Booking request screen with amount, map and accept or decline actions", caption: "Quick Booking — incoming rental request with countdown timer, Accept / Decline" },
        { src: "assets/projects/l2b-vendor/fleet.webp", alt: "Your Fleet screen listing machines with registration numbers and review status", caption: "Fleet — machines under review with capacity and operator assignment" },
        { src: "assets/projects/l2b-vendor/kyc.webp", alt: "KYC form with identity, document upload and bank account fields", caption: "KYC — identity, document upload and bank details verification flow" }
      ],
      featured: true,
      hidden: false,
      tags: ["Mobile test automation", "Appium"],
      log: ["mvn test ................ TestNG suites", "landing/interact/edge ... 857/866 cases", "allure .................. live report", "defects filed ........... 53"],
      colors: ["#241a04", "#a16207"]
    },
    {
      slug: "api-testing-communication-platform",
      title: "API Testing for a Real-Time Communication Platform",
      tagline: "Contract-first, data-driven REST API validation with Postman",
      category: "API testing",
      date: "Apr 2025",
      role: "QA / API tester (individual project)",
      summary: "",
      goal: "Verify the REST API layer of a real-time communication platform — users, messages, calls and contacts — with a repeatable, data-driven test approach instead of one-off manual requests, so the same checks can be re-run after every backend change.",
      whatIDid: [
        "Modelled the API contract first in Swagger (OpenAPI) and stood up a JSON Server mock backend, so test design could start from the contract (resources, payloads, status codes) before hitting real endpoints",
        "Built structured Postman collections per resource (users, messages, calls, contacts) with environment variables and reusable request templates instead of ad-hoc calls",
        "Made the suite data-driven: external CSV and JSON datasets drive the same collection through many input combinations — valid, boundary and invalid data — without duplicating requests",
        "Layered assertions on every request: HTTP status code, response time and business logic in the response body, so a green run means the behaviour is right, not just that the server responded",
        "Covered negative paths deliberately, e.g. fetching a non-existent contact returns 404, alongside happy-path 200/201 flows for reads and message creation"
      ],
      results: [
        "Four API resources under test: users, messages, calls and contacts",
        "Data-driven execution from CSV / JSON — one collection, many datasets",
        "Positive and negative scenarios asserted (200 OK, 201 Created, 404 Not Found)",
        "Repeatable suite design: the same run can be repeated after any API change"
      ],
      tools: ["Postman", "Swagger (OpenAPI)", "JSON Server", "REST API", "CSV / JSON data"],
      links: { repo: "", demo: "", apk: "", docs: "", certificate: "" },
      cover: "assets/projects/api-testing/cover.webp",
      coverFallback: "",
      gallery: [
        { src: "assets/projects/api-testing/collections.webp", alt: "API collections organised by resource: users, messages, calls and contacts", caption: "Test design — collections organised by resource, contract-first with Swagger and a JSON Server mock" },
        { src: "assets/projects/api-testing/data-driven.webp", alt: "Data-driven execution diagram: CSV and JSON datasets driving one Postman collection", caption: "Test design — external CSV / JSON data drives repeated collection runs" },
        { src: "assets/projects/api-testing/assertions.webp", alt: "Assertion checklist: status codes, response time, business logic, negative paths", caption: "Test design — assertions layered on status, response time and business logic" }
      ],
      featured: true,
      hidden: false,
      tags: ["API testing", "Postman"],
      log: ["GET  /users ......... 200 OK", "POST /messages ...... 201 Created", "GET  /calls ......... 200 OK", "GET  /contacts/99 ... 404 Not Found"],
      colors: ["#1b1f3b", "#312e81"]
    },
    {
      slug: "flipkart-web-automation",
      title: "Flipkart Web Automation Framework",
      tagline: "Selenium + Cucumber BDD framework with Page Object Model",
      category: "Web test automation",
      date: "Nov 2025",
      role: "Test automation engineer (individual project on a public website, not affiliated with Flipkart)",
      summary: "",
      goal: "Build a maintainable end-to-end (E2E) automation framework for a high-traffic e-commerce web app — written in business-readable BDD so scenarios stay understandable to non-technical stakeholders, and structured so new flows can be added without rewriting the core.",
      whatIDid: [
        "Built the framework on Java 11, Selenium WebDriver 4.23, Cucumber 7.20 (BDD) and TestNG 7.10, built with Maven — versions pinned in pom.xml alongside WebDriverManager, Apache POI, Extent Reports and Allure dependencies",
        "Wrote scenarios in Gherkin (Given/When/Then) with a shared Background that launches the application, dismisses the login popup and lands on the home page, then validates the product-search journey end to end",
        "Applied the Page Object Model: locators and page actions live in page classes (SearchPage), step definitions stay thin, and reusable Selenium actions are centralised in a SeleniumReusable utility",
        "Separated concerns into layers — Baseclass (driver lifecycle), Hooks (setup/teardown), ReusableFunctions, Utilities and TestRunner — so a locator or driver change touches one place, not every test",
        "Externalised test data and configuration: ExcelUtility (Apache POI) supplies data-driven inputs and Config.properties holds environment config, keeping hard-coded data out of test code",
        "Wired reporting into the build (Cucumber HTML report, with Extent Reports and Allure adapters in the dependency set) so every run produces a shareable execution report"
      ],
      results: [
        "Working BDD framework: Gherkin features → step definitions → page objects → TestNG runner",
        "Search journey automated end to end against the live e-commerce site",
        "Data-driven inputs via Excel and externalised config — no hard-coded test data",
        "HTML execution report generated per run (target/cucumber-html-report)"
      ],
      tools: ["Java", "Selenium WebDriver", "TestNG", "Cucumber", "Page Object Model", "Maven", "Allure reports", "Eclipse"],
      links: { repo: "https://github.com/Rajcharchil/flipkart_Automation_Testing", demo: "", apk: "", docs: "", certificate: "" },
      cover: "assets/projects/flipkart-automation/cover.webp",
      coverFallback: "",
      gallery: [
        { src: "assets/projects/flipkart-automation/feature.webp", alt: "Actual Gherkin feature file from the repository: Validate Flipkart Application, search scenario", caption: "Actual feature file from the repo — Gherkin Background + search scenario" },
        { src: "assets/projects/flipkart-automation/architecture.webp", alt: "Framework architecture: Baseclass, Hooks, ReusableFunctions, Pages, Step definitions, TestRunner, Utilities", caption: "Framework architecture — layered packages from the repo structure" },
        { src: "assets/projects/flipkart-automation/reporting.webp", alt: "Data, config and reporting: Config.properties, ExcelUtility, WebDriverManager, Cucumber HTML report", caption: "Test design — externalised data/config and per-run HTML reporting" }
      ],
      featured: true,
      hidden: false,
      tags: ["Web test automation", "Selenium WebDriver"],
      log: ["feature ......... search (Gherkin)", "runner .......... TestNG + Cucumber", "data ............ Excel (Apache POI)", "report .......... Cucumber HTML"],
      colors: ["#0f2a1a", "#14532d"]
    },
    {
      slug: "chat-nova",
      title: "Chat Nova: AI Chatbot",
      tagline: "Android chatbot powered by the Gemini API",
      category: "Android development",
      date: "Feb 2025",
      role: "Android developer (individual project)",
      summary: "",
      goal: "Build a production-shaped Android AI assistant — authenticated, responsive and installable — that gives users natural Gemini-powered conversations (text and voice) in a polished native UI, published as a downloadable APK on GitHub Releases.",
      whatIDid: [
        "Built the app natively in Kotlin (Android Studio, minSdk 24 / targetSdk 34) with a multi-screen flow: splash, login, signup, forgot-password, chat, voice assistant, profile and upgrade screens",
        "Integrated Google's Gemini generative AI SDK for chat responses, with a dedicated API utility layer (GeminiApiUtilities) keeping model calls out of the UI code",
        "Implemented Firebase Authentication (email/password plus Google Sign-In) with Firestore, so access is gated and user data is backed by a real backend, not local-only state",
        "Built the conversation UI on RecyclerView with a custom ChatAdapter and separate user/AI bubble layouts, a typing/progress indicator while the model responds, and a navigation drawer for app sections",
        "Added a voice-assistant screen, Lottie animations (splash, welcome, voice wave) and Glide image loading, and shipped the result as a versioned APK (v1.0) via GitHub Releases"
      ],
      results: ["Published APK v1.0 on GitHub Releases — installable build, not just source code", "End-to-end flow working: sign up / sign in → AI chat → voice assistant", "Firebase-backed authentication with Google Sign-In", "UI response time improved by 30% after optimisation"],
      tools: ["Kotlin", "Android Studio", "Firebase", "Gemini API", "Lottie", "XML"],
      log: ["auth ..... Firebase", "model .... Gemini", "offline .. enabled", "ui speed .. +30%"],
      links: {
        repo: "https://github.com/Rajcharchil/Chat-Nova",
        demo: "",
        apk: "https://github.com/Rajcharchil/Chat-Nova/releases/download/v1.0/app-debug.apk",
        docs: "",
        certificate: ""
      },
      cover: "assets/projects/chat-nova/cover.webp",
      coverFallback: "",
      gallery: [
        { src: "assets/projects/chat-nova/chat.webp", alt: "ChatNova chat screen with user and Gemini AI conversation bubbles", caption: "Chat — Gemini-powered conversation with user / AI bubbles (real device screenshot)" },
        { src: "assets/projects/chat-nova/login.webp", alt: "ChatNova login screen with email, password and social sign-in", caption: "Login — Firebase authentication with Google / Facebook sign-in" },
        { src: "assets/projects/chat-nova/signup.webp", alt: "ChatNova sign-up screen", caption: "Sign up — new account registration flow" },
        { src: "assets/projects/chat-nova/profile.webp", alt: "ChatNova profile screen", caption: "Profile — account section inside the navigation flow" }
      ],
      featured: true,
      hidden: false,
      tags: ["Android development", "Kotlin"],
      colors: ["#3b0f2e", "#9d174d"]
    },
    {
      slug: "syntax-error-platform",
      title: "SYNTAX-ERROR: Coding Practice Platform",
      tagline: "Live coding challenges with instant feedback — deployed on GitHub Pages",
      category: "Web development",
      date: "Jul 2025",
      role: "Web developer (individual project)",
      summary: "",
      goal: "Give learners a single place to practise JavaScript the way interviews test it: pick a challenge, write code in the browser, run it, and get instant feedback — with progress and interview preparation built in, live on GitHub Pages.",
      whatIDid: [
        "Built the platform with modular HTML, CSS and JavaScript (separate modules for the code editor, authentication and user state), deployed live on GitHub Pages",
        "Implemented an in-browser coding flow: challenge statement with test cases, a Code/Output workspace and a Run Code action that evaluates the solution and returns real-time feedback",
        "Curated a featured challenge library — Find Maximum Number, Palindrome Checker, FizzBuzz, Reverse a String, Array Flattening and Anagram Detector — filterable by difficulty (All / Easy / Medium)",
        "Added an interview-preparation section with curated questions and explanations, plus Firebase-backed login/sign-up so practice is tied to a user account",
        "Designed a responsive dark UI and verified the live site across viewports — navigation, challenge filtering, editor and feedback all work without a build step"
      ],
      results: [
        "Live and publicly deployed on GitHub Pages (link below)",
        "6 featured challenges with difficulty filtering and instant run feedback",
        "Interview-preparation track alongside hands-on challenges",
        "Firebase authentication (login / sign-up) integrated"
      ],
      tools: ["HTML", "CSS", "JavaScript", "Firebase", "Responsive design"],
      links: {
        repo: "https://github.com/Rajcharchil/syntaxerror-challenges-Plateform",
        demo: "https://rajcharchil.github.io/syntaxerror-challenges-Plateform/",
        apk: "",
        docs: "",
        certificate: ""
      },
      cover: "assets/projects/syntax-error-platform/cover.webp",
      coverFallback: "",
      gallery: [
        { src: "assets/projects/syntax-error-platform/home.webp", alt: "SYNTAX-ERROR homepage: Master Coding Through Interactive Challenges with a sample challenge panel", caption: "Homepage — challenge workspace with problem statement and test cases (live site)" },
        { src: "assets/projects/syntax-error-platform/live-home.webp", alt: "SYNTAX-ERROR live site on a narrow viewport with hero and challenge panel", caption: "Live site — responsive layout on a narrow viewport" },
        { src: "assets/projects/syntax-error-platform/challenges.webp", alt: "Featured Challenges section with All, Easy and Medium difficulty filters", caption: "Featured challenges — difficulty filters (All / Easy / Medium) on the live site" }
      ],
      featured: true,
      hidden: false,
      tags: ["Web development", "JavaScript"],
      log: ["challenges ..... 6 featured", "feedback ....... instant (Run Code)", "auth ........... Firebase", "deploy ......... GitHub Pages (live)"],
      colors: ["#2b2410", "#a16207"]
    },
    {
      slug: "hackai-disease-detection",
      title: "AI Early Disease Detection (HackAI)",
      tagline: "2nd runner-up in a 24-hour hackathon",
      category: "AI / Hackathon",
      date: "Feb 2025",
      role: "Team member",
      summary: "",
      goal: "In a 24-hour hackathon, build a working AI assistant that helps doctors screen medical images early — pneumonia from chest X-rays, bone fractures from X-rays and skin-cancer risk from lesion photos — and runs on low-cost hardware for under-served clinics.",
      whatIDid: [
        "Built three deep-learning classifiers behind one product (Medi Assist): pneumonia detection from chest X-rays (CNN, trained in a Jupyter notebook and exported as .keras/.h5 models), bone-fracture classification, and skin-lesion classification across six categories from actinic keratosis to melanoma",
        "Preprocessed medical images with OpenCV and PIL (resize, normalisation) and served predictions through a shared Python module so the UI calls one clean predict API per disease",
        "Shipped a Streamlit web app a doctor can actually use in the demo: pick a disease, upload an image or capture one from the camera, and get the predicted label with a confidence score",
        "Optimised for the hackathon constraint that matters — low-cost, resource-limited deployment — while keeping the three-model pipeline maintainable (requirements pinned: TensorFlow, Torch, Transformers, OpenCV)",
        "Worked as a 3-member team under a 24-hour deadline, owning delivery end to end from model training to the live demo"
      ],
      results: ["2nd Runner-Up at the HackAI 24-hour hackathon (Feb 2025)", "95% accuracy reported on X-ray and skin-image evaluation", "Three diseases screened in one app: pneumonia, fracture, skin cancer (6 lesion classes)", "Working Streamlit demo with upload + live camera capture"],
      tools: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
      links: { repo: "https://github.com/Rajcharchil/HackAI_Hackathon", demo: "", apk: "", docs: "", certificate: "" },
      cover: "assets/projects/hackai/cover.webp",
      coverFallback: "",
      gallery: [
        { src: "assets/projects/hackai/chest-xray.webp", alt: "Sample chest X-ray from the repository used for pneumonia screening", caption: "Sample input from the repo — chest X-ray for pneumonia screening" },
        { src: "assets/projects/hackai/fracture.webp", alt: "Sample forearm X-ray with a visible fracture from the repository", caption: "Sample input from the repo — forearm X-ray for fracture classification" },
        { src: "assets/projects/hackai/normal.webp", alt: "Sample normal chest X-ray from the repository", caption: "Sample input from the repo — normal chest X-ray (control case)" }
      ],
      featured: true,
      hidden: false,
      tags: ["AI / Hackathon", "TensorFlow"],
      log: ["x-ray model ... trained", "skin model ... trained", "accuracy ...... 95%", "result ........ 2nd runner-up"],
      colors: ["#10303b", "#0e7490"]
    },
    {
      slug: "ecommerce-appium-ui-testing",
      title: "Automated UI Testing for an E-Commerce App",
      tagline: "Appium UI tests with CI on GitHub Actions",
      category: "Mobile test automation",
      date: "",
      role: "",
      summary: "",
      goal: "",
      whatIDid: [],
      results: [],
      tools: ["Appium", "JUnit", "GitHub Actions", "XPath"],
      links: { repo: "", demo: "", apk: "", docs: "", certificate: "" },
      cover: "",
      coverFallback: "",
      gallery: [],
      featured: false,
      hidden: true,
      tags: ["Mobile test automation", "Appium"],
      log: [],
      colors: ["#0f2a1a", "#166534"]
    }
  ],

  experience: [
    {
      company: "Vedapixel Tech Solutions Pvt. Ltd.",
      role: "Software Tester Intern",
      type: "Internship",
      location: "Bengaluru, Karnataka",
      start: "Jul 2026",
      end: "",
      current: true,
      summary: "Working with the QA and development teams on manual and automation testing of web, mobile and API products.",
      highlights: [
        "Design and execute test cases for web, mobile and API features",
        "Run functional, regression and smoke testing before releases",
        "Report and track defects with clear steps to reproduce",
        "Prepare test documentation",
        "Learn and apply the automation tools and frameworks assigned by the team"
      ],
      skills: ["Manual testing", "API testing", "Automation testing", "Defect tracking"]
    },
    {
      company: "Techugo",
      role: "QA Tester Intern",
      type: "Internship",
      location: "Noida, Uttar Pradesh",
      start: "Dec 2025",
      end: "May 2026",
      current: false,
      summary: "Tested Android and web applications across multiple release cycles in an Agile team.",
      highlights: [
        "Performed manual and automated testing: functional, regression, smoke and API",
        "Validated a large number of REST API endpoints using Postman and Swagger",
        "Tracked defects in Jira, achieving a 78 to 88% defect resolution rate within sprint deadlines"
      ],
      skills: ["Postman", "Swagger", "Jira", "Agile", "Android testing", "Web testing"]
    },
    {
      company: "Zidio Development",
      role: "Data Science & Analytics Intern",
      type: "Internship (remote)",
      location: "Remote",
      start: "Jun 2025",
      end: "Sep 2025",
      current: false,
      summary: "Built forecasting and computer-vision models on historical and image data.",
      highlights: [
        "Built time-series stock market prediction models with ARIMA and LSTM (forecast accuracy in the 85 to 91% range)",
        "Developed image captioning and segmentation models and improved accuracy to the 80 to 86% range through tuning and validation",
        "Cleaned data and documented the pipelines"
      ],
      skills: ["Python", "ARIMA", "LSTM", "Data analysis"]
    }
  ],

  education: [
    { school: "Lovely Professional University, Punjab", degree: "B.Tech, Computer Science and Engineering", period: "2022 - 2026", score: "CGPA 7.0", level: "Bachelor's degree" },
    { school: "Holy Cross Public School, Muzaffarpur, Bihar", degree: "12th, Science", period: "2021", score: "69%", level: "Higher secondary" }
  ],

  achievements: [
    {
      title: "2nd Runner-Up, HackAI 24-hour hackathon",
      date: "Feb 2025",
      detail: "AI-based early disease detection with 95% accuracy on X-ray and skin images",
      metric: "95%",
      metricLabel: "reported model accuracy",
      place: "2nd Runner-Up",
      tags: ["Feb 2025", "24-hour hackathon", "AI / ML"],
      projectSlug: "hackai-disease-detection"
    },
    {
      title: "HackAI Hackathon participation certificate",
      date: "Feb 2025",
      detail: "HackAI"
    }
  ],

  certifications: [
    { title: "Software Engineering: Implementation and Testing", issuer: "The Hong Kong University of Science and Technology (Coursera)", date: "Apr 2024", category: "Software testing and engineering", featured: true, image: "assets/certificate2.png", verifyUrl: "", credentialId: "", note: "" },
    { title: "Software Development Processes and Methodologies", issuer: "University of Minnesota (Coursera)", date: "Apr 2024", category: "Software testing and engineering", featured: true, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "J.P. Morgan Software Engineering Job Simulation", issuer: "Forage", date: "Aug 2025", category: "Software testing and engineering", featured: true, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "Agile Project Management", issuer: "University of Colorado Boulder (Coursera)", date: "Oct 2025", category: "Agile and project management", featured: true, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "Project Planning and Execution", issuer: "University of Colorado Boulder (Coursera)", date: "Oct 2025", category: "Agile and project management", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "Project Management: Foundations and Initiation", issuer: "University of Colorado Boulder (Coursera)", date: "Sep 2025", category: "Agile and project management", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "AI Agents and Agentic AI Architecture in Python", issuer: "Vanderbilt University (Coursera)", date: "Apr 2026", category: "AI and GenAI", featured: true, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "AI Agents and Agentic AI with Python & Generative AI", issuer: "Vanderbilt University (Coursera)", date: "Feb 2026", category: "AI and GenAI", featured: true, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "OpenAI GPTs: Creating Your Own Custom AI Assistants", issuer: "Vanderbilt University (Coursera)", date: "Feb 2026", category: "AI and GenAI", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "Generative AI with Large Language Models", issuer: "DeepLearning.AI and AWS (Coursera)", date: "Mar 2024", category: "AI and GenAI", featured: true, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "ChatGPT Advanced Data Analysis", issuer: "Vanderbilt University (Coursera)", date: "Apr 2024", category: "AI and GenAI", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "Build AI Apps with ChatGPT, Dall-E, and GPT-4", issuer: "Scrimba (Coursera)", date: "Apr 2024", category: "AI and GenAI", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "Learn to code with AI", issuer: "Scrimba (Coursera)", date: "Apr 2024", category: "AI and GenAI", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "ChatGPT Playground for Beginners: Intro to NLP AI", issuer: "Coursera Project Network", date: "Apr 2024", category: "AI and GenAI", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "ChatGPT for Beginners: Save time with Microsoft Excel", issuer: "Coursera Project Network", date: "Apr 2024", category: "AI and GenAI", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "Introduction to Generative AI", issuer: "Google", date: "Mar 2024", category: "AI and GenAI", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "Cloud Computing (NPTEL Elite)", issuer: "NPTEL, IIT Kharagpur", date: "Apr 2025 (Jan-Apr 2025 course)", category: "Cloud and networking", featured: true, image: "assets/certs/cloud-computing.webp", verifyUrl: "", credentialId: "NPTEL25CS11S1337300124", note: "Consolidated score 61% (assignments 24.31/25, proctored exam 36.5/75), 12-week course, 3 or 4 credits recommended" },
    { title: "The Bits and Bytes of Computer Networking", issuer: "Google (Coursera)", date: "Mar 2024", category: "Cloud and networking", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "Fundamentals of Network Communication", issuer: "University of Colorado System (Coursera)", date: "Apr 2024", category: "Cloud and networking", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "Static Routing Configuration Using Packet Tracer", issuer: "Coursera guided project", date: "Apr 2024", category: "Cloud and networking", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "Mastering Data Structures and Algorithms using C++", issuer: "Udemy", date: "Feb 2024", category: "Programming and DSA", featured: false, image: "assets/c++.png", verifyUrl: "", credentialId: "", note: "58.5 hours" },
    { title: "Dynamic Programming, Greedy Algorithms", issuer: "University of Colorado Boulder (Coursera)", date: "Apr 2024", category: "Programming and DSA", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "Approximation Algorithms and Linear Programming", issuer: "University of Colorado Boulder (Coursera)", date: "Apr 2024", category: "Programming and DSA", featured: false, image: "", verifyUrl: "", credentialId: "", note: "" },
    { title: "Java Application Development", issuer: "Course certificate", date: "Jul 2024", category: "Programming and DSA", featured: false, image: "assets/javaApplication.jpg", verifyUrl: "", credentialId: "", note: "" },
    { title: "Object Oriented Programming", issuer: "Lovely Professional University", date: "Nov 2023", category: "Programming and DSA", featured: false, image: "assets/lpucolab.png", verifyUrl: "", credentialId: "", note: "" }
  ],

  skills: [
    { group: "Testing", items: [
      { name: "Manual testing", color: "#4CAF50" }, { name: "Functional", color: "#66BB6A" }, { name: "Regression", color: "#2E7D32" },
      { name: "Smoke", color: "#81C784" }, { name: "Sanity", color: "#A5D6A7" }, { name: "API testing", color: "#0288D1" },
      { name: "Cross-browser", color: "#26A69A" }, { name: "Data-driven testing", color: "#00838F" }, { name: "Test case design", color: "#5C6BC0" },
      { name: "Defect tracking", color: "#E53935" }, { name: "SDLC and STLC", color: "#8D6E63" }, { name: "Agile / Scrum", color: "#7E57C2" }
    ]},
    { group: "Automation", items: [
      { name: "Selenium WebDriver", color: "#43A047" }, { name: "Appium", color: "#00C853" }, { name: "TestNG", color: "#7B1FA2" },
      { name: "JUnit", color: "#FF4081" }, { name: "RestAssured", color: "#FF9800" }, { name: "Page Object Model", color: "#4458dc" },
      { name: "Allure reports", color: "#FF6F00" }
    ]},
    { group: "API and tools", items: [
      { name: "Postman", color: "#FF6B6B" }, { name: "Swagger (OpenAPI)", color: "#85EA2D" }, { name: "Jira", color: "#2684FF" },
      { name: "Jenkins (CI/CD)", color: "#D24939" }, { name: "Git and GitHub", color: "#F05032" }, { name: "Linux", color: "#FCC624" }
    ]},
    { group: "Languages", note: "Course completed: Programming Fundamentals in Kotlin, Meta (Coursera), Nov 2024", items: [
      { name: "Java", color: "#007396" }, { name: "Kotlin", color: "#7F52FF" }, { name: "SQL", color: "#F29111" },
      { name: "Python", color: "#3776AB" }, { name: "JavaScript", color: "#F7DF1E" }, { name: "C++", color: "#00599C" }
    ]},
    { group: "Development", items: [
      { name: "Android (Kotlin)", color: "#3DDC84" }, { name: "HTML and CSS", color: "#E44D26" },
      { name: "Firebase", color: "#FFA000" }, { name: "Android Studio", color: "#689F38" }
    ]},
    { group: "AI / GenAI", note: "Certified coursework: AI Agents & Agentic AI Architecture (Vanderbilt) · Generative AI with LLMs (DeepLearning.AI + AWS). Hands-on: Gemini API in Chat Nova, TensorFlow at HackAI, and Claude + Cursor in my daily QA workflow.", noteLogos: ["anthropic", "vanderbilt", "deeplearningai"], items: [
      { name: "Claude AI", color: "#D97757" }, { name: "ChatGPT", color: "#10A37F" },
      { name: "Gemini API", color: "#8AB4F8" }, { name: "Prompt engineering", color: "#FFC107" },
      { name: "Agentic AI / AI agents", color: "#7C4DFF" }, { name: "Generative AI & LLMs", color: "#00ACC1" },
      { name: "AI-assisted testing", color: "#43A047" }, { name: "Cursor (AI IDE)", color: "#9E9E9E" },
      { name: "TensorFlow", color: "#FF6F00" }, { name: "OpenCV", color: "#5C6BC0" }
    ]},
    { group: "Soft skills", items: [
      { name: "Resilience", color: "#4CAF50" }, { name: "Perseverance", color: "#9C27B0" },
      { name: "Rapid learning", color: "#FFC107" }, { name: "Inquisitive thinking", color: "#FFEB3B" },
      { name: "Team collaboration", color: "#26C6DA" }
    ]}
  ],

  contact: {
    email: "rajcharchil555@gmail.com",
    linkedin: "https://www.linkedin.com/in/charchilraj/",
    github: "https://github.com/Rajcharchil"
  }
};

const mark = (key, label, file, alt) => ({
  key,
  label,
  src: `assets/logos/${file}?v=2`,
  alt: alt || `${label} logo`
});

const ICONS = {
  github: mark("github", "GitHub", "github.svg"),
  linkedin: mark("linkedin", "LinkedIn", "linkedin.svg"),
  mail: mark("mail", "Email", "mail.svg", "Email"),
  download: mark("download", "Download", "download.svg", "Download"),
  "external-link": mark("external-link", "Live demo", "external-link.svg", "External link"),
  android: mark("android", "Android", "android.svg"),
  java: mark("java", "Java", "java.svg"),
  kotlin: mark("kotlin", "Kotlin", "kotlin.svg"),
  python: mark("python", "Python", "python.svg"),
  javascript: mark("javascript", "JavaScript", "javascript.svg"),
  cplusplus: mark("cplusplus", "C++", "cplusplus.svg"),
  html5: mark("html5", "HTML", "html5.svg"),
  css3: mark("css3", "CSS", "css3.svg"),
  database: mark("database", "SQL", "database.svg", "Database"),
  selenium: mark("selenium", "Selenium", "selenium.svg"),
  appium: mark("appium", "Appium", "appium.svg"),
  testng: mark("testng", "TestNG", "flask-conical.svg", "Test tool"),
  junit: mark("junit", "JUnit", "junit.svg"),
  restassured: mark("restassured", "RestAssured", "shield-check.svg", "API testing"),
  pom: mark("pom", "Page Object Model", "layers.svg", "Page Object Model"),
  retrofit: mark("retrofit", "Retrofit", "cable.svg", "HTTP client"),
  jsonserver: mark("jsonserver", "JSON Server", "server.svg", "Server"),
  restapi: mark("restapi", "REST API", "unplug.svg", "API"),
  filejson: mark("filejson", "JSON", "file-json.svg", "Data file"),
  filecode: mark("filecode", "Code", "file-code.svg", "Code"),
  table: mark("table", "Data-driven testing", "table.svg", "Data table"),
  chart: mark("chart", "Time series", "chart-line.svg", "Chart"),
  postman: mark("postman", "Postman", "postman.svg"),
  swagger: mark("swagger", "Swagger", "swagger.svg"),
  jira: mark("jira", "Jira", "jira.svg"),
  jenkins: mark("jenkins", "Jenkins", "jenkins.svg"),
  git: mark("git", "Git", "git.svg"),
  githubactions: mark("githubactions", "GitHub Actions", "githubactions.svg"),
  linux: mark("linux", "Linux", "linux.svg"),
  androidstudio: mark("androidstudio", "Android Studio", "androidstudio.svg"),
  eclipse: mark("eclipse", "Eclipse", "eclipse.svg"),
  firebase: mark("firebase", "Firebase", "firebase.svg"),
  allure: mark("allure", "Allure", "allure.svg"),
  tensorflow: mark("tensorflow", "TensorFlow", "tensorflow.svg"),
  opencv: mark("opencv", "OpenCV", "opencv.svg"),
  streamlit: mark("streamlit", "Streamlit", "streamlit.svg"),
  googlegemini: mark("googlegemini", "Gemini", "googlegemini.svg"),
  lottie: mark("lottie", "Lottie", "lottiefiles.svg"),
  clipboard: mark("clipboard", "Testing", "clipboard-check.svg", "Testing"),
  globe: mark("globe", "Web", "globe.svg", "Web"),
  window: mark("window", "App window", "app-window.svg", "Application window"),
  listchecks: mark("listchecks", "Test cases", "list-checks.svg", "Checklist"),
  workflow: mark("workflow", "Process", "workflow.svg", "Workflow"),
  bug: mark("bug", "Defect tracking", "bug.svg", "Defect"),
  users: mark("users", "Agile", "users.svg", "Team"),
  bot: mark("bot", "Automation", "bot.svg", "Automation"),
  chartcol: mark("chartcol", "Data analysis", "chart-column.svg", "Chart"),
  sparkles: mark("sparkles", "AI", "sparkles.svg", "AI"),
  heart: mark("heart", "Resilience", "heart.svg"),
  repeat: mark("repeat", "Perseverance", "repeat.svg"),
  zap: mark("zap", "Rapid learning", "zap.svg"),
  search: mark("search", "Inquisitive thinking", "search.svg"),
  handshake: mark("handshake", "Team collaboration", "handshake.svg"),
  smartphone: mark("smartphone", "Mobile", "smartphone.svg", "Mobile"),
  book: mark("book", "Documentation", "book-open.svg", "Documentation"),
  filetext: mark("filetext", "Certificate", "file-text.svg", "Document"),
  cursor: mark("cursor", "Cursor", "cursor.svg"),
  anthropic: mark("anthropic", "Claude", "anthropic.svg"),
  openai: mark("openai", "OpenAI", "openai.svg")
};

const ISSUERS = {
  google: mark("google", "Google", "google.svg"),
  coursera: mark("coursera", "Coursera", "coursera.svg"),
  vanderbilt: mark("vanderbilt", "Vanderbilt University", "vanderbilt.png"),
  cuboulder: mark("cuboulder", "University of Colorado Boulder", "cuboulder.png"),
  umn: mark("umn", "University of Minnesota", "umn.png"),
  hkust: mark("hkust", "HKUST", "hkust.svg"),
  deeplearningai: mark("deeplearningai", "DeepLearning.AI", "deeplearningai.png"),
  aws: mark("aws", "Amazon Web Services", "amazonwebservices.svg"),
  scrimba: mark("scrimba", "Scrimba", "scrimba.svg"),
  udemy: mark("udemy", "Udemy", "udemy.svg"),
  nptel: mark("nptel", "NPTEL", "nptel.png"),
  iitkgp: mark("iitkgp", "IIT Kharagpur", "iitkgp.png"),
  forage: mark("forage", "Forage", "forage.png"),
  jpmorgan: mark("jpmorgan", "J.P. Morgan", "jpmorgan.svg"),
  meta: mark("meta", "Meta", "meta.svg"),
  lpu: mark("lpu", "Lovely Professional University", "lpu.png"),
  hackai: mark("hackai", "HackAI", "hackai.svg", "HackAI"),
  "course-certificate": mark("course-certificate", "Course certificate", "course-certificate.svg", "Certificate")
};

const COMPANIES = {
  vedapixel: mark("vedapixel", "Vedapixel Tech Solutions", "vedapixel.png"),
  techugo: mark("techugo", "Techugo", "techugo.svg"),
  zidio: mark("zidio", "Zidio Development", "zidio.png"),
  lpu: ISSUERS.lpu,
  holycross: mark("holycross", "Holy Cross Public School", "holycross.svg", "Holy Cross Public School")
};
