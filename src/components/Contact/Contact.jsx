import s from "./contact.module.css";
import { RiContactsFill, RiPhoneFill } from "react-icons/ri";

const Contact = ({ name, number, deleteContact, id }) => {
  return (
    <li className={s.item}>
      <div className={s.text_box}>
        <div className={s.text}>
          <span>
            <RiContactsFill />
          </span>
          <p>{name}</p>
        </div>
        <div className={s.text}>
          <span>
            <RiPhoneFill />
          </span>
          <p>{number}</p>
        </div>
      </div>
      <button
        className={s.button}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;