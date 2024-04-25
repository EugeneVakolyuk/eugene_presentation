import { useState } from "react";
import PropTypes from "prop-types";
import { StyledForm } from "./styles_forma";
import { bedrock } from "../../services/bedrock";

export const Forma = ({ config, setConfig }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    config.dataPool = null;
    config.qui = null;

    if (message.trim()) {
      try {
        setLoading(true);
        const res = await bedrock(message, config);
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
        Submit
      </button>
    </StyledForm>
  );
};

Forma.propTypes = {
  config: PropTypes.object.isRequired,
  setConfig: PropTypes.func.isRequired,
};
