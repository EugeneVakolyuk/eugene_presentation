import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledForm } from "./styles_forma";
import { widget_creator } from "../../services";
import mixpanel from "mixpanel-browser";
import { TbArrowUpRight } from "react-icons/tb";

export const WidgetCreator = ({
  setWidget,
  loading,
  setLoading,
  message,
  setMessage,
}) => {
  const sendEvent = (message, fileData, chartOptions) => {
    const mixpanelBody = {
      distinct_id: "user_id",
    };

    if (message) mixpanelBody.message = message;
    if (chartOptions) mixpanelBody.bedrockResponsOptions = chartOptions;
    if (fileData) mixpanelBody.fileData = fileData[0];

    // if (fileData.length !== 0) {
    //     let titleAndExample = ''
    //
    //     for (let key in fileData[0]) {
    //         titleAndExample += `${key}-${fileData[0][key]} `
    //     }
    // }

    mixpanel.init(import.meta.env.VITE_SOME_MIXPANEL_TOKEN, { debug: true });
    mixpanel.track("user_message", mixpanelBody);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim()) {
      try {
        setLoading(true);
        const res = await widget_creator(message);
        console.log(res);
        setWidget(JSON.parse(res));
      } catch (error) {
        console.log(error);
      } finally {
        sendEvent(message);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Your prompt"
        />
        <button disabled={loading} type="submit">
          Send
          <TbArrowUpRight />
        </button>
      </StyledForm>
    </>
  );
};

WidgetCreator.propTypes = {
  setWidget: PropTypes.func.isRequired,
};
