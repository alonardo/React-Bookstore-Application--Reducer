import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'author', headerName: 'Author', width: 300 },
  { field: 'title', headerName: 'Title', width: 600 },
  {field: 'pages', headerName: 'Pages', type: 'number', width: 90,},
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'summary', headerName: 'Summary', width: 700 },
];

const rows = [
  { id: 1, title: 'The Bomber Mafia: A Dream, a Temptation, and the Longest Night of the Second World War', author: 'Malcolm Gladwell', pages: 241, category: 'NonFiction', summary: 'In The Bomber Mafia: A Dream, a Temptation, and the Longest Night of the Second World War, Malcolm Gladwell, author of New York Times best sellers including Talking to Strangers and host of the podcast Revisionist History, uses original interviews, archival footage, and his trademark insight to weave together the stories of a Dutch genius and his homemade computer, a band of brothers in Central Alabama, a British psychopath, and pyromaniacal chemists at Harvard. As listeners hear these stories unfurl, Gladwell examines one of the greatest moral challenges in modern American history'},
  { id: 2, title: 'Why Buddhism Is True: The Science and Philosophy of Meditation and Enlightenment', author: 'Robert Wright', pages: 374, category: 'NonFiction', summary: 'In Why Buddhism Is True, Wright leads listeners on a journey through psychology, philosophy, and a great many silent retreats to show how and why meditation can serve as the foundation for a spiritual life in a secular age. At once excitingly ambitious and wittily accessible, this is the first book to combine evolutionary psychology with cutting-edge neuroscience to defend the radical claims at the heart of Buddhist philosophy. With bracing honesty and fierce wisdom, it will persuade you not just that Buddhism is true - which is to say, a way out of our delusion - but that it can ultimately save us from ourselves, as individuals and as a species.'},
  { id: 3, title: 'Rust: The Longest War', author: 'Jonathan Waldman', pages: 451, category: 'NonFiction', summary: 'A thrilling drama of man versus nature, detailing the fierce, ongoing fight against the mightiest and unlikeliest enemy: rust. It has been called the great destroyer and the evil. The Pentagon refers to it as the pervasive menace. It destroys cars, fells bridges, sinks ships, sparks house fires, and nearly brought down the Statue of Liberty. Rust costs America more than $400 billion per year--more than all other natural disasters combined.'},
  { id: 4, title: 'Letter to a Christian Nation', author: 'Sam Harris', pages: 113, category: 'NonFiction', summary: 'In response to his award-winning best seller The End of Faith, Sam Harris received thousands of letters from Christians excoriating him for not believing in God. Letter to A Christian Nation is his courageous and controversial reply. Using rational argument, Harris offers a measured refutation of the beliefs that form the core of fundamentalist Christianity. Addressing current topics ranging from intelligent design and stem-cell research to the connections between religion and violence, Letter to A Christian Nation boldly challenges the influence that faith has on public life in the United States.'},
  { id: 5, title: '21 Lessons for the 21st Century', author: 'Yuval Noah Harari', pages: 324, category: 'NonFiction', summary: 'How do computers and robots change the meaning of being human? How do we deal with the epidemic of fake news? Are nations and religions still relevant? What should we teach our children? Yuval Noah Hararis 21 Lessons for the 21st Century is a probing and visionary investigation into todays most urgent issues as we move into the uncharted territory of the future. As technology advances faster than our understanding of it, hacking becomes a tactic of war, and the world feels more polarized than ever, Harari addresses the challenge of navigating life in the face of constant and disorienting change and raises the important questions we need to ask ourselves in order to survive.' },
  { id: 6, title: 'How to Change Your Mind: What the New Science of Psychedelics Teaches Us About Consciousness, Dying, Addiction, Depression, and Transcendence', author: 'Michael Pollan', pages: 366, category: 'NonFiction', summary: 'A brilliant and brave investigation into the medical and scientific revolution taking place around psychedelic drugs - and the spellbinding story of his own life-changing psychedelic experiences'}
];

export default function WishList() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
