import PropTypes from 'prop-types';
import { format } from 'date-fns';
import s from './CryptoHistory.module.css';

const CryptoHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.th}>№</th>
          <th className={s.th}>PRICE</th>
          <th className={s.th}>AMOUNT</th>
          <th className={s.th}>DATE</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id} className={s.tr}>
            <td className={s.td}>{index + 1}</td>
            <td className={s.td}>{item.price}</td>
            <td className={s.td}>{item.amount}</td>
            <td className={s.td}>
              {format(new Date(item.date), 'dd/MM/yyyy, h:mm a')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

CryptoHistory.prorTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default CryptoHistory;
