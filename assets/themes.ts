enum ThemeName {
  LIGHT = "light",
  DARK = "dark",
}

interface Theme {
  [key: string]: string;
}

type Themes = {
  [key in ThemeName]: Theme;
};

/**
 * Konvertálja a HEX kódot RGB értékekké, és a megadott bemeneti stringgel együtt
 * egy objektumba csomagolja.
 *
 * @param {string} inputString A bemeneti string, pl. "--bg-color".
 * @param {string} hex A HEX színkód, pl. "#ffffff".
 * @returns {{[key: string]: string}} A generált objektum.
 */
const hexToRgb = (inputString: string, hex: string) => {
  const isShorthand = hex.length === 4;
  const color = isShorthand
    ? hex
        .slice(1)
        .split("")
        .map((c) => c + c)
        .join("")
    : hex.slice(1);

  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  return {
    [inputString]: hex,
    [`${inputString}-r`]: `${r}`,
    [`${inputString}-g`]: `${g}`,
    [`${inputString}-b`]: `${b}`,
  };
};

const themes: Themes = {
  light: {
    ...hexToRgb("--bg-color", "#36454F"),
    ...hexToRgb("--text-color", "#000000"),
    ...hexToRgb("--primary-color", "#6082B6"),
  },

  dark: {
    ...hexToRgb("--bg-color", "#6082B6"),
    ...hexToRgb("--text-color", "#ffffff"),
    ...hexToRgb("--primary-color", "#36454F"),
  },
};

export { themes };
export default themes;
