import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { editPost } from '../../../redux/postsRedux';
import { getPostById } from "../../../redux/postsRedux";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import PostForm from '../PostForm/PostForm';
const EditPostForm = () => {
    
    const { postId } = useParams();
    const post = useSelector((state) => getPostById(state, postId ));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = post => {
        dispatch(editPost(post));
        navigate('/');
    } 

  return (
    <PostForm action={handleSubmit} actionText="Edit post" {...post} />
  )
};

export default EditPostForm;
