import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ newsData }) => {
  const {_id, title, image_url, details } = newsData || {};

  return (
    <div>
      <div className="card card-compact    mb-12">
        <h3 className="text-xl font-bold mb-5">{title} </h3>
        <figure>
          <img src={image_url} />
        </figure>
        <div className="card-body">
          {details.length > 200 ? (
        <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-700"> READ MORE</Link> </p>
          ) : (
            <p>{details} </p>
          )}
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  newsData: PropTypes.object,
};

export default NewsCard;
