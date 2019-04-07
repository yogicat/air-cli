# Air-cli

![screenshot](screenshot_air-cli.png)

Air Quality Commandline Tool
Search current air quality index by location.

위치에 따른 현재 미세먼지 검색 cli

---

## Todo (0408)

- [ ] Refactoring
- [ ] Write test code

---

## Installation

`npm install -g air-cli`

## API Token

- air-cli uses data from https://aqicn.org/api/
- To use the cli, visit the site and get the token.
- Add your token using `--add` flag.

`$ air 29av922123 --add`

- air-cli는 https://aqicn.org/api/의 데이터를 사용한다.
- 해당 사이트에서 토큰을 받아 `$ air <token-value> --add`로 등록한다.
- 해당 명령어는 자동으로 `.env`를 생성해 TOKEN값을 저장한다.

## Usage

```
  Usage
    Search by city
    $ air <city>

    Add api-token
    $ air <Your Token Value> --add

    Examples
    $ air here ................... Show Air Quality on curreent location
    $ air Seoul .................. Show Air Quality in Seoul
    $ air x3ed91 --add, -a ....... Add API Token
    $ air --help, -h ............. Show Help

    API
    https://aqicn.org/api/
```

`$ air here` retruns current location's data based on the IP address.

`$ air here`는 IP주소에 따라, 현재 위치에 해당하는 공기정보를 제공한다.
