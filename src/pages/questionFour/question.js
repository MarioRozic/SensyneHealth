import React from "react";
import Typography from "@material-ui/core/Typography";

const question = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Question Four
      </Typography>
      <Typography variant="h5" gutterBottom>
        Kobayashi Maru
      </Typography>
      <Typography variant="body1" gutterBottom>
        Create counter, prevent component from multiple re-renders
      </Typography>
    </div>
  );
};

export default question;
