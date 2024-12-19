import PropTypes from 'prop-types';
import ForbesListItem from '../ForbesListItem/ForbesListItem';
import s from './ForbesList.module.css';

const ForbesList = ({ list }) => (
  <div className={s.board}>
    <div className={s.header}>
      <h2 className={s.title}>
        <span className={s.titleTop}>Forbes</span>
        <span className={s.titleBottom}>Leader board</span>
      </h2>
    </div>
    <ul className={s.list}>
      {list.map(({ id, avatar, name, capital, isIncrease }) => (
        <li key={id} className={s.listItem}>
          <ForbesListItem
            avatar={avatar}
            name={name}
            capital={capital}
            isIncrease={isIncrease}
          />
        </li>
      ))}
    </ul>
  </div>
);

ForbesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      capital: PropTypes.number.isRequired,
      isIncrease: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default ForbesList;
