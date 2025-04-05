import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
  return (
    <header className="admin-header">
      <div className="d-flex align-items-center justify-content-center w-100 h-100">
        <img
          src='/images/logo.png'
          alt="logo"
          className="me-3"
          
          style={{
            height: '60px',
            width: 'auto',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <h1 className="h5 mb-0 text-light">Khaira Co-operative Bank</h1>
      </div>
    </header>
  );
};
