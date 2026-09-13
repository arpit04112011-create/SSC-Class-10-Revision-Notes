// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    updateThemeIcon();
});

function updateThemeIcon() {
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}
updateThemeIcon();

// Subject Data
const subjectNotes = {
    'Mathematics': {
        chapters: [
            { name: 'Real Numbers', content: '<h3>Real Numbers</h3><p>Real numbers include all rational and irrational numbers. Key concepts:</p><ul><li>Euclid\'s Division Lemma: For any two positive integers a and b, there exist unique integers q and r such that a = bq + r</li><li>Fundamental Theorem of Arithmetic: Every composite number can be expressed as a product of primes</li><li>HCF and LCM using prime factorization</li><li>Irrational Numbers: Non-terminating, non-repeating decimals</li></ul>' },
            { name: 'Polynomials', content: '<h3>Polynomials</h3><p>A polynomial is an algebraic expression with terms containing variables and constants. Key topics:</p><ul><li>Degree of a polynomial</li><li>Zeros of a polynomial</li><li>Factor Theorem: If (x-a) is a factor of p(x), then p(a) = 0</li><li>Remainder Theorem</li><li>Algebraic identities for factorization</li></ul>' },
            { name: 'Linear Equations', content: '<h3>Linear Equations in Two Variables</h3><p>Forms of linear equations and methods to solve them:</p><ul><li>Standard form: ax + by + c = 0</li><li>Methods: Substitution, Elimination, Cross-multiplication</li><li>Graphical representation</li><li>Consistent and inconsistent systems</li><li>Real-world applications</li></ul>' }
        ]
    },
    'Science': {
        chapters: [
            { name: 'Chemical Reactions', content: '<h3>Chemical Reactions and Equations</h3><p>Understanding chemical changes and their representations:</p><ul><li>Physical vs Chemical Changes</li><li>Types of reactions: Combination, Decomposition, Displacement, Double Displacement</li><li>Balancing chemical equations</li><li>Exothermic and Endothermic reactions</li><li>Oxidation and Reduction</li></ul>' },
            { name: 'Acids and Bases', content: '<h3>Acids, Bases and Salts</h3><p>Properties and reactions of acids and bases:</p><ul><li>Definitions: Arrhenius theory</li><li>Properties: Taste, Color, Reaction with indicators</li><li>pH Scale: 0-14, neutral at 7</li><li>Neutralization reactions</li><li>Common acids and bases in daily life</li><li>Salt formation</li></ul>' },
            { name: 'Electricity', content: '<h3>Electricity</h3><p>Fundamentals of electric current and circuits:</p><ul><li>Electric Charge and Current</li><li>Potential Difference (Voltage)</li><li>Resistance: Ohm\'s Law (V = IR)</li><li>Series and Parallel Circuits</li><li>Power and Energy: P = VI, E = VIt</li><li>Practical Applications</li></ul>' }
        ]
    },
    'English': {
        chapters: [
            { name: 'Grammar', content: '<h3>Grammar Essentials</h3><p>Core grammar concepts for Class 10:</p><ul><li>Tenses: Simple, Continuous, Perfect</li><li>Voice: Active and Passive Voice conversion</li><li>Reported Speech: Direct and Indirect speech</li><li>Clauses: Main, Subordinate, Relative</li><li>Parts of Speech: Noun, Verb, Adjective, Adverb, etc.</li></ul>' },
            { name: 'Literature', content: '<h3>Literature Analysis</h3><p>Key literary concepts and techniques:</p><ul><li>Literary Devices: Metaphor, Simile, Alliteration, Irony</li><li>Character Analysis and Development</li><li>Plot Structure: Exposition, Rising Action, Climax, Resolution</li><li>Themes and Symbolism</li><li>Poetry: Rhythm, Rhyme, Meter</li></ul>' },
            { name: 'Comprehension', content: '<h3>Reading Comprehension</h3><p>Techniques for effective reading and understanding:</p><ul><li>Main Idea Identification</li><li>Supporting Details</li><li>Inference and Deduction</li><li>Vocabulary in Context</li><li>Question Types: Factual, Inferential, Evaluative</li></ul>' }
        ]
    },
    'Social Studies': {
        chapters: [
            { name: 'Indian Constitution', content: '<h3>Indian Constitution</h3><p>The foundation of Indian democratic system:</p><ul><li>Preamble and its significance</li><li>Fundamental Rights and Duties</li><li>Directive Principles of State Policy</li><li>Federal System: Union and State Governments</li><li>Separation of Powers</li></ul>' },
            { name: 'Economic Development', content: '<h3>Economic Development in India</h3><p>Understanding India\'s economic growth:</p><ul><li>Sectors: Primary, Secondary, Tertiary</li><li>Natural Resources and their management</li><li>Sustainable Development</li><li>Globalization and its effects</li><li>Employment and poverty alleviation</li></ul>' },
            { name: 'World History', content: '<h3>Modern World History</h3><p>Important events that shaped the modern world:</p><ul><li>Industrial Revolution and its impact</li><li>Colonial period and imperialism</li><li>World Wars and their consequences</li><li>Independence movements worldwide</li><li>Cold War era</li></ul>' }
        ]
    },
    'Hindi': {
        chapters: [
            { name: 'व्याकरण', content: '<h3>व्याकरण (Hindi Grammar)</h3><p>हिंदी व्याकरण के मूल नियम:</p><ul><li>संज्ञा, सर्वनाम, विशेषण, क्रिया</li><li>लिंग, वचन, कारक</li><li>काल: भूतकाल, वर्तमान काल, भविष्य काल</li><li>वाच्य: कर्तृवाच्य, कर्मवाच्य, भाववाच्य</li><li>समास और उपसर्ग-प्रत्यय</li></ul>' },
            { name: 'साहित्य', content: '<h3>साहित्य (Hindi Literature)</h3><p>हिंदी साहित्य की महत्वपूर्ण रचनाएं:</p><ul><li>कविता और काव्य के प्रकार</li><li>रस, छंद, अलंकार</li><li>प्रसिद्ध कवि और लेखक</li><li>आधुनिक हिंदी साहित्य</li><li>मुहावरे और कहावतें</li></ul>' },
            { name: 'पत्र लेखन', content: '<h3>पत्र लेखन (Letter Writing)</h3><p>विभिन्न प्रकार के पत्र:</p><ul><li>औपचारिक पत्र</li><li>अनौपचारिक पत्र</li><li>आवेदन पत्र</li><li>प्रशासनिक पत्र</li><li>संपादक को पत्र</li></ul>' }
        ]
    },
    'Marathi': {
        chapters: [
            { name: 'व्याकरण', content: '<h3>व्याकरण (Marathi Grammar)</h3><p>मराठी व्याकरणाचे मूळ नियम:</p><ul><li>नाम, सर्वनाम, विशेषण, क्रिया</li><li>लिंग, वचन, कारक</li><li>काल: भूतकाळ, वर्तमान काळ, भविष्य काळ</li><li>वाक्य रचना</li><li>उपसर्ग आणि प्रत्यय</li></ul>' },
            { name: 'साहित्य', content: '<h3>साहित्य (Marathi Literature)</h3><p>मराठी साहित्याचे महत्वाचे रचना:</p><ul><li>काव्य आणि गद्य</li><li>प्रसिद्ध कवी आणि लेखक</li><li>मराठी नाटक</li><li>आधुनिक मराठी साहित्य</li><li>लोकसाहित्य</li></ul>' },
            { name: 'पत्र लेखन', content: '<h3>पत्र लेखन (Letter Writing)</h3><p>विविध प्रकारचे पत्र:</p><ul><li>औपचारिक पत्र</li><li>व्यक्तिगत पत्र</li><li>अर्ज पत्र</li><li>संपादकांना पत्र</li><li>व्यावहारिक पत्र</li></ul>' }
        ]
    }
};

