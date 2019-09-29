import { toTitleFormat, toPascalCase, toSnakeCase, createDefaultName } from '../src/utils/utils';

const nameSnake = 'super-cool-component';
const nameCamelCase = 'superCoolComponent';
const namePascalcase = 'SuperCoolComponent';
const nameTitle = 'Super Cool Component';

describe('Name Formatters: Title', () => {
  it('should return correct title from snake-case', () => {
    const title = toTitleFormat(nameSnake);
    expect(title).toBe(nameTitle);
  });

  it('shoule return correct title from camelCase', () => {
    const title = toTitleFormat(nameCamelCase);
    expect(title).toBe(nameTitle);
  });

  it('shoule return correct title from PascalCase', () => {
    const title = toTitleFormat(namePascalcase);
    expect(title).toBe(nameTitle);
  });
});

describe('Name Formatters: PascalCase', () => {
  it('should return correct PascalCase from snake-case', () => {
    const title = toPascalCase(nameSnake);
    expect(title).toBe(namePascalcase);
  });

  it('should return correct PascalCase from camelCase', () => {
    const title = toPascalCase(nameCamelCase);
    expect(title).toBe(namePascalcase);
  });
})

describe('Name Formatters: snake-case', () => {
  it('should return correct snake-case from camelCase', () => {
    const title = toSnakeCase(nameCamelCase);
    expect(title).toBe(nameSnake);
  });

  it ('should return correct snake-case from PascalCase', () => {
    const title = toSnakeCase(namePascalcase);
    expect(title).toBe(nameSnake);
  });
});

describe('Default name suggestion', () => {
  it('should return snake-case from snake-case', () => {
    const title = 'component-name';
    const defaultName = createDefaultName(title);
    expect(defaultName).toBe('component-name');
  });

  it('should return snake-case from camelCase', () => {
    const title = 'componentName';
    const defaultName = createDefaultName(title);
    expect(defaultName).toBe('component-name');
  });

  it('should return snake-case from PascalCase', () => {
    const title = 'ComponentName';
    const defaultName = createDefaultName(title);
    expect(defaultName).toBe('component-name');
  });

  it('should append "component" to single-word', () => {
    const title = 'name';
    const defaultName = createDefaultName(title);
    expect(defaultName).toBe('name-component');
  });
});