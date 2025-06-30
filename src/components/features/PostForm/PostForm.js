import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import shortid from "shortid";

const PostForm = (props) => {
    
    const [id, setId] = useState(props.id || shortid());
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    props.action({ id, title, shortDescription, content, publishedDate, author,  });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Published</Form.Label>
        <Form.Control type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
      </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Short Description</Form.Label>
        <Form.Control as="textarea"  rows={3} placeholder="Enter short description of post..." value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
      </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Main Content</Form.Label>
        <Form.Control as="textarea"  rows={8} placeholder="Enter main content of post..." value={content} onChange={(e) => setContent(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {props.actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
