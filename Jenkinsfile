pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Builds the Docker image locally using the automatically checked-out code
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
