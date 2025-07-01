const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title 1',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '2022-02-02',
      category: 'sport',
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '2022-03-02',
      category: 'news',
      author: 'John Duck'
    },
    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '2022-04-02',
      category: 'movies',
      author: 'John Moe'
    }
  ],
  categories: [
    "sport",
    "news",
    "movies"
  ],
};

export default initialState;