// Quiz Questions
const quizQuestions = [
    {
        question: 'What is the HCF of 12 and 18?',
        options: ['2', '3', '6', '12'],
        correct: 2
    },
    {
        question: 'Which of the following is a prime number?',
        options: ['4', '9', '13', '15'],
        correct: 2
    },
    {
        question: 'The sum of angles in a triangle is:',
        options: ['90°', '180°', '270°', '360°'],
        correct: 1
    },
    {
        question: 'What is the chemical formula for table salt?',
        options: ['NaCl', 'KCl', 'CaCl₂', 'MgCl₂'],
        correct: 0
    },
    {
        question: 'Which is the largest organ in the human body?',
        options: ['Heart', 'Brain', 'Skin', 'Liver'],
        correct: 2
    },
    {
        question: 'What is the value of π (pi) approximately?',
        options: ['2.14', '3.14', '4.14', '5.14'],
        correct: 1
    }
];

let currentQuizIndex = 0;
let quizScore = 0;
let quizStarted = false;

// Search Functionality
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.subject-card');
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});

// Subject Selection
const subjectCards = document.querySelectorAll('.subject-card');
subjectCards.forEach(card => {
    card.addEventListener('click', () => {
        const subject = card.dataset.subject;
        displayNotes(subject);
    });
});

