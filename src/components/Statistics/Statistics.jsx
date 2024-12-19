import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import s from './Statistics.module.css';

const icons = [
  <FaRegThumbsUp key={1} />,
  <MdPeople key={2} />,
  <MdOutlineProductionQuantityLimits key={3} />,
  <GiTreeDoor key={4} />,
];
const Statistics = ({ title, stats }) => {
  return (
    <>
      <h3 className={s.title}>{title}</h3>
      <ul className={s.list}>
        {stats.map((stat, index) => (
          <li className={s.item} key={stat.id}>
            <StatisticsItem
              title={stat.title}
              total={stat.total}
              icon={icons[index]}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Statistics;
