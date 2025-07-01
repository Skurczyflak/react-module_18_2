import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getPostByCategory } from "../../../redux/postsRedux";
import Posts from "../Posts/Posts";

const Category = () => {

    const { name } = useParams();
    const postsByCat = useSelector((state) => getPostByCategory(state, name))
    
  return (
    <>
    <h2>{ name }</h2>
    <Posts posts={postsByCat} />
    </>
  );
};

export default Category;
