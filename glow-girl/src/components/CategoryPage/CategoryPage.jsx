import { useSelector } from 'react-redux';

function CategoryPage() {

    const category = useSelector(store => store.selectedCategory);

    return (
        <>
            <h1>{category.title}</h1>
        </>
    )
}

export default CategoryPage;