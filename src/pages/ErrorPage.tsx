
const ErrorPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="text-dark mb-4">Page Not Found</h2>
      <p className="text-muted text-center">
        The page you are looking for does not exist.<br />
        Please check the URL or return to the homepage.
      </p>
      <br />
      <a href="/" className="btn btn-primary mt-3">
        Go to Homepage
      </a>
    </div>
  );
};

export default ErrorPage;