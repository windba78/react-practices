## backend
#### 테스트
eclipse Ctrl + F11 (IDE run)

#### 빌드
```sh
$ mvn -f kanbanboard/backend exec:exec clean package
```
1. 결과: kanbanboard/backend/target/kanbanboard07.jar
2. 실행
```sh
$ java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard07.jar
```

#### ssh 연결(ssh key 사용하기)
1. key 생성하기
```
# ssh-keygen -t rsa -b 2048 -m PEM -C "windba78@naver.com"
```

2. 생성확인
  - id_rsa: private key
  - id_rsa.pub: public key

3. 공개키(id_rsa.pub) 서버 설치
```
# mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys
```

4. ssh(client) 연결 테스트
```
$ ssh -i /d/.../id_rsa.pem root@serverIP
```

5. ssh 연결 환경 설정(~/.ssh/environment)
```
# vi ~/.ssh/environment
```
내용
PATH=/usr/local/douzone/git/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/douzone/java/bin:/usr/local/douzone/maven/bin:/usr/local/douzone/mariadb/bin:/usr/local/douzone/python/bin:/usr/local/douzone/node/bin:/root/bin

```
$ vi /etc/ssh/sshd_config
```
수정
PermitUserEnvironment yes

```
$ systemctl restart sshd
```

6. jenkins ssh server 설정
  1) Publish over SSH 플러그인 설치
  2) Publish over SSH 플러그인으로 ssh server 등록하기
  3) project 빌드 후 조치(post-build action: send build artifacts over SSH) 설정
    - proj-apps.jar: transfer
    - launch.sh: transfer + execution

## frontend
#### 설치
```sh
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions
$ npm i react react-dom react-router react-router-dom react-addons-update prop-types
```

#### 설정
1. config/babel.config.json
2. config/webpack.config.js

#### npm 스크립팅
```json
  "scripts": {
    "start": "npx webpack serve --config config/webpack.config.js --progress --mode development",
    "build": "npm install && npx webpack --config config/webpack.config.js --mode production"
  }
```

#### 테스트
```sh
$ npm start
```

#### 빌드
```sh
$ npm run build
```