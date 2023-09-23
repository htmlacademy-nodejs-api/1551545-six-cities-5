import chalk from 'chalk';
import { Command } from './command.interface.js';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
      ${chalk.bgRgb(80, 2, 110)('Программа для подготовки REST API сервера.')}
      ${chalk.italic.underline('Пример:')}
          cli.js --<command> [--arguments]
      ${chalk.italic.underline('Комманды:')}
          ${chalk.green('--version:')}                   ${chalk.underline('# выводит номер версии')}
          ${chalk.yellow('--help:')}                      ${chalk.underline('# печатает этот текст')}
          ${chalk.cyan('--import <path>:')}             ${chalk.underline('# импортирует данные из TSV')}
          --generate <n> <path> <url>  ${chalk.underline('# генерирует произвольное количество тестовых данных')}
    `);
  }
}
