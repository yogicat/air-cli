# Air-cli

Air quality commandline App
Search current air quality index by location.

위치에 따른 현재 미세먼지 검색 CLI APP

---

## Installation

`npm install -g air-cli`

## API Token

- air-cli uses data from https://aqicn.org/api/
- To use the cli, visit the site and get the token.
- Add your token using `--add` flag.

`$ air --add 29av922123`

- air-cli는 https://aqicn.org/api/의 데이터를 사용한다.
- 해당 사이트에서 토큰을 받아 `$ air --add`로 등록한다.

## Usage

```
   Usage
    Search by city
    $ air --in <city>

    Add api-token
    $ air --add <Your Token Value>

    Options
      --add, -a         Add API Token
      --token,-t        Show saved token
      --remove, -r      Remove token
      --in, -i          Search by location
      --help, -h        Display Heol

    Examples
    $ air --in here ............. Show Air Quality based on curreent location
    $ air --in Seoul ............ Show Air Quality in Seoul
    $ air --add 2zd82s .......... Add API Token
    $ air --token ............... Show saved token
    $ air --help ................ Show Help

    API
    https://aqicn.org/api/
`,
```

## Data

https://aqicn.org/api/
