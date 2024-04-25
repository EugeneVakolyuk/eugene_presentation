import { useState } from "react";
import PropTypes from "prop-types";
import { StyledForm } from "./styles_forma";
import { dashCreator } from "../../services/dash_creator";

export const Forma = ({ items, setConfig }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim()) {
      try {
        setLoading(true);
        const res = await dashCreator(items, message);
        console.log(res);
        setConfig(JSON.parse(res));
      } catch (error) {
        console.log(error);
      } finally {
        setMessage("");
        setLoading(false);
      }
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button disabled={loading} type="submit">
        {loading ? "Submitting..." : "Submit"}
      </button>
    </StyledForm>
  );
};

Forma.propTypes = {
  items: PropTypes.string.isRequired,
  setConfig: PropTypes.func.isRequired,
};
