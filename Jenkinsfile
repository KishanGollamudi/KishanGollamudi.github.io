pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/KishanGollamudi/KishanGollamudi.github.io.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Builds the Docker image locally on the server container
                    sh 'docker build -t portfolio-app:latest .'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Applies the Kubernetes deployment and service manifests
                    sh 'kubectl apply -f deployment.yaml'
                }
            }
        }
    }
}
