FROM alpine:latest AS builder
RUN apk add crystal openssl-dev zlib-dev
RUN apk add --virtual build-base
RUN mkdir /app
WORKDIR /app
COPY server.cr /app
RUN crystal build --static --release server.cr

FROM alpine:latest
RUN mkdir /app
WORKDIR /app
COPY --from=builder /app/server .
COPY index.html .
CMD ["/app/server"]
