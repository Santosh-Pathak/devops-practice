#single stage Dockerfile for a Python Flask application

# FROM python:3.10-slim
# WORKDIR /app
# COPY . .
# RUN pip install -r requirements.txt
# EXPOSE 5000
# CMD ["python", "app.py"]

#multi stage Dockerfile for a Python Flask application
FROM python:3.10-slim as builder
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt
FROM python:3.10-slim
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 5000
CMD ["python", "app.py"]
