import styled from "styled-components";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Details from "../../components/Details/index";
import Palette from "../../styles/palette/palette";

// Images
import Assets from "../../assets/assets";

const colours = Palette();
const { section4 } = Assets();

const theme = createTheme({
  fontSize: "2rem",
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
    fontSize: "1.2rem",
  },
  second: {
    text: "Read more",
    padding: ".8rem 1.5rem",
    color: "black",
    bgColor: "transparent",
    fontSize: "1.2rem",
  },
};

function* generateDetails(colours, size, toShow, hotelName) {
  yield (
    <Details
      palette={colours}
      titleSize={size}
      showReadMore={toShow}
      configForButtons={buttonsConfigurations}
      title={hotelName}
    />
  );
  yield (
    <Details
      palette={colours}
      titleSize={size}
      showReadMore={toShow}
      configForButtons={buttonsConfigurations}
      title={hotelName}
    />
  );
  yield (
    <Details
      palette={colours}
      titleSize={size}
      showReadMore={toShow}
      configForButtons={buttonsConfigurations}
      title={hotelName}
    />
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
        <Box sx={{ p: 4 }}>
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

  .description {
    font-size: 1.6rem;
  }

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
      font-size: 1.4rem;
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
        {generateDetails(colours, "4rem", false, "Vipp Chimney").next().value}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {generateDetails(colours, "4rem", false, "Vipp Shelter").next().value}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {generateDetails(colours, "4rem", false, "Vipp Loft").next().value}
      </TabPanel>
    </Container>
  );
}

export default function Section4() {
  const Container = styled.section`
    width: 100%;
    display: flex;

    .details {
      height: auto;
      display: block;
      margin: auto;
      align-items: center;
      justify-content: center;
    }

    .image-container {
      width: 50%;
      height: 100%;
      margin-left: auto;
      display: flex;

      img {
        height: 100%;
        width: 100%;
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
        <img src={section4.four} alt="just" />
      </div>
    </Container>
  );
}
