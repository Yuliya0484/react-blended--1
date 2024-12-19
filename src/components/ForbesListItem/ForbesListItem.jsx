import s from './ForbesListItem.module.css';
import PropTypes from 'prop-types';
import { FcBullish, FcBearish } from 'react-icons/fc';
import { BiDollarCircle } from 'react-icons/bi';

const ForbesListItem = ({ avatar, name, capital, isIncrease }) => (
  <div className={s.item}>
    <img className={s.avatar} src={avatar} alt={name} />
    <h3 className={s.title}>{name}</h3>
    <span className={s.capital}>
      {capital} <BiDollarCircle color="#2196f3" size={22} />
      {isIncrease ? <FcBullish size={22} /> : <FcBearish size={22} />}
    </span>
  </div>
);

ForbesListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  capital: PropTypes.number.isRequired,
  isIncrease: PropTypes.bool.isRequired,
};

export default ForbesListItem;
