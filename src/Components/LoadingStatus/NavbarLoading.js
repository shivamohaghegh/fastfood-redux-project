import "./NavbarLoading.css";

const NavbarLoading = () => {
  return (
    <div className="d-flex justify-content-center ms-5 align-items-center shadow">
      <div className="dot-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default NavbarLoading;
