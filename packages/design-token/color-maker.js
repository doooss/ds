const colors = require('./src/primer.json');
const fs = require('fs');

const _colors = colors.base.color;

function generateCSSVariables(colors) {
    let pickColors = '';
    let darkColors = '';

    for (const key in colors) {
        if (!colors.hasOwnProperty(key)) continue;
        const element = colors[key];
        for (const key2 in element) {
            if (!element.hasOwnProperty(key2)) continue;
            const element2 = element[key2];
            pickColors += `--${key}-${key2}: hsl(${element2.value});\n`;
            darkColors += `--${key}-${key2}-dark: hsl(${element2.dark});\n`;
        }
    }

    return { pickColors, darkColors };
}

const { pickColors, darkColors } = generateCSSVariables(_colors);

const colorMaker = `:root {
${pickColors}
${darkColors}
}`;

fs.writeFileSync('./dist/color.css', colorMaker, (err) => {
    if (err) {
        console.log(err);
    }
});
