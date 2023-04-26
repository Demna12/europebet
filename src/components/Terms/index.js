import styles from "./Terms.module.css";
import { useState } from "react";

export function Terms() {
  const [activeItem, setActiveItem] = useState(null);

  function handleActiveItem(itemIndex) {
    activeItem === itemIndex ? setActiveItem(null) : setActiveItem(itemIndex);
  }

  return (
    <div className={styles.terms}>
      <div>წესები და პირობები</div>

      <div className="accordion">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((item, i) => (
          <div
            className="accordion"
            onClick={() => handleActiveItem(i)}
            key={i}
          >
            <div className={styles["accordion-header"]}>
              <div>Accordion {i}</div>
              <div className="sign">{activeItem === i ? "-" : "+"}</div>
            </div>

            {activeItem === i && (
              <div className="accordion-body">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry's ever since
                the 1500s, when an unknown printer took a galley of type
                standard dummy text and scrambled it to make a type specimen
                book.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
