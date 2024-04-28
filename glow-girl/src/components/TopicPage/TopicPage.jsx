import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import './TopicPage.css';

function TopicPage() {

    const topic = useSelector(store => store.selectedTopic);

    return (
        <>
            <h1>{topic?.title}</h1>
            <div>{topic.article && parse(topic.article)}</div>
        </>
    )
}

export default TopicPage;