//If you write your own code, remember hex color shortcuts (eg., #fff, #000)
const hexToRgbA = (hex: string): string => {
  let c: any;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",1)"
    );
  }
  // throw new Error("Bad Hex");
  return "Bad Hex";
};

// hexToRgbA("#fbafff");

/*  returned value: (String)
rgba(251,175,255,1)
*/

export { hexToRgbA };
