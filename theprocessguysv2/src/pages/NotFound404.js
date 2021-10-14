const NotFound404 = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "90vh"}}>
      <h1 style={{fontWeight: "bold", fontSize: 50, marginBottom: 20}} className="text-white">404; Page Not Found</h1>
      <h3 style={{fontWeight: "bold", fontSize: 25}} className="text-white">We are sorry, the page you are looking for could not be found.</h3>
      <h3 style={{fontWeight: "bold", fontSize: 25}} className="text-white">Try checking the url if you entered it manually!</h3>
    </div>
  );
}

export default NotFound404;