function displayNotes(subject) {
    const subjectsSection = document.querySelector('.subjects-section');
    const notesSection = document.getElementById('notesSection');
    const subjectTitle = document.getElementById('subjectTitle');
    const notesContent = document.getElementById('notesContent');

    subjectsSection.style.display = 'none';
    notesSection.style.display = 'block';
    subjectTitle.textContent = subject;

    const chapters = subjectNotes[subject].chapters;
    let html = '';
    chapters.forEach(chapter => {
        html += `<div class="chapter"><h3>${chapter.name}</h3><p>${chapter.content}</p></div>`;
    });
    notesContent.innerHTML = html;
}

// Back Button
const backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click', () => {
    document.querySelector('.subjects-section').style.display = 'block';
    document.getElementById('notesSection').style.display = 'none';
});

// Quiz Functionality
const startQuizBtn = document.getElementById('startQuizBtn');
const nextQuizBtn = document.getElementById('nextQuizBtn');
const quizQuestion = document.getElementById('quizQuestion');
const optionsContainer = document.getElementById('optionsContainer');
const quizScore_p = document.getElementById('quizScore');

startQuizBtn.addEventListener('click', () => {
    quizStarted = true;
    currentQuizIndex = 0;
    quizScore = 0;
    startQuizBtn.style.display = 'none';
    nextQuizBtn.style.display = 'block';
    loadQuestion();
});

nextQuizBtn.addEventListener('click', () => {
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showQuizResult();
    }
});

function loadQuestion() {
    const question = quizQuestions[currentQuizIndex];
    quizQuestion.textContent = `Q${currentQuizIndex + 1}: ${question.question}`;
    optionsContainer.innerHTML = '';
    nextQuizBtn.style.display = 'none';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectOption(index, question.correct));
        optionsContainer.appendChild(optionDiv);
    });
}

function selectOption(selectedIndex, correctIndex) {
    const options = document.querySelectorAll('.option');
    options.forEach((opt, idx) => {
        opt.style.pointerEvents = 'none';
        if (idx === correctIndex) {
            opt.classList.add('correct');
        } else if (idx === selectedIndex && selectedIndex !== correctIndex) {
            opt.classList.add('incorrect');
        }
    });

    if (selectedIndex === correctIndex) {
        quizScore++;
    }

    nextQuizBtn.style.display = 'block';
}

function showQuizResult() {
    quizQuestion.textContent = `Quiz Completed!`;
    optionsContainer.innerHTML = '';
    quizScore_p.textContent = `Your Score: ${quizScore} out of ${quizQuestions.length}`;
    nextQuizBtn.style.display = 'none';
    startQuizBtn.style.display = 'block';
    startQuizBtn.textContent = 'Retake Quiz';
}

// Navigation Link Active State
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Smooth Scroll
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href').substring(1);
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });
});