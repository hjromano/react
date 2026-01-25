import styles from './Container.module.css';
import { Outlet } from 'react-router-dom';

function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {/* Se for usado como rota pai */}
      <Outlet />

      {/* Se for usado como wrapper normal */}
      {props.children}
    </div>
  );
}

export default Container;
