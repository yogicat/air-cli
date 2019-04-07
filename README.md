# AirQuality CommandLine Tool

Search the air quality index by location.
원하는 도시의 현재 공기상태를 가져옵니다.

Installation

`npm install -g air-cli`

API Token

air-cli는 https://aqicn.org/api/ 를 통해 데이터를 가져오고 있습니다.
해당 사이트에서 토큰을 받아 `.env`에 `TOKEN='your_token'` 입력해서 사용합니다.

\$ air here - 현재 장소의 데이터를 가져옵니다. (ip기반)
