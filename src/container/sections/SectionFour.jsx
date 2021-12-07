import styled from "styled-components";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Details from "../../components/Details/index";
import Palette from "../../palette/palette";

// Images
import FourImage from '../../assets/img/section-four/four.jpg';
const colours = Palette();

function* generateDetails(colours, size, toShow) {
  yield (
    <Details palette={colours} titleSize={size} showReadMore={toShow}></Details>
  );
  yield (
    <Details palette={colours} titleSize={size} showReadMore={toShow}></Details>
  );
  yield (
    <Details palette={colours} titleSize={size} showReadMore={toShow}></Details>
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
  const Container = styled.div``;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Vipp Chimney" {...a11yProps(0)} />
          <Tab label="Vipp Shelter" {...a11yProps(1)} />
          <Tab label="Vipp Loft" {...a11yProps(2)} />
        </Tabs>
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

export default function SectionFour() {
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
        background: url(${FourImage}) no-repeat;
        justify-self: center;
    }
  `;
  return (
    <Container>
      <div className="details">
        <Taber></Taber>
      </div>
      <div className="image-container"></div>
    </Container>
  );
}
