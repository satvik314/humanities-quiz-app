export type Question = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
};

export type Topic = {
  id: string;
  title: string;
  subtitle: string;
  glyph: string;
  questions: Question[];
};

export const topics: Topic[] = [
  {
    id: "psychology",
    title: "Psychology",
    subtitle: "Mind, behavior, cognition",
    glyph: "ψ",
    questions: [
      {
        q: "Which psychologist proposed the hierarchy of needs, with self-actualization at the top?",
        options: ["Sigmund Freud", "Abraham Maslow", "Carl Jung", "B.F. Skinner"],
        answer: 1,
        explain:
          "Maslow's 1943 hierarchy ascends from physiological needs to self-actualization — the drive to realize one's full potential.",
      },
      {
        q: "The 'bystander effect' refers to:",
        options: [
          "People conforming to group opinions even when wrong",
          "Reduced likelihood of helping when others are present",
          "Memories distorted by post-event information",
          "Mistaking arousal for attraction",
        ],
        answer: 1,
        explain:
          "Diffusion of responsibility: the more witnesses, the less any single person feels obligated to act. Studied after the Kitty Genovese case.",
      },
      {
        q: "Pavlov's dogs salivating at a bell demonstrates:",
        options: [
          "Operant conditioning",
          "Classical conditioning",
          "Observational learning",
          "Latent learning",
        ],
        answer: 1,
        explain:
          "A neutral stimulus (bell) paired with an unconditioned stimulus (food) eventually triggers a conditioned response — the foundation of classical conditioning.",
      },
      {
        q: "Which brain structure is most associated with forming new long-term memories?",
        options: ["Amygdala", "Hippocampus", "Cerebellum", "Hypothalamus"],
        answer: 1,
        explain:
          "Patient H.M., who had his hippocampus removed, could not form new declarative memories — proving its central role.",
      },
      {
        q: "Cognitive dissonance is the discomfort caused by:",
        options: [
          "Holding two conflicting beliefs or behaviors",
          "Failing to recall recent events",
          "Confusing perception with reality",
          "Overestimating one's abilities",
        ],
        answer: 0,
        explain:
          "Festinger's theory: we resolve the tension by changing a belief, behavior, or rationalizing — often unconsciously.",
      },
      {
        q: "The 'Big Five' personality traits include all EXCEPT:",
        options: ["Openness", "Conscientiousness", "Intelligence", "Neuroticism"],
        answer: 2,
        explain:
          "OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism. Intelligence is a separate construct.",
      },
      {
        q: "Which is an example of an 'availability heuristic'?",
        options: [
          "Judging plane crashes as common because they're vivid in memory",
          "Sticking with a default option",
          "Refusing to sell a stock at a loss",
          "Believing you knew the outcome all along",
        ],
        answer: 0,
        explain:
          "Kahneman & Tversky: we estimate frequency by how easily examples come to mind, not by actual statistics.",
      },
      {
        q: "Piaget's 'object permanence' typically develops during which stage?",
        options: [
          "Sensorimotor",
          "Preoperational",
          "Concrete operational",
          "Formal operational",
        ],
        answer: 0,
        explain:
          "Around 8 months, infants in the sensorimotor stage realize objects exist even when out of sight.",
      },
      {
        q: "The Stanford Prison Experiment is most associated with:",
        options: ["Solomon Asch", "Stanley Milgram", "Philip Zimbardo", "Albert Bandura"],
        answer: 2,
        explain:
          "Zimbardo's 1971 study showed how situational roles can rapidly produce abusive behavior — though its methods are now widely critiqued.",
      },
      {
        q: "Which is NOT a defense mechanism in Freudian theory?",
        options: ["Projection", "Sublimation", "Reinforcement", "Repression"],
        answer: 2,
        explain:
          "Reinforcement is a behaviorist concept (Skinner). Defense mechanisms manage anxiety from unconscious conflict.",
      },
    ],
  },
  {
    id: "philosophy",
    title: "Philosophy",
    subtitle: "Wisdom, ethics, existence",
    glyph: "Φ",
    questions: [
      {
        q: "Who wrote 'I think, therefore I am' (Cogito, ergo sum)?",
        options: ["Immanuel Kant", "René Descartes", "John Locke", "David Hume"],
        answer: 1,
        explain:
          "Descartes used radical doubt to find one undeniable truth: the act of doubting proves a thinker exists.",
      },
      {
        q: "Plato's 'Allegory of the Cave' is primarily about:",
        options: [
          "The dangers of democracy",
          "The difference between appearance and reality",
          "The origin of language",
          "The pursuit of pleasure",
        ],
        answer: 1,
        explain:
          "Prisoners mistake shadows for reality; the philosopher escapes to see the true Forms — knowledge vs. illusion.",
      },
      {
        q: "Utilitarianism, associated with Bentham and Mill, judges actions by:",
        options: [
          "Whether they follow universal duties",
          "Their consequences — maximizing happiness",
          "Whether they reflect virtuous character",
          "Whether they were freely chosen",
        ],
        answer: 1,
        explain:
          "Consequentialism: the right act produces the greatest good for the greatest number.",
      },
      {
        q: "Kant's 'Categorical Imperative' tells us to:",
        options: [
          "Pursue our own happiness above all",
          "Act only on maxims you could will to be universal laws",
          "Follow tradition and authority",
          "Obey the rules of your society",
        ],
        answer: 1,
        explain:
          "If your principle can't apply to everyone without contradiction, it's not moral. Treat people as ends, never merely means.",
      },
      {
        q: "The 'trolley problem' is a thought experiment about:",
        options: [
          "Free will",
          "Personal identity",
          "Moral choice and consequences",
          "The nature of time",
        ],
        answer: 2,
        explain:
          "Divert the trolley to kill one instead of five? It tests intuitions about consequentialism vs. deontology.",
      },
      {
        q: "Nietzsche's claim that 'God is dead' meant:",
        options: [
          "He was an atheist activist",
          "Religious belief no longer grounds modern life",
          "Christianity should be banned",
          "Heaven and hell don't exist",
        ],
        answer: 1,
        explain:
          "A cultural diagnosis: the Enlightenment eroded religion's authority, leaving a vacuum we must fill with new values.",
      },
      {
        q: "Which philosopher is the founder of existentialism?",
        options: [
          "Søren Kierkegaard",
          "Karl Marx",
          "Friedrich Hegel",
          "Bertrand Russell",
        ],
        answer: 0,
        explain:
          "Kierkegaard emphasized individual choice, anxiety, and the 'leap of faith' — laying the groundwork Sartre and Camus later expanded.",
      },
      {
        q: "Aristotle's ethics center on:",
        options: [
          "Pleasure",
          "Duty",
          "Virtue and human flourishing (eudaimonia)",
          "Social contracts",
        ],
        answer: 2,
        explain:
          "Virtue ethics: cultivate excellent character traits through habit; the good life is one of flourishing, not mere pleasure.",
      },
      {
        q: "The 'veil of ignorance' is a concept by:",
        options: ["John Rawls", "Robert Nozick", "Karl Popper", "Michel Foucault"],
        answer: 0,
        explain:
          "Rawls: design society's rules without knowing your position in it. You'd choose principles fair to everyone.",
      },
      {
        q: "Hume's 'is–ought problem' argues:",
        options: [
          "We can't derive moral conclusions from purely factual premises",
          "Reality is ultimately unknowable",
          "Causation is an illusion",
          "Personal identity is a bundle of perceptions",
        ],
        answer: 0,
        explain:
          "Description ≠ prescription. From 'X is the case' you can't logically conclude 'X ought to be the case' without a value premise.",
      },
    ],
  },
  {
    id: "history",
    title: "History",
    subtitle: "Civilizations, revolutions, eras",
    glyph: "Ω",
    questions: [
      {
        q: "The Renaissance began in which country?",
        options: ["France", "Italy", "England", "Germany"],
        answer: 1,
        explain:
          "14th-century Florence — driven by Medici patronage, rediscovered classical texts, and a flourishing merchant class.",
      },
      {
        q: "Which empire was ruled by Suleiman the Magnificent at its peak?",
        options: ["Mughal", "Safavid", "Ottoman", "Byzantine"],
        answer: 2,
        explain:
          "Suleiman (r. 1520–1566) expanded the Ottoman Empire across three continents and codified its legal system.",
      },
      {
        q: "The Treaty of Westphalia (1648) is often considered the foundation of:",
        options: [
          "Modern democracy",
          "The modern nation-state system",
          "International trade law",
          "Religious toleration globally",
        ],
        answer: 1,
        explain:
          "It ended the Thirty Years' War and established sovereignty of states — non-interference became the new norm.",
      },
      {
        q: "The Silk Road primarily connected:",
        options: [
          "Europe and Africa",
          "China and the Mediterranean",
          "India and Australia",
          "Russia and the Americas",
        ],
        answer: 1,
        explain:
          "A network of overland and sea routes carrying silk, spices, ideas, and disease across Eurasia for ~1,500 years.",
      },
      {
        q: "The French Revolution began in which year?",
        options: ["1776", "1789", "1804", "1815"],
        answer: 1,
        explain:
          "The storming of the Bastille on July 14, 1789, marks its symbolic start — ending the ancien régime.",
      },
      {
        q: "Which event is considered the start of the Protestant Reformation?",
        options: [
          "The Council of Trent",
          "Luther's 95 Theses (1517)",
          "The English Civil War",
          "Calvin's Institutes",
        ],
        answer: 1,
        explain:
          "Luther's challenge to indulgences in Wittenberg sparked a religious upheaval that fractured Western Christianity.",
      },
      {
        q: "The Mongol Empire under Genghis Khan is notable for:",
        options: [
          "Being the largest contiguous land empire in history",
          "Inventing gunpowder",
          "Establishing the first parliament",
          "Building the Great Wall",
        ],
        answer: 0,
        explain:
          "By the 13th century, Mongol rule stretched from Korea to Hungary — accelerating trade, communication, and cultural exchange.",
      },
      {
        q: "Apartheid was the institutionalized racial segregation system in:",
        options: ["United States", "Brazil", "South Africa", "Australia"],
        answer: 2,
        explain:
          "Enforced by South Africa's National Party from 1948 until Mandela's election in 1994.",
      },
      {
        q: "The Industrial Revolution first emerged in:",
        options: ["Germany", "United States", "Britain", "Belgium"],
        answer: 2,
        explain:
          "Late 18th-century Britain — coal, steam, textile machinery, and stable institutions converged to launch industrial capitalism.",
      },
      {
        q: "The Code of Hammurabi is significant because it is:",
        options: [
          "The oldest religious text",
          "One of the earliest written legal codes",
          "An ancient mathematical treatise",
          "The first work of poetry",
        ],
        answer: 1,
        explain:
          "Babylon, ~1754 BCE. 282 laws inscribed on a stele — 'an eye for an eye' originates here.",
      },
    ],
  },
  {
    id: "literature",
    title: "Literature",
    subtitle: "Stories, poets, traditions",
    glyph: "L",
    questions: [
      {
        q: "Who wrote 'One Hundred Years of Solitude'?",
        options: [
          "Jorge Luis Borges",
          "Gabriel García Márquez",
          "Pablo Neruda",
          "Mario Vargas Llosa",
        ],
        answer: 1,
        explain:
          "García Márquez's 1967 novel defined magical realism — the Buendía family's saga in fictional Macondo.",
      },
      {
        q: "The Greek epic 'The Odyssey' is attributed to:",
        options: ["Virgil", "Hesiod", "Homer", "Sophocles"],
        answer: 2,
        explain:
          "Homer (or oral traditions ascribed to him) composed both the Iliad and Odyssey — likely 8th century BCE.",
      },
      {
        q: "Which novel begins: 'It was the best of times, it was the worst of times'?",
        options: [
          "Bleak House",
          "Great Expectations",
          "A Tale of Two Cities",
          "Oliver Twist",
        ],
        answer: 2,
        explain:
          "Dickens's 1859 novel set in London and Paris during the French Revolution.",
      },
      {
        q: "A haiku traditionally consists of how many syllables?",
        options: ["5-5-5", "5-7-5", "7-5-7", "3-5-3"],
        answer: 1,
        explain:
          "Three lines: 5, 7, 5 syllables (in Japanese, 'on'). Often paired with a seasonal reference (kigo).",
      },
      {
        q: "Who is the protagonist of Cervantes's 'Don Quixote'?",
        options: [
          "A Spanish king",
          "An aging gentleman who imagines himself a knight",
          "A pirate",
          "A bullfighter",
        ],
        answer: 1,
        explain:
          "Often called the first modern novel (1605). Alonso Quixano sets out with squire Sancho Panza, tilting at windmills.",
      },
      {
        q: "Which playwright wrote 'Waiting for Godot'?",
        options: [
          "Tennessee Williams",
          "Samuel Beckett",
          "Harold Pinter",
          "Arthur Miller",
        ],
        answer: 1,
        explain:
          "Beckett's 1953 absurdist play — two men wait for someone who never arrives. A landmark of the Theatre of the Absurd.",
      },
      {
        q: "'Things Fall Apart' by Chinua Achebe is set in:",
        options: [
          "South Africa",
          "Pre-colonial and colonial Nigeria",
          "Kenya",
          "Ghana",
        ],
        answer: 1,
        explain:
          "Achebe's 1958 novel depicts Igbo society and the disruption of British colonialism through Okonkwo's tragedy.",
      },
      {
        q: "The 'stream of consciousness' technique is most associated with:",
        options: [
          "Charles Dickens",
          "Virginia Woolf and James Joyce",
          "Jane Austen",
          "Mark Twain",
        ],
        answer: 1,
        explain:
          "Modernist writers rendered the unfiltered flow of thought — see Mrs Dalloway and Ulysses.",
      },
      {
        q: "Who wrote 'The Tale of Genji', often called the world's first novel?",
        options: [
          "Sei Shōnagon",
          "Murasaki Shikibu",
          "Matsuo Bashō",
          "Yukio Mishima",
        ],
        answer: 1,
        explain:
          "Murasaki, an 11th-century Heian court lady, wrote this sprawling psychological narrative around 1010 CE.",
      },
      {
        q: "An iambic pentameter line contains:",
        options: [
          "Five stressed syllables",
          "Five pairs of unstressed-stressed syllables",
          "Ten rhymed words",
          "Five rhyming couplets",
        ],
        answer: 1,
        explain:
          "Ten syllables, alternating unstressed/stressed — Shakespeare's go-to meter: 'Shall I com-PARE thee TO a SUM-mer's DAY?'",
      },
    ],
  },
  {
    id: "art",
    title: "Art History",
    subtitle: "Movements, masters, meaning",
    glyph: "△",
    questions: [
      {
        q: "Who painted the Sistine Chapel ceiling?",
        options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
        answer: 2,
        explain:
          "Michelangelo painted it 1508–1512 for Pope Julius II — including the iconic 'Creation of Adam'.",
      },
      {
        q: "Impressionism originated in which country?",
        options: ["Italy", "France", "Netherlands", "Spain"],
        answer: 1,
        explain:
          "1860s–70s Paris. Monet, Renoir, Degas captured fleeting light and modern life with loose, visible brushwork.",
      },
      {
        q: "Cubism was pioneered by Picasso and:",
        options: [
          "Henri Matisse",
          "Georges Braque",
          "Marcel Duchamp",
          "Salvador Dalí",
        ],
        answer: 1,
        explain:
          "Around 1907–1914, Picasso and Braque shattered objects into geometric facets, showing multiple viewpoints simultaneously.",
      },
      {
        q: "'The Persistence of Memory' (melting clocks) is by:",
        options: ["René Magritte", "Joan Miró", "Salvador Dalí", "Max Ernst"],
        answer: 2,
        explain:
          "Dalí, 1931 — surrealism's most famous image. The soft watches suggest the fluidity of time in dreams.",
      },
      {
        q: "The Mona Lisa hangs in which museum?",
        options: ["The Uffizi", "The Prado", "The Louvre", "The Met"],
        answer: 2,
        explain:
          "Leonardo's portrait (~1503) has been at the Louvre in Paris since 1797 — except for a brief 1911 theft.",
      },
      {
        q: "Ukiyo-e refers to:",
        options: [
          "Japanese woodblock prints of the 'floating world'",
          "Chinese ink landscape painting",
          "Korean celadon pottery",
          "Indian Mughal miniatures",
        ],
        answer: 0,
        explain:
          "Edo-period prints (17th–19th c.) by Hokusai, Hiroshige, Utamaro — depicting kabuki, courtesans, and landscapes.",
      },
      {
        q: "The Bauhaus school is associated with:",
        options: [
          "Romantic landscape painting",
          "Unifying art, craft, and industrial design",
          "Religious icon painting",
          "Baroque sculpture",
        ],
        answer: 1,
        explain:
          "Founded 1919 in Weimar by Walter Gropius. Form follows function — its DNA lives in modern design everywhere.",
      },
      {
        q: "Frida Kahlo is best known for:",
        options: [
          "Abstract expressionism",
          "Self-portraits exploring identity and pain",
          "Pop art",
          "Minimalism",
        ],
        answer: 1,
        explain:
          "Her ~55 self-portraits weave Mexican folk imagery, surrealism, and her own physical and emotional suffering.",
      },
      {
        q: "Andy Warhol's Campbell's Soup Cans exemplify:",
        options: [
          "Abstract Expressionism",
          "Pop Art",
          "Minimalism",
          "Conceptual Art",
        ],
        answer: 1,
        explain:
          "1962. Pop Art elevated mass-produced consumer imagery into fine art, blurring high/low culture.",
      },
      {
        q: "Gothic architecture is characterized by:",
        options: [
          "Rounded arches and heavy walls",
          "Pointed arches, ribbed vaults, flying buttresses",
          "Symmetrical classical columns",
          "Geometric Islamic patterns",
        ],
        answer: 1,
        explain:
          "12th–16th century. Engineering advances let walls soar skyward and dissolve into stained glass — see Chartres, Notre-Dame.",
      },
    ],
  },
  {
    id: "linguistics",
    title: "Linguistics",
    subtitle: "Language, meaning, structure",
    glyph: "∑",
    questions: [
      {
        q: "Phonology is the study of:",
        options: [
          "Word meanings",
          "Sound systems in language",
          "Sentence structure",
          "Language history",
        ],
        answer: 1,
        explain:
          "Phonology examines how sounds (phonemes) function and pattern within a language — distinct from phonetics (the physical sounds).",
      },
      {
        q: "The Sapir–Whorf hypothesis claims:",
        options: [
          "All languages share a universal grammar",
          "Language shapes how we think and perceive reality",
          "Children learn language through imitation",
          "Languages evolve toward simplicity",
        ],
        answer: 1,
        explain:
          "Linguistic relativity. The strong version (language determines thought) is contested; weaker versions have empirical support.",
      },
      {
        q: "Who proposed the theory of Universal Grammar?",
        options: [
          "Ferdinand de Saussure",
          "Noam Chomsky",
          "Roman Jakobson",
          "Edward Sapir",
        ],
        answer: 1,
        explain:
          "Chomsky argued humans are born with an innate grammatical scaffolding common to all languages.",
      },
      {
        q: "A morpheme is:",
        options: [
          "The smallest unit of sound",
          "The smallest unit of meaning",
          "A complete sentence",
          "A figure of speech",
        ],
        answer: 1,
        explain:
          "'Unhappiness' has three morphemes: un- + happy + -ness. They can be free (stand alone) or bound (affixes).",
      },
      {
        q: "Which language family does Finnish belong to?",
        options: ["Indo-European", "Uralic", "Altaic", "Afro-Asiatic"],
        answer: 1,
        explain:
          "Finnish, Estonian, and Hungarian are Uralic — unrelated to most European languages despite geography.",
      },
      {
        q: "Synchronic linguistics studies a language:",
        options: [
          "As it changes over time",
          "At a single point in time",
          "Across different regions",
          "Through written records only",
        ],
        answer: 1,
        explain:
          "Saussure's distinction: synchronic (snapshot) vs. diachronic (evolution). Both are needed for full understanding.",
      },
      {
        q: "Which is an example of a minimal pair?",
        options: [
          "'big' and 'large'",
          "'pat' and 'bat'",
          "'run' and 'running'",
          "'cat' and 'cats'",
        ],
        answer: 1,
        explain:
          "Minimal pairs differ by exactly one phoneme — proving /p/ and /b/ are distinct phonemes in English.",
      },
      {
        q: "Pragmatics is concerned with:",
        options: [
          "Word origins",
          "How context shapes meaning in communication",
          "Pronunciation rules",
          "Sentence diagramming",
        ],
        answer: 1,
        explain:
          "Why 'Can you pass the salt?' is a request, not a question about ability. Speech acts, implicature, deixis live here.",
      },
      {
        q: "The International Phonetic Alphabet (IPA) was created to:",
        options: [
          "Standardize spelling across English dialects",
          "Provide a unique symbol for every distinct speech sound",
          "Replace existing alphabets",
          "Teach foreign languages quickly",
        ],
        answer: 1,
        explain:
          "Devised in 1888 by linguists for unambiguous transcription of any human language's sounds.",
      },
      {
        q: "A 'creole' language is:",
        options: [
          "A dying language with few speakers",
          "A pidgin that has become a native language of a community",
          "A language with no written form",
          "A regional dialect",
        ],
        answer: 1,
        explain:
          "Pidgins are simplified contact languages; once children acquire one as their first language, it becomes a fully grammatical creole.",
      },
    ],
  },
];

export const topicById = (id: string): Topic | undefined =>
  topics.find((t) => t.id === id);
