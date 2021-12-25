import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fullStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const RatingElement = (props) => {
  const { rating } = props;

  let rateStars = parseFloat(rating);

  function s() {
    let e = [];
    let i = 0;

    for (i; i < 5; i++) {
      if (i < rateStars && rateStars % 1 == 0.5) {
        for (i; i < rateStars - 1; i++) {
          e.push(<FontAwesomeIcon key={i} icon={fullStar} />);
        }
        e.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} />);
        i += 1;
      } else {
        for (i; i < rateStars; i++) {
          e.push(<FontAwesomeIcon key={i} icon={fullStar} />);
        }
      }
      e.push(<FontAwesomeIcon key={i} icon={emptyStar} />);
    }

    return e;
  }

  return s();
};

export default RatingElement;
