# Node.js 이미지 사용 (버전은 필요에 따라 조정)
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 파일을 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 애플리케이션 소스 복사
COPY . .

# 개발 모드에서 애플리케이션 실행
#CMD ["HOST=0.0.0.0", "npm", "start"]
CMD ["sh", "-c", "HOST=0.0.0.0 npm start"]

# 포트 노출
EXPOSE 3000
