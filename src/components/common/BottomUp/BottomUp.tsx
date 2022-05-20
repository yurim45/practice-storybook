import React, {
  Dispatch,
  ReactNode,
  TouchEvent,
  useRef,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';

type BottomUpProps = {
  children: ReactNode;
  setIsOpen: Dispatch<boolean>;
};

const BottomUp = ({ children, setIsOpen }: BottomUpProps) => {
  const [clientH, setClientH] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  const closeComponent = (e: TouchEvent<HTMLDivElement>) => {
    if ((e?.target as Element)?.contains(e?.currentTarget)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (ref?.current?.clientHeight) {
      setClientH(ref?.current?.clientHeight);
    }
  }, [clientH]);

  return (
    <Inner onTouchEnd={(e) => closeComponent(e)}>
      <Component ref={ref} clientH={ref?.current?.clientHeight}>
        {children}
      </Component>
    </Inner>
  );
};

export default BottomUp;

const Inner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const Component = styled.div<{ clientH: number | undefined }>`
  position: fixed;
  bottom: ${({ clientH }) => `-${clientH}px`};
  left: 0;
  width: 100vw;
  background: var(--white);
  border-radius: 30px 30px 0px 0px;
  overflow: hidden;
  transition-delay: 5s;
  transform: ${({ clientH }) => `translateY(-${clientH}px)`};
  transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
`;
