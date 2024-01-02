from pydantic import BaseModel
from enum import Enum


class TemperatureFormat(Enum):
    CELSIUS = 'c'
    FAHRENHEIT = 'f'


class Temperature(BaseModel):
    time: float
    temperature: float
    param: TemperatureFormat
