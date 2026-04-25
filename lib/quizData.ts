export type Question = {
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type Topic = {
  slug: string;
  title: string;
  blurb: string;
  symbol: string;
  accent: "pink" | "red" | "crimson" | "ember";
  questions: Question[];
};

export const topics: Topic[] = [
  {
    slug: "psychology",
    title: "Psychology",
    blurb: "Mind, behavior, and the curious quirks of being human.",
    symbol: "Ψ",
    accent: "pink",
    questions: [
      {
        prompt:
          "Which cognitive bias makes people overestimate their ability after a small amount of learning?",
        options: [
          "Hindsight bias",
          "Dunning–Kruger effect",
          "Anchoring bias",
          "Availability heuristic",
        ],
        answerIndex: 1,
        explanation:
          "The Dunning–Kruger effect describes how novices often rate their competence highly because they lack the metacognition to see what they don't know.",
      },
      {
        prompt:
          "In Pavlov's classical conditioning, the bell that triggers salivation after pairing with food is called the…",
        options: [
          "Unconditioned stimulus",
          "Conditioned stimulus",
          "Conditioned response",
          "Neutral stimulus",
        ],
        answerIndex: 1,
        explanation:
          "Once the bell reliably elicits salivation through association with food, it has become a conditioned stimulus.",
      },
      {
        prompt:
          "Maslow's hierarchy of needs places which level at the very top?",
        options: [
          "Esteem",
          "Belonging",
          "Self-actualization",
          "Safety",
        ],
        answerIndex: 2,
        explanation:
          "Self-actualization — realizing one's full potential — sits at the apex above esteem, belonging, safety, and physiological needs.",
      },
      {
        prompt:
          "Which part of Freud's psyche operates on the 'reality principle', mediating between desire and morality?",
        options: ["Id", "Ego", "Superego", "Libido"],
        answerIndex: 1,
        explanation:
          "The ego negotiates between the impulsive id and the moralistic superego using the reality principle.",
      },
      {
        prompt:
          "The bystander effect is most famously associated with which 1964 case?",
        options: [
          "Stanford Prison Experiment",
          "The murder of Kitty Genovese",
          "The Milgram experiments",
          "The Robbers Cave study",
        ],
        answerIndex: 1,
        explanation:
          "Reports that 38 witnesses ignored Kitty Genovese's attack inspired Darley and Latané's research on diffusion of responsibility.",
      },
      {
        prompt:
          "Which memory store, per Atkinson–Shiffrin, holds roughly 7 ± 2 items for about 20 seconds?",
        options: [
          "Sensory memory",
          "Short-term memory",
          "Procedural memory",
          "Episodic memory",
        ],
        answerIndex: 1,
        explanation:
          "Miller's 'magical number seven' describes the limited capacity and brief duration of short-term memory.",
      },
      {
        prompt:
          "Carl Jung introduced which concept to describe universal symbols shared across cultures?",
        options: [
          "Schemata",
          "Archetypes",
          "Defense mechanisms",
          "Object relations",
        ],
        answerIndex: 1,
        explanation:
          "Archetypes — like the Hero or the Shadow — populate Jung's collective unconscious.",
      },
      {
        prompt:
          "Cognitive dissonance theory was proposed by which psychologist?",
        options: [
          "B. F. Skinner",
          "Leon Festinger",
          "Albert Bandura",
          "Jean Piaget",
        ],
        answerIndex: 1,
        explanation:
          "Festinger's 1957 theory explains the discomfort we feel when our beliefs and actions conflict.",
      },
      {
        prompt:
          "Which neurotransmitter is most strongly tied to the brain's reward and motivation circuitry?",
        options: ["Serotonin", "Dopamine", "GABA", "Acetylcholine"],
        answerIndex: 1,
        explanation:
          "Dopamine signaling in the mesolimbic pathway underpins reward prediction and motivated behavior.",
      },
      {
        prompt:
          "Piaget's stage in which children master abstract and hypothetical reasoning is the…",
        options: [
          "Sensorimotor stage",
          "Preoperational stage",
          "Concrete operational stage",
          "Formal operational stage",
        ],
        answerIndex: 3,
        explanation:
          "From around age 12, children enter the formal operational stage, gaining the capacity for abstract logic.",
      },
    ],
  },
  {
    slug: "philosophy",
    title: "Philosophy",
    blurb: "Big questions, sharper arguments, eternal head-scratchers.",
    symbol: "Φ",
    accent: "red",
    questions: [
      {
        prompt: "'I think, therefore I am' — which philosopher coined this?",
        options: [
          "Immanuel Kant",
          "René Descartes",
          "John Locke",
          "David Hume",
        ],
        answerIndex: 1,
        explanation:
          "Descartes' 'cogito, ergo sum' anchors his Meditations as the one indubitable starting point.",
      },
      {
        prompt:
          "Plato's Allegory of the Cave is presented in which of his dialogues?",
        options: ["The Symposium", "Phaedrus", "The Republic", "Meno"],
        answerIndex: 2,
        explanation:
          "It appears in Book VII of The Republic to illustrate the philosopher's ascent from illusion to truth.",
      },
      {
        prompt:
          "Which ethical theory judges actions solely by their consequences?",
        options: [
          "Deontology",
          "Virtue ethics",
          "Consequentialism",
          "Divine command theory",
        ],
        answerIndex: 2,
        explanation:
          "Consequentialism — utilitarianism is its best-known form — defines rightness by outcomes.",
      },
      {
        prompt:
          "Nietzsche's idea that one should affirm one's life as if it would recur infinitely is called…",
        options: [
          "The will to power",
          "Eternal recurrence",
          "The Übermensch",
          "Master morality",
        ],
        answerIndex: 1,
        explanation:
          "Eternal recurrence is a thought experiment in The Gay Science testing whether you embrace your life unconditionally.",
      },
      {
        prompt:
          "The 'veil of ignorance' is a thought experiment associated with whom?",
        options: [
          "John Stuart Mill",
          "Robert Nozick",
          "John Rawls",
          "Thomas Hobbes",
        ],
        answerIndex: 2,
        explanation:
          "Rawls used it in A Theory of Justice (1971) to derive principles of justice impartially.",
      },
      {
        prompt:
          "Aristotle described the highest human good as 'eudaimonia', usually translated as…",
        options: [
          "Pleasure",
          "Flourishing",
          "Wealth",
          "Knowledge",
        ],
        answerIndex: 1,
        explanation:
          "Eudaimonia denotes a life well-lived through virtuous activity, not just feeling good.",
      },
      {
        prompt:
          "Which philosopher argued the mind is a 'tabula rasa' shaped by experience?",
        options: [
          "John Locke",
          "Gottfried Leibniz",
          "George Berkeley",
          "Baruch Spinoza",
        ],
        answerIndex: 0,
        explanation:
          "In An Essay Concerning Human Understanding, Locke rejected innate ideas in favor of a 'blank slate'.",
      },
      {
        prompt:
          "Existentialism's slogan 'existence precedes essence' is most associated with…",
        options: [
          "Albert Camus",
          "Jean-Paul Sartre",
          "Søren Kierkegaard",
          "Martin Heidegger",
        ],
        answerIndex: 1,
        explanation:
          "Sartre argued in Existentialism is a Humanism that we exist first and create our essence through choice.",
      },
      {
        prompt:
          "Hume's famous 'is–ought' problem warns against deriving…",
        options: [
          "Effects from causes",
          "Values from facts",
          "Facts from values",
          "Universals from particulars",
        ],
        answerIndex: 1,
        explanation:
          "He noted that prescriptive 'ought' claims do not follow logically from descriptive 'is' claims.",
      },
      {
        prompt:
          "Which Eastern philosophy centers on the concept of 'wu wei' or effortless action?",
        options: [
          "Confucianism",
          "Daoism (Taoism)",
          "Theravāda Buddhism",
          "Legalism",
        ],
        answerIndex: 1,
        explanation:
          "Wu wei is a core Daoist idea: aligning with the flow of the Dao rather than forcing outcomes.",
      },
    ],
  },
  {
    slug: "history",
    title: "History",
    blurb: "Empires, revolutions, and the moments that bent the timeline.",
    symbol: "H",
    accent: "crimson",
    questions: [
      {
        prompt:
          "The Treaty of Westphalia (1648) is conventionally credited with founding…",
        options: [
          "The League of Nations",
          "Modern state sovereignty",
          "The European Union",
          "The Holy Roman Empire",
        ],
        answerIndex: 1,
        explanation:
          "It ended the Thirty Years' War and is taken as the origin of the sovereign nation-state system.",
      },
      {
        prompt:
          "Which ancient civilization built the city of Mohenjo-daro?",
        options: [
          "Sumerian",
          "Indus Valley",
          "Egyptian",
          "Minoan",
        ],
        answerIndex: 1,
        explanation:
          "Mohenjo-daro, in present-day Pakistan, was a major urban center of the Indus Valley Civilization (~2500 BCE).",
      },
      {
        prompt:
          "The Renaissance is generally considered to have begun in which city?",
        options: ["Rome", "Venice", "Florence", "Milan"],
        answerIndex: 2,
        explanation:
          "Florence — under Medici patronage — sparked the 14th–15th-century cultural rebirth.",
      },
      {
        prompt:
          "The Meiji Restoration of 1868 marked Japan's transition from…",
        options: [
          "Empire to republic",
          "Shogunate to centralized imperial rule",
          "Feudalism to communism",
          "Isolation to colonization by Britain",
        ],
        answerIndex: 1,
        explanation:
          "Power was returned to Emperor Meiji, ending the Tokugawa shogunate and launching rapid modernization.",
      },
      {
        prompt:
          "Which 1215 document is regarded as a cornerstone of constitutional law?",
        options: [
          "The Edict of Nantes",
          "The Magna Carta",
          "The Bill of Rights",
          "The Code of Hammurabi",
        ],
        answerIndex: 1,
        explanation:
          "King John's Magna Carta limited royal power and seeded ideas of due process.",
      },
      {
        prompt:
          "The Silk Road primarily linked China with which other region?",
        options: [
          "Sub-Saharan Africa",
          "The Mediterranean and Europe",
          "The Americas",
          "Australia",
        ],
        answerIndex: 1,
        explanation:
          "The network of caravan routes connected East Asia with Central Asia, the Middle East, and the Mediterranean.",
      },
      {
        prompt:
          "Who led the non-violent Salt March of 1930 against British rule in India?",
        options: [
          "Jawaharlal Nehru",
          "Subhas Chandra Bose",
          "Mahatma Gandhi",
          "Bhagat Singh",
        ],
        answerIndex: 2,
        explanation:
          "Gandhi's 240-mile march to Dandi defied the salt tax and galvanized the independence movement.",
      },
      {
        prompt:
          "The Berlin Wall fell in which year?",
        options: ["1987", "1989", "1991", "1993"],
        answerIndex: 1,
        explanation:
          "On 9 November 1989, East Germany opened the wall, accelerating the end of the Cold War.",
      },
      {
        prompt:
          "Which empire was ruled by Suleiman the Magnificent at its zenith?",
        options: [
          "Mughal",
          "Ottoman",
          "Safavid",
          "Byzantine",
        ],
        answerIndex: 1,
        explanation:
          "Suleiman I (r. 1520–1566) presided over the Ottoman Empire's territorial and cultural peak.",
      },
      {
        prompt:
          "The Code of Hammurabi originated in which ancient civilization?",
        options: [
          "Ancient Egypt",
          "Babylonia",
          "Persia",
          "Phoenicia",
        ],
        answerIndex: 1,
        explanation:
          "Inscribed around 1754 BCE, it is one of the earliest surviving written legal codes from Babylon.",
      },
    ],
  },
  {
    slug: "literature",
    title: "Literature",
    blurb: "Words that built worlds and rewired how we read.",
    symbol: "L",
    accent: "ember",
    questions: [
      {
        prompt:
          "Who wrote the epic poem 'The Divine Comedy'?",
        options: [
          "Geoffrey Chaucer",
          "Dante Alighieri",
          "John Milton",
          "Virgil",
        ],
        answerIndex: 1,
        explanation:
          "Dante's 14th-century journey through Inferno, Purgatorio, and Paradiso shaped Italian literature.",
      },
      {
        prompt:
          "'Stream of consciousness' as a narrative technique is most associated with…",
        options: [
          "Charles Dickens",
          "Virginia Woolf",
          "Jane Austen",
          "Mark Twain",
        ],
        answerIndex: 1,
        explanation:
          "Woolf, alongside Joyce and Faulkner, perfected interior monologue in works like Mrs Dalloway.",
      },
      {
        prompt:
          "The novel 'One Hundred Years of Solitude' was written by…",
        options: [
          "Jorge Luis Borges",
          "Gabriel García Márquez",
          "Mario Vargas Llosa",
          "Pablo Neruda",
        ],
        answerIndex: 1,
        explanation:
          "García Márquez's 1967 novel is the touchstone of magical realism, set in fictional Macondo.",
      },
      {
        prompt:
          "In Greek tragedy, 'hamartia' refers to…",
        options: [
          "Catharsis",
          "A tragic flaw or error",
          "Divine justice",
          "Comic relief",
        ],
        answerIndex: 1,
        explanation:
          "Aristotle's Poetics defines hamartia as the misjudgment that drives a tragic hero's downfall.",
      },
      {
        prompt:
          "Which Shakespeare play features the line 'The lady doth protest too much, methinks'?",
        options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
        answerIndex: 1,
        explanation:
          "Queen Gertrude says it in Act 3, Scene 2 of Hamlet during the play within a play.",
      },
      {
        prompt:
          "'Things Fall Apart' (1958), a landmark of African literature, was written by…",
        options: [
          "Wole Soyinka",
          "Chinua Achebe",
          "Ngũgĩ wa Thiong'o",
          "Ben Okri",
        ],
        answerIndex: 1,
        explanation:
          "Achebe's novel reframes the colonial encounter through Igbo eyes in Nigeria.",
      },
      {
        prompt:
          "The unreliable narrator of 'Lolita' is named…",
        options: ["Holden Caulfield", "Humbert Humbert", "Nick Carraway", "Ishmael"],
        answerIndex: 1,
        explanation:
          "Nabokov gives us Humbert Humbert, whose ornate prose conceals horrifying acts.",
      },
      {
        prompt:
          "Which 17th-century playwright is the most-performed author of French theatre?",
        options: ["Racine", "Corneille", "Molière", "Voltaire"],
        answerIndex: 2,
        explanation:
          "Molière, master of comedy, gave French its nickname 'la langue de Molière'.",
      },
      {
        prompt:
          "Haiku traditionally follows a syllabic pattern of…",
        options: [
          "5-5-5",
          "5-7-5",
          "7-5-7",
          "7-7-7",
        ],
        answerIndex: 1,
        explanation:
          "The classic Japanese form uses three phrases of 5, 7, and 5 sound units (on).",
      },
      {
        prompt:
          "George Orwell's 'Newspeak' appears in which novel?",
        options: [
          "Animal Farm",
          "Brave New World",
          "Nineteen Eighty-Four",
          "Fahrenheit 451",
        ],
        answerIndex: 2,
        explanation:
          "In 1984, Newspeak is the regime's engineered language designed to make dissent unthinkable.",
      },
    ],
  },
  {
    slug: "sociology",
    title: "Sociology",
    blurb: "How groups, norms, and institutions shape who we become.",
    symbol: "S",
    accent: "pink",
    questions: [
      {
        prompt:
          "Émile Durkheim coined which term for the breakdown of social norms?",
        options: ["Alienation", "Anomie", "Habitus", "Bureaucracy"],
        answerIndex: 1,
        explanation:
          "Durkheim's anomie describes a state of normlessness, central to his study of suicide.",
      },
      {
        prompt:
          "Max Weber argued that capitalism's rise was tied to which religious ethos?",
        options: [
          "Catholic monasticism",
          "Protestant work ethic",
          "Confucian filial piety",
          "Quaker pacifism",
        ],
        answerIndex: 1,
        explanation:
          "His 1905 essay tied ascetic Calvinist values to the 'spirit' of modern capitalism.",
      },
      {
        prompt:
          "Pierre Bourdieu's concept of 'habitus' refers to…",
        options: [
          "Inherited wealth",
          "Internalized dispositions shaped by social position",
          "A formal religious ritual",
          "An economic class",
        ],
        answerIndex: 1,
        explanation:
          "Habitus is the durable set of tastes and reflexes we acquire from our social environment.",
      },
      {
        prompt:
          "Which thinker described modern society as an 'iron cage' of rationality?",
        options: ["Karl Marx", "Max Weber", "Auguste Comte", "Talcott Parsons"],
        answerIndex: 1,
        explanation:
          "Weber warned that bureaucratic rationalization could imprison the modern individual.",
      },
      {
        prompt:
          "The 'looking-glass self' was developed by which sociologist?",
        options: [
          "George Herbert Mead",
          "Charles Horton Cooley",
          "Erving Goffman",
          "Herbert Blumer",
        ],
        answerIndex: 1,
        explanation:
          "Cooley argued our self-image forms by imagining how others see us.",
      },
      {
        prompt:
          "Erving Goffman's 'dramaturgical analysis' compares social life to…",
        options: [
          "A marketplace",
          "A theatrical performance",
          "A war zone",
          "A laboratory",
        ],
        answerIndex: 1,
        explanation:
          "In The Presentation of Self in Everyday Life, we are actors performing on social 'front stages'.",
      },
      {
        prompt:
          "Which Marxist concept describes workers' separation from the products and meaning of their labor?",
        options: [
          "Surplus value",
          "Alienation",
          "Class consciousness",
          "Hegemony",
        ],
        answerIndex: 1,
        explanation:
          "Alienation, in Marx's 1844 manuscripts, has four forms — from product, process, others, and species-being.",
      },
      {
        prompt:
          "Antonio Gramsci is best known for theorizing which concept?",
        options: [
          "Cultural hegemony",
          "Mechanical solidarity",
          "Structural functionalism",
          "Looking-glass self",
        ],
        answerIndex: 0,
        explanation:
          "Gramsci showed how dominant classes secure consent through cultural and ideological leadership.",
      },
      {
        prompt:
          "C. Wright Mills urged sociologists to use the 'sociological imagination' to link…",
        options: [
          "Past and future",
          "Personal troubles and public issues",
          "Cities and countryside",
          "Rich and poor",
        ],
        answerIndex: 1,
        explanation:
          "Mills (1959) defined the discipline by its capacity to connect biography with history and structure.",
      },
      {
        prompt:
          "Which research method involves long-term immersion in a community?",
        options: [
          "Survey research",
          "Ethnography",
          "Content analysis",
          "Experimental design",
        ],
        answerIndex: 1,
        explanation:
          "Ethnography uses participant observation to render a culture from the inside.",
      },
    ],
  },
  {
    slug: "art-history",
    title: "Art History",
    blurb: "Movements, masterpieces, and the eyes that taught us to see.",
    symbol: "A",
    accent: "red",
    questions: [
      {
        prompt:
          "Which movement, born in early 1900s Paris, fragmented form into geometric planes?",
        options: ["Fauvism", "Cubism", "Surrealism", "Futurism"],
        answerIndex: 1,
        explanation:
          "Picasso and Braque pioneered Cubism, breaking objects into multi-perspective shards.",
      },
      {
        prompt:
          "The ceiling of the Sistine Chapel was painted by…",
        options: [
          "Raphael",
          "Michelangelo",
          "Leonardo da Vinci",
          "Donatello",
        ],
        answerIndex: 1,
        explanation:
          "Michelangelo painted it from 1508 to 1512 for Pope Julius II.",
      },
      {
        prompt:
          "Which Dutch master is famous for thick impasto and intense self-portraits, including 'The Starry Night'?",
        options: [
          "Rembrandt",
          "Vermeer",
          "Vincent van Gogh",
          "Frans Hals",
        ],
        answerIndex: 2,
        explanation:
          "Van Gogh's expressive brushwork defined Post-Impressionism in the late 19th century.",
      },
      {
        prompt:
          "Frida Kahlo's work is most often classified as…",
        options: [
          "Abstract Expressionism",
          "Surrealism / Magical Realism",
          "Pop Art",
          "Neoclassicism",
        ],
        answerIndex: 1,
        explanation:
          "Kahlo herself rejected the Surrealist label, but her dreamlike self-portraits sit in that orbit.",
      },
      {
        prompt:
          "The 'Mona Lisa' currently hangs in which museum?",
        options: [
          "The Uffizi",
          "The Prado",
          "The Louvre",
          "The Hermitage",
        ],
        answerIndex: 2,
        explanation:
          "Leonardo's portrait has hung in the Louvre in Paris since 1797.",
      },
      {
        prompt:
          "Andy Warhol's Campbell's Soup Cans (1962) is emblematic of which movement?",
        options: [
          "Minimalism",
          "Pop Art",
          "Conceptual Art",
          "Op Art",
        ],
        answerIndex: 1,
        explanation:
          "Pop Art appropriated mass-media and consumer imagery, blurring high and low culture.",
      },
      {
        prompt:
          "Which architectural order is recognizable by its scrolled, ram-horn capitals?",
        options: ["Doric", "Ionic", "Corinthian", "Tuscan"],
        answerIndex: 1,
        explanation:
          "The Ionic order is defined by its volute capitals, slimmer than the Doric.",
      },
      {
        prompt:
          "The Bauhaus school, founded in 1919, originated in which country?",
        options: ["France", "Germany", "Netherlands", "Austria"],
        answerIndex: 1,
        explanation:
          "Walter Gropius founded the Bauhaus in Weimar, fusing craft, design, and fine art.",
      },
      {
        prompt:
          "Japanese woodblock prints from the Edo period are known as…",
        options: ["Sumi-e", "Ukiyo-e", "Nihonga", "Kakemono"],
        answerIndex: 1,
        explanation:
          "Ukiyo-e ('pictures of the floating world') include Hokusai's famous 'Great Wave'.",
      },
      {
        prompt:
          "Which 20th-century artist created the readymade 'Fountain' (1917)?",
        options: [
          "Salvador Dalí",
          "Marcel Duchamp",
          "Henri Matisse",
          "Jean Arp",
        ],
        answerIndex: 1,
        explanation:
          "Duchamp signed a porcelain urinal 'R. Mutt', upending what counted as art.",
      },
    ],
  },
];

export const topicBySlug = (slug: string): Topic | undefined =>
  topics.find((t) => t.slug === slug);
