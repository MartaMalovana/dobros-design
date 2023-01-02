import { Content } from "../../App.styled";
import reviewList from './reviewList.json';
import {List, Review, ReviewPhoto, ReviewTitle} from './Reviews.styled';

export default function Reviews () {
    return (
        <Content>
            <List>
               {reviewList.map(el => 
                <Review key={el.id}>
                    <ReviewPhoto src={require(`../../images/jpg/reviews/large/${el.photo}`)}/>
                    <ReviewTitle>{el.title}</ReviewTitle>
                </Review>
               )}
            </List>
        </Content>
    );
}