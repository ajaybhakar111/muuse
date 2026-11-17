const images = import.meta.glob('../assets/authors/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

// file must match the real file name inside src/assets/authors/
export const getPortrait = (file) => images[`../assets/authors/${file}`] || null;

export const authors = [
  {
    id: 'rumi',
    name: 'Rumi',
    profession: 'Poet & Sufi mystic',
    years: '1207 – 1273',
    file: 'rumi.jpg',
    bio: 'Jalaluddin Rumi was a 13th-century Persian poet and Islamic scholar. His poetry on love, loss and spiritual longing, especially the Masnavi, is read across the world today.',
  },
  {
    id: 'marcus-aurelius',
    name: 'Marcus Aurelius',
    profession: 'Roman Emperor & Stoic philosopher',
    years: '121 – 180',
    file: 'marcus-aurelius.jpg',
    bio: 'Emperor of Rome from 161 to 180, he wrote private notes to himself while on military campaign. They became the Meditations, one of the most read works of Stoic philosophy.',
  },
  {
    id: 'nietzsche',
    name: 'Friedrich Nietzsche',
    profession: 'Philosopher',
    years: '1844 – 1900',
    file: 'nietzsche.jpg',
    bio: 'A German philosopher and cultural critic who challenged inherited morality and explored will, meaning and self-overcoming. Major works include Thus Spoke Zarathustra.',
  },
  {
    id: 'einstein',
    name: 'Albert Einstein',
    profession: 'Theoretical physicist',
    years: '1879 – 1955',
    file: 'einstein.jpg',
    bio: 'Developed the theory of relativity and received the 1921 Nobel Prize in Physics. He was also known for his curiosity, humility and views on science and society.',
  },
  {
    id: 'vivekananda',
    name: 'Swami Vivekananda',
    profession: 'Monk & spiritual teacher',
    years: '1863 – 1902',
    file: 'vivekananda.jpg',
    bio: 'An Indian monk and a key figure in introducing Vedanta and yoga to the West. His 1893 address at the Parliament of the World\'s Religions in Chicago made him world famous.',
  },
  {
    id: 'tagore',
    name: 'Rabindranath Tagore',
    profession: 'Poet, writer & composer',
    years: '1861 – 1941',
    file: 'tagore.jpg',
    bio: 'A Bengali polymath and the first non-European to win the Nobel Prize in Literature (1913). He wrote poems, songs, plays and novels, and composed the national anthems of India and Bangladesh.',
  },
  {
    id: 'kalam',
    name: 'A. P. J. Abdul Kalam',
    profession: 'Scientist & 11th President of India',
    years: '1931 – 2015',
    file: 'kalam.jpg',
    bio: 'An aerospace scientist who played a leading role in India\'s space and missile programmes before serving as President from 2002 to 2007. Known as the "People\'s President" for his connection with students.',
  },
  {
    id: 'oscar-wilde',
    name: 'Oscar Wilde',
    profession: 'Playwright & author',
    years: '1854 – 1900',
    file: 'oscar-wilde.jpg',
    bio: 'An Irish writer famous for his wit. His works include The Importance of Being Earnest and The Picture of Dorian Gray.',
  },
  {
    id: 'gandhi',
    name: 'Mahatma Gandhi',
    profession: 'Leader of the Indian independence movement',
    years: '1869 – 1948',
    file: 'gandhi.jpg',
    bio: 'Led India\'s non-violent struggle for independence from British rule through satyagraha, and inspired civil rights movements around the world.',
  },
  {
    id: 'tolstoy',
    name: 'Leo Tolstoy',
    profession: 'Novelist & thinker',
    years: '1828 – 1910',
    file: 'tolstoy.jpg',
    bio: 'A Russian author of War and Peace and Anna Karenina. In later life he wrote widely on morality, non-violence and simple living.',
  },
];

export const getAuthor = (id) => authors.find((a) => a.id === id);