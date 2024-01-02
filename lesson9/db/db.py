from models.types import TemperatureFormat

database: dict[float, dict[str, float | str]] = {}


def read_data(param='c'):
    if param == TemperatureFormat.CELSIUS or param == 'c':
        return database

    if param == TemperatureFormat.FAHRENHEIT or param == 'f':
        out = {}
        for date, data in database.items():
            out[date] = {
                'param': 'f',
                'temperature': data.get('temperature') * 9 / 5 + 32
            }

        return out

    return {}


def post_data(data: dict[str, float | str]):
    temperature = 0
    match data.get('param'):
        case TemperatureFormat.CELSIUS:
            temperature = data.get('temperature')
        case TemperatureFormat.FAHRENHEIT:
            temperature = (data.get('temperature') - 32) * 5 / 9

    database[data.get('date')] = {
        'temperature': temperature,
        'param': 'c'
    }
    return {data.get('date'): database[data.get('date')]}


def put_data(data: dict[str, float | str]):
    temperature = 0
    match data.get('param'):
        case TemperatureFormat.CELSIUS:
            temperature = data.get('temperature')
        case TemperatureFormat.FAHRENHEIT:
            temperature = (data.get('temperature') - 32) * 5 / 9

    database[data.get('date')] = {
        'temperature': temperature,
        'param': 'c'
    }
    return {data.get('date'): database[data.get('date')]}


def delete_data(date: float):
    return {date: database.pop(date)}
