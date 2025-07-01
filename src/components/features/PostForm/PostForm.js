import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import shortid from "shortid";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../../../utils/capFirstLetter';

const PostForm = (props) => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [id, setId] = useState(props.id || shortid());
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [category, setCategory] = useState(props.category || '')
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const [contentError, setConErr] = useState(false);
  const [dateError, setdateErr] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const categories = useSelector( getAllCategories );

  const handleSubmit = () => {
    setConErr(!content)
    setdateErr(!publishedDate)
    setCategoryError(!category)
    if(content && publishedDate && category){
      props.action({ id, title, shortDescription, content, publishedDate, author, category });
      setId('');
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control {...register("title", { required: true, minLength: 4 })} type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
           {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control {...register("author", { required: true, minLength: 4 })} type="text" placeholder="Enter Author" value={author}  onChange={(e) => setAuthor(e.target.value)}/>
          {errors.author && <small className="d-block form-text text-danger mt-2">This field is required</small>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Published</Form.Label>
        <Form.Control type="date" value={publishedDate}  onChange={(e) => setPublishedDate(e.target.value)} />
          {dateError && <small className="d-block form-text text-danger mt-2">Data can't be empty</small>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Categories</Form.Label>
        <Form.Select aria-label="Default select" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Select category...</option>
          {categories.map(cat => 
            <option value={cat}>{capitalizeFirstLetter(cat)}</option>
          )}
        </Form.Select>
        {categoryError && <small className="d-block form-text text-danger mt-2">You must select category</small>}
      </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Short Description</Form.Label>
        <Form.Control {...register("shortDescription", { required: true, minLength: 19 })} as="textarea"  rows={3} placeholder="Enter short description of post..." value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
      {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required</small>}
      </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Main Content</Form.Label>
        <ReactQuill value={content} onChange={setContent} />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      </Form.Group>
      <Button variant="primary" type="submit">
        {props.actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
