// TODO import for client-side routing (useHistory?)

function CategoryListItem({ category }) {

    let goToCategoryPage = () => {
        console.log(category);
        // TODO save category obj to reducer
        // TODO route user to CategoryPage
    }

    return (
        <>
            <button onClick={goToCategoryPage}>{category.title}</button>
        </>
    )
}

export default CategoryListItem;