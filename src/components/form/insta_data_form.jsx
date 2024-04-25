import { useState } from "react";
import PropTypes from "prop-types";
import { StyledForm } from "./styles_forma";
import { insta_widget_creator } from "../../services";

export const WidgetCreator = ({ setOptions, columnsNames }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim()) {
      try {
        setLoading(true);
        const res = await insta_widget_creator(message, columnsNames);
        console.log(res);
        setOptions(JSON.parse(res));
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

WidgetCreator.propTypes = {
  setOptions: PropTypes.func.isRequired,
};
