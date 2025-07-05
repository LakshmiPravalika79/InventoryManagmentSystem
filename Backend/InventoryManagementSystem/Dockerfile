# Use a JDK image to build and run your Spring Boot app
FROM eclipse-temurin:17-jdk

# Set working directory inside the container
WORKDIR /app

# Copy project files into the container
COPY . .

# Grant execution permissions for Maven wrapper
RUN chmod +x mvnw

# Build the application (skip tests for faster build)
RUN ./mvnw clean package -DskipTests

# Expose port 8080 for Spring Boot
EXPOSE 8080

# Run the built jar file
CMD ["java", "-jar", "target/*.jar"]
