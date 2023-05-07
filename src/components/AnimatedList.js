import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './styles/Animating.module.css';

const AnimatedList = ({ items, addItem, removeItem }) => {
  return (
    <div>
    
      <TransitionGroup className={styles.list}>
        {items.map((item) => (
          <CSSTransition
            key={item.id}
            timeout={500}
            classNames={{
              enter: styles.itemEnter,
              enterActive: styles.itemEnterActive,
              exit: styles.itemExit,
              exitActive: styles.itemExitActive,
            }}
          >
            <div className={styles.listItem}>
              {item.name}
              <button onClick={() => removeItem(item.id)}>X</button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default AnimatedList;