import { readdirSync, writeFileSync, readFileSync } from 'fs';
import path from 'path';
const _dirname = path.dirname(__filename);

const ICONS_DIR = path.resolve(_dirname, '../../../assets/icons');
const OUTPUT_FILE = path.resolve(_dirname, './icon-type.ts');

function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

function sanitizeFillColor(filePath: string) {
  const content = readFileSync(filePath, 'utf-8');
  const replaced = content.replace(/fill="[^"]*"/g, 'fill="currentColor"');

  if (replaced !== content) {
    writeFileSync(filePath, replaced, 'utf-8');
    console.log(`✅ fill="currentColor" patched: ${path.basename(filePath)}`);
  }
}

function generateIconTypeAndMap() {
  const iconTypes = readdirSync(ICONS_DIR)
    .filter((file) => file.endsWith('.svg'))
    .map((file) => {
      const name = file.replace('.svg', '');
      const filePath = path.join(ICONS_DIR, file);
      sanitizeFillColor(filePath);
      return name;
    })
    .sort();

  const typeDef = `export type IconTypes =\n${iconTypes.map((name) => `  | '${name}'`).join('\n')}\n`;

  const importLines = iconTypes
    .map((name) => {
      const pascal = toPascalCase(name);
      return `import ${pascal} from '../../../assets/icons/${name}.svg';`;
    })
    .join('\n');

  const mapDef = `export const iconMap: Record<IconTypes, React.FC<React.SVGProps<SVGSVGElement>>> = {\n${iconTypes
    .map((name) => `  '${name}': ${toPascalCase(name)},`)
    .join('\n')}\n};`;

  const fullContent = `
${importLines}

${typeDef}

${mapDef}
`;

  writeFileSync(OUTPUT_FILE, fullContent);
}

generateIconTypeAndMap();
