// pages/Contact/Contact.jsx
import Form from "../../components/Form";
import SocialIcons from "../../components/SocialIcons";

const Contact = () => {
    return (
        <div className="container-icon center-content"> {/* Ajout de la classe center-content */}
            <h1>Des questions ? :</h1>
            <SocialIcons />
            <Form />
        </div>
    );
}

export default Contact;
