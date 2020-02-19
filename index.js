class Color {
    constructor(ColorName, ColorCode) {
      this.ColorName = ColorName;
      this.ColorCode = ColorCode;
    }
  }
  const TotalColors = [
    new Color('brightred', '#E74C3C'),
    new Color('soothingpurple', '#9B59B6'),
    new Color('skyblue', '#5DADE2'),
    new Color('leafygreen', '#48C9B0'),
    new Color('sunkissedyellow', '#F4D03F'),
    new Color('groovygray', '#D7DBDD'),
  ];
  exports.getColor = () => {
    return TotalColors[Math.floor(Math.random() * TotalColors.length)];
  }
  
  exports.TotalColors = TotalColors;
  