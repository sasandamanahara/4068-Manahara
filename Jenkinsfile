pipeline {
    agent any 
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/sasandamanahara/4068-Manahara'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t sasandamanahara/testproject:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'Sasanda-DockerhubPassword', variable: 'sasanda-dockerhubpassword')])  {
                    script {
                        bat "docker login -u sasandamanahara -p ${sasanda-dockerhubpassword}"
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push sasandamanahara/testproject:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}
