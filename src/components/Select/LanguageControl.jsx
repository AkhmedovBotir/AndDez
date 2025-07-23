import React from "react";
import { LanguageControlContainer } from "./style";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants/index";

const LanguageControl = () => {
  // Set initial value of lang
  const { i18n, t } = useTranslation();

  const [lang, setLang] = React.useState(i18n.language);

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  return (
    <LanguageControlContainer>
      <Box sx={{ minWidth: 120, height: "100%", display:'flex', justifyContent:'end' }}>
        <FormControl fullWidth>
          <Select
            MenuProps={{
              disableScrollLock: true,
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
            onChange={handleChange}
            sx={{ height: "40px" }}
          >
            {LANGUAGES.map(({ code, label }) => (
              <MenuItem key={code} value={code}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </LanguageControlContainer>
  );
};

export default LanguageControl;
