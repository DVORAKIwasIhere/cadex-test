import { Button } from "antd";
import { Link } from "react-router-dom";

const ContactUsButton = () => {
  return (
    <div>
      <Link to="/contact">
        <Button>Contact us</Button>
      </Link>
    </div>
  );
};

export default ContactUsButton;
