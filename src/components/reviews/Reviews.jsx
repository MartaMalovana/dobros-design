import i18next from "i18next";
import { Content } from "../../App.styled";
import reviewList from "./reviewList.json";
import {
  Container,
  List,
  Review,
  ReviewPhoto,
  ReviewTitle,
} from "./Reviews.styled";

export default function Reviews() {
  return (
    <Container>
      <Content>
        <List>
          {reviewList.map((el) => (
            <Review key={el.id} column={el.column} row={el.row}>
              <ReviewPhoto
                srcSet={`
                                ${require(`../../images/jpg/reviews/small/${el.photo}`)} 400w,
                                ${require(`../../images/jpg/reviews/large/${el.photo}`)} 600w,
                            `}
                sizes="(min-width: 768px) 500px, 400px"
                src={require(`../../images/jpg/reviews/large/${el.photo}`)}
              />
              {/* <ReviewTitle>{i18next.language === 'ua' ? el.title : el.titleEng}</ReviewTitle> */}
            </Review>
          ))}
        </List>
      </Content>
    </Container>
  );
}
