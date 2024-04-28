// TODO import for client-side routing (useHistory?)
import { useDispatch } from 'react-redux';

function CategoryListItem({ category }) {

    const dispatch = useDispatch();

    let goToCategoryPage = () => {
        // save category obj to reducer
        dispatch({ type: 'SET_CATEGORY', payload: category });

        // TODO route user to CategoryPage
    }

    return (
        <>
            <button onClick={goToCategoryPage}>{category.title}</button>
        </>
    )
}

export default CategoryListItem;