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
                    // Applies manifests using the explicit cluster server and container kubeconfig path
                    sh 'kubectl apply -f deployment.yaml --server=https://172.30.1.2:6443 --kubeconfig=/var/jenkins_home/.kube/config --validate=false'
                }
            }
        }
    }
}
