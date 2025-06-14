pipeline {
    agent { label 'DOCKER-BAYU' }
    
    tools {nodejs "Nodejs-18.16"}

    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'main', url: 'https://github.com/Bayu147/simple-apps.git'
            }
        }
        stage('Build') {
            steps {
               sh ''' npm install'''
            }
        }
        stage('Testing') {
            steps {
                sh '''npm test'''
            }
        }
        stage('Code Review With Sonarqube') {
            steps {
                sh '''sonar-scanner \
                -Dsonar.projectKey=simple-apps \
                -Dsonar.sources=. \
                -Dsonar.host.url=http://172.23.15.61:9000 \
                -Dsonar.login=squ_d954b0e7730ffcfb29a6f743b1799bc414af4ea7'''
            }
        }
        stage('Deploy compose Container') {
            steps {
                sh '''
                docker compose down
                docker image prune
                docker compose build
                docker compose up -d
                '''
            }
        }
        stage('Upload to Registry Image') {
            steps {
                sh '''
                Docker tag simple-apps-apps bayu147/simple-apps-apps:v1.0
                Docker push bayu147/simple-apps-apps:v1.0
                '''
            }
        }
    }
}
