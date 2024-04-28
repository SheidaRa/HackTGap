import Data from '../../data.json';
import CategoryListItem from '../CategoryListItem/CategoryListItem';

function Categories() {

    return (
        <>
            <h1>Categories</h1>
            {Data.categories.map((category, i) => (
                <CategoryListItem key={i} category={category} />
            ))}
        </>
    )
}

export default Categories;