import 'animate.css';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        display: ' flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
      }}
      className={'animate__animated animate__fadeIn'}
    >
      {children}
    </div>
  );
};
