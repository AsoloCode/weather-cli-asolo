import chalk from 'chalk'
import dedent from "dedent-js";

const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + ' ' + error)
}
const printSuccess = (message) => {
    console.log(chalk.bgGreen('SUCCESS') + ' ' + message)
}

const printHelp = () => {
    console.log(dedent(
        `
       ${chalk.bgCyan('HELP')}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена 
   `))
}

const printWeather = (res, icon) => {
    console.log(dedent(`
   ${chalk.green('Город:')} ${res.name}
   ${chalk.magenta('Сейчас:')} ${Math.round(res.main.temp)} градусов (ощущается как ${Math.round(res.main.feels_like)})
   ${chalk.blue('На небе:')} ${icon} ${res.weather[0].description}
   ${chalk.grey('Влажность')} ${res.main.humidity}%
   ${chalk.grey('Сегодня температура от')} ${Math.round(res.main.temp_max)} до ${Math.round(res.main.temp_min)} градусов
   ${chalk.grey('Скорость ветра')} ${res.wind.speed}
 `))
}

export {printError, printSuccess, printHelp, printWeather}