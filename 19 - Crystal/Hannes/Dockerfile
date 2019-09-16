FROM alpine as builder

RUN apk update && apk add crystal build-base openssl-dev zlib-dev

RUN mkdir /app
WORKDIR /app

COPY server.cr /app

RUN crystal build server.cr --release --static

# -----

FROM alpine

RUN mkdir /app

WORKDIR /app

COPY --from=builder /app/server .

RUN ls -la /app

CMD ["/app/server"]

EXPOSE 8080
