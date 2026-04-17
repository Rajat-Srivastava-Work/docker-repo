FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY target/usermanagementapp.war usermanagementapp.war
EXPOSE 8082
ENTRYPOINT ["java","-jar","/app/usermanagementapp.war"]