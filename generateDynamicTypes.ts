import { readdirSync, writeFileSync } from 'fs';

const iconDirectory = './src/assets/icons';
const iconNames = readdirSync(iconDirectory);
let IconNameFileText = `const svgsNames = [
`;
iconNames.forEach((item: any) => {
	IconNameFileText += `	'${item.replace(".svg", "")}',\n`;
});
IconNameFileText += `] as const;

export type SvgsNames = typeof svgsNames[number];
`;
writeFileSync('./src/components/common/Icon/IconName.ts', IconNameFileText);

const iconColoredDirectory = './src/assets/iconsColored';
const iconColoredNames = readdirSync(iconColoredDirectory);
let IconColoredNameFileText = `const SvgsColorNames = [
`;
iconColoredNames.forEach((item: any) => {
  	IconColoredNameFileText += `	'${item.replace(".svg", "")}',\n`;
});
IconColoredNameFileText += `] as const;

export type SvgsColorNames = typeof SvgsColorNames[number];
`;
writeFileSync('./src/components/common/Icon/IconColoredName.ts', IconColoredNameFileText);
