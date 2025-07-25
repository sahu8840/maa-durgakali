FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY backend/mvnw backend/pom.xml ./
COPY backend/.mvn .mvn
COPY backend/src ./src

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

EXPOSE 8080

CMD ["sh", "-c", "java -jar target/*.jar"] 