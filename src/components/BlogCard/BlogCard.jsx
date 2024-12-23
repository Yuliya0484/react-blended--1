import s from './BlogCard.module.css';
import { formatDateToNow } from '../../helpers/formatData.js';

const BlogCard = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
}) => {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <img className={s.cardPoster} src={poster} alt={title} />
      </div>
      <div className={s.cardBody}>
        <span className={s.tag}>{tag}</span>
        <h2 className={s.cardTitle}>{title}</h2>
        <p className={s.cardText}>{description}</p>
      </div>
      <div className={s.cardFooter}>
        <div className={s.userBox}>
          <img className={s.avatar} src={avatar} alt={name} />
          <div>
            <h3 className={s.userName}>{name}</h3>
            <small className={s.date}>{formatDateToNow(postedAt)}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
