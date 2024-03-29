import React from "react";
import styles from "./CardWithLinkAction.module.scss";
import { ICardWithLinkAction } from "./CardWithLinkAction.types";

const CardWithLinkAction = ({
  header,
  quickLinks,
  headerLink,
  ...props
}: ICardWithLinkAction) => {
  return (
    <div className={styles.quickLinkContainer} {...props}>
      <header className={styles.quickLinkHeader}>
        <h2 className={styles.quickLinksHeading}>
          {headerLink ? (
            <a className={styles.quicklinks_plus_icon_link}>
              <img
                className={styles.quicklinks_plus_icon}
                src="https://a.espncdn.com/redesign/assets/img/logos/espnplus/ESPN+.svg"
              />
            </a>
          ) : (
            header
          )}
        </h2>
      </header>
      <ul className={styles.quickLinkList}>
        {quickLinks.map((link, index) => (
          <li key={index} className={styles.quickLinkListItem}>
            <a href={link.href} className={styles.link}>
              <div className={styles.icon}>
                <img
                  className={styles.imageIcon}
                  src={link.iconSrc}
                  alt={link.altText}
                />
              </div>
              <div className={styles.quickListDetails}>
                <span className={styles.quickListDetailsNameStyle}>
                  {link.quickListDetailsName}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardWithLinkAction;
