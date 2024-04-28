import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CategoryPage.css';

function CategoryPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const category = useSelector(store => store.selectedCategory);

    let goToTopicPage = topic => {
        // save topic obj to reducer
        dispatch({ type: 'SET_TOPIC', payload: topic });

        // route user to TopicPage
        navigate('/topic');
    }

    return (
        <>
            <div id="summary">
            <h1>{category.title}</h1>
            <p>{category.summary}</p>
            </div>
            
            <div id="articles">
            {category?.topics?.map((topic, i) => (
                <button className='article-button' key={i} onClick={() => goToTopicPage(topic)}>{topic.title}</button>
            ))}
            </div>
        </>
    )
}

export default CategoryPage;