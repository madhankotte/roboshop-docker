FROM openjdk:11
WORKDIR /opt/server
COPY shipping-1.0.jar shipping.jar
EXPOSE 8080
ENV CART_ENDPOINT="cart:8080" \
    DB_HOST="mysql"
CMD ["java", "-jar", "shipping.jar"]
