# OCR-WEB

## 설치 & 설정
### 패키지 설치
패키지 설치 후 꼭! IDE에서 Prettier & ESLint 설정한
```
$> yarn install
yarn install v1.22.15
[1/4] 🔍  Resolving packages...
...
```

### Prettier 실행
```
$> yarn format
yarn run v1.22.15
$ prettier --write 'src/**/*.{js,jsx,ts,tsx}'
...
```

### ESLint 실행
```
$> yarn lint
yarn run v1.22.15
$ eslint 'src/**/*.{js,jsx,ts,tsx}'
...
```

---

## env 관리하기
.env.local을 제외한 *.env.*를 파일을 git에 추가하지 않는다.
Google Drive / App Dev (Olivine Share) / Refactoring / Environment (.env) Files / web에서 .env.lcoal, .env.development, .env.production의 파일을 복사한다.

```
APP_ENV=local

GOOGLE_ANALYTICS_ID=

# olivine api
OLIVINE_ACCOUNT_URI=https://account.olivineinc.com

# service host
OLIVINE_AUTH_HOST=http://localhost:8080
GB_INTERFACE_HOST=http://localhost:5001
PRIMARY_HOST=http://localhost:5002
WEB_HOST=http://localhost:3000

# App
APP_DEEP_LINK=olivinecommunitymobile://

# Store link
APP_STORE_LINK=https://apps.apple.com/us/app/olivine-community/id1493075916
GOOGLE_PLAY_LINK=https://play.google.com/store/apps/details?id=com.olivinecommunity.mobile
```

---

## 실행
### Target Server를 대상으로 실행하기
```
$> yarn start:[local / development / production]
```

---

## 배포
CircleCI를 사용하여 웹 서버를 firebase hosting에 배포한다.

### Dev 서버
develop 브랜치를 트리거하여 ocr-web-dev(cca-web-demo-internal)에 자동 배포된다.

### Prod 서버
main 브랜치를 트리거하여 ocr-web(cca-web-demo)에 자동 배포된다.
