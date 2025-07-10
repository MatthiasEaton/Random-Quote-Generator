const quotes = [
    {
      quote: '"Life can only be understood backwards; but it must be lived forwards."',
      author: "Soren Kieregaard",
      image: "images/soren.jpg",
      description: "Søren Aabye Kierkegaard was a Danish theologian, philosopher, poet, social critic, and religious author who is widely considered to be the first existentialist philosopher."
    },
    {
      quote: '"Man suffers only because he takes seriously what the gods made for fun."',
      author: "Alan Watts",
      image: "images/alan.jpg",
      description: "Alan Wilson Watts was a British and American writer, speaker, and self-styled 'philosophical entertainer', known for interpreting and popularising Buddhist, Taoist, and Hindu philosophy for a Western audience"
    },
    {
      quote: '"The first and the greatest victory is to conquer yourself.."',
      author: "Plato",
      image: "images/plato.jpg",
      description: "Plato was an ancient Greek philosopher and the founder of the Academy in Athens, one of the first institutions of higher learning in the Western world. He is renowned for his dialogues, which explore fundamental questions about reality, knowledge, ethics, and politics, often featuring his teacher Socrates as the main character. His most famous work, The Republic, outlines his vision of an ideal state governed by philosopher-kings."
    },
    {
        quote: '"We are what we repeatedly do. Excellence, then, is not an act, but a habit."',
        author: "Aristotle",
        image: "images/aristotle.jpg",
        description: "Aristotle was a Greek philosopher and polymath who made lasting contributions to many fields of human knowledge. He's known as the 'father of science' for establishing formal systems of study in logic, biology, zoology, and physics. His system for classifying plants and animals is still used today."
      },
      {
        quote: '"What did you do as a child that made the hours pass like minutes? Herein lies the key to your earthly pursuits."',
        author: "Carl Jung",
        image: "images/carl.jpg",
        description: "Carl Jung was a Swiss psychiatrist and psychologist who founded analytical psychology. He was a pioneer in the field, known for his theories on personality types, the unconscious, and archetypes. Jung's ideas influenced art, literature, and religion, and laid the groundwork for the Myers-Briggs personality test.."
      },
      {
        quote: '"Whereof one cannot speak, thereof one must be silent,"',
        author: "Ludwig Wittgenstein",
        image: "images/ludwig.jpg",
        description: "Ludwig Josef Johann Wittgenstein was an Austro-British philosopher who worked primarily in logic, the philosophy of mathematics, the philosophy of mind, and the philosophy of language. From 1929 to 1947, Wittgenstein taught at the University of Cambridge."
      },
      {
        quote: '"Action may not always bring happiness, but there is no happiness without action."',
        author: "William James",
        image: "images/james.jpg",
        description: "William James was a Harvard professor and a leading American philosopher and psychologist at the turn of the 20th century. He's often called the 'father of American psychology' for his influential writing and role in establishing psychology at Harvard. James developed the philosophical perspective of radical empiricism and wrote on pragmatism, religious psychology, and mysticism."
      },
      {
        quote: '"When you love someone, you love the person as they are, and not as you’d like them to be."',
        author: "Leo Tolstoy",
        image: "images/leo.png",
        description: "Count Lev Nikolayevich Tolstoy, usually referred to in English as Leo Tolstoy, was a Russian writer. He is regarded as one of the greatest and most influential authors of all time, best known for *War and Peace* and *Anna Karenina*."
      },
      {
        quote: '"What is important is to spread confusion, not eliminate it."',
        author: "Salvador Dalí",
        image: "images/dali.jpg",
        description: "Salvador Domingo Felipe Jacinto Dalí i Domènech was a Spanish artist, filmmaker, author, and critic who became synonymous with Surrealism. Known for his meticulous technique and bizarre imagery, Dalí's work explored the subconscious, dreams, sexuality, religion, and science. His paintings, like The Persistence of Memory, blurred the lines between reality and illusion."
      },
      {
        quote: '"Art and love are the same thing: It’s the process of seeing yourself in things that are not you."',
        author: "Chuck Klosterman",
        image: "images/chuck.jpg",
        description: "Charles John Klosterman is an American author and essayist whose work focuses on American popular culture. He has been a columnist for Esquire and ESPN.com and wrote 'The Ethicist' column for The New York Times."
      },
      {
        quote: '"All you have to do is write one true sentence. Write the truest sentence that you know."',
        author: "Ernest Hemingway",
        image: "images/hemingway.jpg",
        description: "Ernest Hemingway was an American author, journalist, and sportsman who influenced 20th century fiction with his understated, lucid style. His works, which often explore war, love, and loss, include The Sun Also Rises (1926), A Farewell to Arms (1929), For Whom the Bell Tolls (1940), and the Pulitzer Prize-winning The Old Man and the Sea (1952)."
      },
      {
        quote: '"Words are never ‘only words’; they matter because they define the contours of what we can do."',
        author: "Slavoj Žižek",
        image: "images/slavoj.jpg",
        description: "Slavoj Žižek was a Slovenian philosopher, cultural critic, and psychoanalyst known for his work in political theory, film theory, and continental philosophy. He is a prominent figure in contemporary intellectual discourse, recognized for his engaging and provocative style, and his ability to blend high theory with popular culture references."
      },
      {
        quote: '"Truth, she thought. As terrible as death. But harder to find."',
        author: "Philip K. Dick",
        image: "images/philip.jpg",
        description: "Philip K Dick was an American author, primarily known for his science fiction works, though his writing often blurred the lines between science fiction and philosophical inquiry. He is celebrated for exploring themes of reality, identity, and the impact of technology and authority on individuals. His stories frequently feature protagonists grappling with distorted perceptions and challenging the nature of what is real."
      },
      {
        quote: '"The fundamental delusion of humanity is to suppose that I am here and you are out there."',
        author: "Yasutani Roshi",
        image: "images/roshi.jpg",
        description: "Yasutani Roshi was a prominent Japanese Zen master known for his role in transmitting Zen Buddhism to the West. He founded the Sanbo Kyodan organization and was a strong advocate for integrating Rinzai Zen practices like koan study with Soto Zen. While highly respected for his realization and teaching, he was also a controversial figure due to his strong opinions and sometimes harsh criticism of other teachers."
      },
      {
        quote: '“Imagination was given to man to compensate him for what he is not, and a sense of humor was provided to console him for what he is.”',
        author: "Oscar Wilde",
        image: "images/wilde.jpg",
        description: "Oscar Wilde was an Irish writer and celebrity of the late 19th century, known for his wit, flamboyant personality, and advocacy of aestheticism. Born into wealth, Wilde excelled in classics at Trinity College Dublin and Magdalen College Oxford, winning the Newdigate Prize for poetry in 1878. He became a leading proponent of aestheticism, the “art for art's sake” movement, through his writing and lectures."
      },
      {
        quote: '"I dream. Sometimes I think that’s the only right thing to do."',
        author: "Haruki Murakami",
        image: "images/haruki.jpg",
        description: "Haruki Murakami was a renowned Japanese author celebrated for his unique blend of realism and surrealism, often incorporating elements of magical realism and philosophical themes into his narratives. His works frequently feature solitary, introspective protagonists navigating dreamlike or fantastical situations while grappling with themes of loneliness, self-discovery, and the nature of reality.."
      },
      {
        quote: '"Life’s under no obligation to give us what we expect."',
        author: "Margaret Mitchell",
        image: "images/mitchell.jpg",
        description: "Margaret Mitchell was an American author best known for her Pulitzer Prize-winning novel, Gone with the Wind. The book, set during the American Civil War and Reconstruction era, became a massive bestseller and was later adapted into a highly successful film. Despite her literary success, Mitchell published only one other novel during her lifetime and tragically died in a car accident in Atlanta."
      },
    {
        quote: '“There is within the human heart a quality of intelligence which has been known to surpass that attributed to the human mind.”',
        author: "Aberjhani",
        image: "images/aberjhani.jpg",
        description: "Aberjhani (born Jeffery J. Lloyd July 8, 1957) is an American historian, columnist, novelist, poet, artist, and editor. Although well known for his blog articles on literature and politics, he is perhaps best known as co-author of Encyclopedia of the Harlem Renaissance and author of The River of Winged Dreams."
      },
      {
        quote: '“To a mind that is still, the entire universe surrenders.”',
        author: "Chuang Tzu",
        image: "images/tzu.jpg",
        description: "Chuang Tzu, also known as Zhuang Zhou, was a highly influential Chinese philosopher who lived around the 4th century BCE during the Warring States period. He is a key figure in Taoism, known for his philosophical work, the Zhuangzi, which explores themes of nature, freedom, and the limitations of human knowledge. Chuang Tzu's writings are characterized by parables, anecdotes, and paradoxes, often using humor and imaginative scenarios to convey his ideas. "
      },
      {
        quote: '“Wherever you go, go with all your heart.”',
        author: "Confucius",
        image: "images/confucius.jpg",
        description: "Confucius was a Chinese philosopher, teacher, and political theorist whose teachings profoundly influenced East Asian thought and culture. He is known for his emphasis on ethics, social harmony, and the importance of education. His philosophy, often referred to as Confucianism, centers on cultivating virtue through self-cultivation and fulfilling social roles."
      },
      {
        quote: '“Letting go gives us freedom, and freedom is the only condition for happiness. If, in our heart, we still cling to anything - anger, anxiety, or possessions - we cannot be free.”',
        author: "Thich Nhat Hanh",
        image: "images/hanh.jpg",
        description: "Thich Nhat Hanh was a globally renowned Vietnamese Buddhist monk, teacher, author, and peace activist. He was a leading figure in the field of Engaged Buddhism and popularized the practice of mindfulness in the Western world. He founded the Plum Village Tradition, a mindfulness practice center in France, and was known for his teachings on peace, compassion, and living fully in the present moment."
      },
      {
        quote: '"Its not what happens to you, but how you react to it that matters."',
        author: "Epictetus",
        image: "images/epictetus.jpg",
        description: "Epictetus was a prominent Greek Stoic philosopher known for his teachings on personal freedom, self-control, and acceptance of what lies beyond one's control. Born into slavery, he later became a celebrated teacher, emphasizing the importance of focusing on one's own thoughts and actions, rather than external circumstances. His core philosophy is reflected in his writings, particularly the Discourses and the Enchiridion, which were compiled by his student Arrian. "
      },
      {
        quote: '“You must never be fearful about what you are doing when it’s right.”',
        author: "Rosa Parks",
        image: "images/parks.jpg",
        description: "Rosa Parks was an American activist best known for her pivotal role in the Montgomery Bus Boycott, which helped spark the American Civil Rights Movement. On December 1, 1955, she famously refused to give up her bus seat to a white passenger in Montgomery, Alabama, defying segregation laws. This act of defiance, though not the first of its kind, became a catalyst for widespread protests against racial discrimination in the United States."
      },
      {
        quote: '“When will our consciences grow so tender that we will act to prevent human misery rather than avenge it?”',
        author: "Eleanor Roosevelt",
        image: "images/eleanor.jpg",
        description: "Eleanor Roosevelt (1884-1962) was a prominent American political figure, diplomat, and activist. She is best known as the longest-serving First Lady of the United States, holding that role during her husband Franklin D. Roosevelt's four presidential terms (1933-1945). Beyond her role as First Lady, she was a powerful advocate for civil rights and human rights, notably contributing to the Universal Declaration of Human Rights. "
      },
  ];

  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const imageElement = document.getElementById("author-image");
  const descriptionElement = document.getElementById("description");
  const wikiLink = document.getElementById("wiki-link");
  const quoteBox = document.getElementById("quote-box");
  
  const fadeElements = [quoteBox, quoteElement, authorElement, imageElement, descriptionElement];
  
  let shuffledQuotes = [];
  let currentIndex = 0;
  
  // Fisher-Yates shuffle function
  function shuffleQuotes() {
    shuffledQuotes = [...quotes];
    for (let i = shuffledQuotes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuotes[i], shuffledQuotes[j]] = [shuffledQuotes[j], shuffledQuotes[i]];
    }
    currentIndex = 0;
  }
  
  // Initial shuffle
  shuffleQuotes();
  
  function generateQuote() {
    fadeElements.forEach(el => el.classList.remove("show"));
  
    setTimeout(() => {
      if (currentIndex >= shuffledQuotes.length) {
        shuffleQuotes(); // Reshuffle when all quotes used
      }
  
      const selected = shuffledQuotes[currentIndex];
      currentIndex++;
  
      // Update content
      quoteElement.textContent = selected.quote;
      authorElement.textContent = `– ${selected.author}`;
      imageElement.src = selected.image;
      imageElement.alt = selected.author;
      imageElement.style.display = "block";
      descriptionElement.textContent = selected.description;
      wikiLink.href = selected.wiki || `https://en.wikipedia.org/wiki/${encodeURIComponent(selected.author.replace(/\s/g, "_"))}`;
  
      quoteBox.style.display = "block";
      fadeElements.forEach(el => el.classList.add("show"));
    }, 300);
  }
