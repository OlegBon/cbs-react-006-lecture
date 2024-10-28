import PropTypes from "prop-types";
import Item from "./Item";

const List = ({ tasks, setTasks }) => {
  return (
    <ul>
      {tasks.map((el) => (
        <Item key={el.id} {...el} tasks={tasks} setTasks={setTasks} />
      ))}
    </ul>
  );
};

List.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};

export default List;
