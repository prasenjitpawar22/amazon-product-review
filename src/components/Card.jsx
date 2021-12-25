import RatingElement from "./RatingElement";

const Card = (props) => {
  const { person, img_url, main_titl, rating, reviewtitle, verify, content } =
    props;

  const shorterContent = content ? content.substring(0, 345) : null;

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src={img_url}
          />
        </div>
        <div>
          <h1 className="text-gray-800 text-xl font-semibold">{person}</h1>
          <h2 className="text-gray-600 text-xl font-semibold">{reviewtitle}</h2>
          <p className="mt-2 text-gray-600">{shorterContent}...</p>
        </div>
        <div className="flex justify-between mt-4 ">
          <span className="text-xl font-medium text-indigo-500">
            <RatingElement rating={rating} />
          </span>
          <span className="text-xl font-medium text-indigo-500">{verify}</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
