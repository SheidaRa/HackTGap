import Data from '../../data.json';

function Categories() {

    return (
        <>
            <h1>{Data.categories[0].title}</h1>
        </>
    )
}

export default Categories;