import styled from "styled-components";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Details from "../../components/Details/index";
import Palette from "../../palette/palette";

// Images
import FourImage from "../../assets/img/Section4/four.jpg";
const colours = Palette();

const theme = createTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

const buttonsConfigurations = {
  first: {
    text: "Book a Room",
    padding: ".8rem 1.5rem",
    color: "white",
    bgColor: colours.backgrounds.secondaryColor,
    fontSize: ".8rem",
  },
  second: {
    text: "Read more",
    padding: ".8rem 1.5rem",
    color: "black",
    bgColor: "transparent",
    fontSize: ".8rem",
  },
};

function* generateDetails(colours, size, toShow) {
  yield (
    <Details
      palette={colours}
      titleSize={size}
      showReadMore={toShow}
      configForButtons={buttonsConfigurations}
    ></Details>
  );
  yield (
    <Details
      palette={colours}
      titleSize={size}
      showReadMore={toShow}
      configForButtons={buttonsConfigurations}
    ></Details>
  );
  yield (
    <Details
      palette={colours}
      titleSize={size}
      showReadMore={toShow}
      configForButtons={buttonsConfigurations}
    ></Details>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Taber() {
  const Container = styled.div`
    .MuiBox-root {
      display: inline-block;
      border: none;
    }

    .MuiTabs-scroller {
      text-transform: capitalize;
    }

    .MuiTabs-indicator {
      background: #47645f;
    }

    .MuiButtonBase-root {
      color: #47645f !important;
      text-transform: none;
    }
  `;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Vipp Chimney" {...a11yProps(0)} />
            <Tab label="Vipp Shelter" {...a11yProps(1)} />
            <Tab label="Vipp Loft" {...a11yProps(2)} />
          </Tabs>
        </ThemeProvider>
      </Box>
      <TabPanel value={value} index={0}>
        {generateDetails(colours, "3rem", false).next().value}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {generateDetails(colours, "3rem", false).next().value}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {generateDetails(colours, "3rem", false).next().value}
      </TabPanel>
    </Container>
  );
}

export default function Section4() {
  const Container = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: space-between;

    .details {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .image-container {
      width: 50%;
      height: 100%;
      background-size: contain;
      justify-self: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  `;
  return (
    <Container>
      <div className="details">
        <Taber></Taber>
      </div>
      <div className="image-container">
        <img src={FourImage} alt="just" />
      </div>
    </Container>
  );
}
