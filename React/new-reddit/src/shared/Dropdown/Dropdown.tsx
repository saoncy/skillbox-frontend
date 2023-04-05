import React from 'react';
import styles from './dropdown.scss';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  React.useEffect(() => {
    if (isOpen !== undefined)
      setIsDropdownOpen(isOpen);
  }, [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined)
      setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div>
      <div onClick={handleOpen}>
        {button}
      </div>
      {
        isDropdownOpen && (
          <div>
            <div onClick={() => setIsDropdownOpen(false)}>
              {children}
            </div>
          </div>
        )
      }
    </div>
  );
}
