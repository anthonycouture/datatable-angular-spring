FROM maven:3.8.2-jdk-11-slim AS maven
COPY . .
RUN mvn clean install
WORKDIR /target
ENV URL_FRONT="http://localhost"
ENV DB_URL="192.168.0.18:5432"
ENV DB="db"
ENV DB_USER="postgres"
ENV DB_PWD="password"
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo-0.0.1.jar"]