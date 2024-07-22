import React, { useState } from 'react';
import styles from '../Styles/Sidebar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '../assets/icons/homeicon.svg?react';
import TicketIcon from '../assets/icons/ticketIcon.svg?react';
import OrderIcon from '../assets/icons/orderIcon.svg?react';
import CustumerIcon from '../assets/icons/custumerIcon.svg?react';
import ArrowLeftIcon from '../assets/icons/arrowLeftIcon.svg?react';
import RaffleIcon from '../assets/icons/folderIcon.svg?react';
import PrizeIcon from '../assets/icons/prizeIcon.svg?react';

interface SubItem {
  href: string;
  label: string;
}

interface NavItem {
  href?: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  subItems?: SubItem[];
}

const navItems: NavItem[] = [
  { href: '/', icon: HomeIcon, label: 'Resumen' },
  { href: '/ventas', icon: OrderIcon, label: 'Ventas' },
  {
    icon: RaffleIcon,
    label: 'Rifa',
    subItems: [
      {href:'/nueva-rifa', label: 'Nueva rifa'},
      {href:'/admin-rifa', label: 'Administrar rifas'}
    ]
  },
  {
    icon: PrizeIcon,
    label: 'Premios',
    subItems: [
      {href:'/nuevo-premio', label: 'Nuevo Premio'},
      {href:'/admin-premios', label: 'Administrar Premios'}
    ]
  },
  { 
    icon: TicketIcon, 
    label: 'Boletos', 
    subItems: [
      { href: '/nuevos-boletos', label: 'Nuevo set de Boletos' },
      { href: '/nuevo-boleto', label: 'Administrar Boletos' },
    ]
  },
  { href: '/clientes', icon: CustumerIcon, label: 'Clientes' },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (label: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleClick = (item: NavItem) => {
    if (item.subItems) {
      toggleSubMenu(item.label);
    } else if (item.href) {
      window.location.href = item.href;
    }
  };

  return (
    <div className={`border-end ${styles.sidebarContainer} ${isOpen ? styles.sidebarContainerOpen : styles.sidebarContainerClosed}`}>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <div 
              className={`${styles.navLink} ${isOpen ? styles.navLinkOpen : styles.navLinkClosed}`} 
              onClick={() => handleClick(item)}
              aria-current="page"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleClick(item);
                }
              }}
            >
              <div className={styles.iconWrapper}>
                <item.icon className="buttonIcon" />
              </div>
              <span className={!isOpen ? styles.hidden : ''}>{item.label}</span>
            </div>
            {item.subItems && openSubMenus[item.label] && isOpen && (
              <ul className={styles.subNavList}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.subNavItem}>
                    <a href={subItem.href} className={`nav-link ${styles.subNavLink}`}>{subItem.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <button onClick={toggleSidebar} className={styles.toggleButton}>
        <ArrowLeftIcon style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }} />
        <span className={!isOpen ? styles.hidden : ''}>{isOpen ? 'Minimizar' : ''}</span>
      </button>
    </div>
  );
};

export default Sidebar;
