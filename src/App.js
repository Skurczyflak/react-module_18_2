import { Routes, Route } from 'react-router-dom';

import NotFound from "./components/pages/NotFound/NotFound";
import About from './components/pages/About/About';
import HomePage from './components/pages/HomePage/HomePage';
import EditPost from './components/pages/EditPost/EditPost';
import AddPost from './components/pages/AddPost/AddPost';
import Post from './components/pages/Post/Post';

import { Container } from 'react-bootstrap'
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
function App() {
  return (
<Container>
  <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/post/edit/:id" element={<EditPost />} />
      <Route path='/post/add' element={<AddPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
</Container>
  );
}

export default App;

// adresses:
// / - home page
// /post/:id - subpage of single posts
// /post/add - subpage of adding new post
// /post/edit/:id - subpage of editing existing post
// /about - subpage about app