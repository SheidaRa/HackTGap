import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
            <h1>{category.title}</h1>
            <p>{category.summary}</p>
            
            {category?.topics?.map((topic, i) => (
                <button key={i} onClick={() => goToTopicPage(topic)}>{topic.title}</button>
            ))}
        </>
    )
}

export default CategoryPage;