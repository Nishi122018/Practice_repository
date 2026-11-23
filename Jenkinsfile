
pipeline {
    agent any
    triggers {
    cron('TZ=Asia/Kolkata\n0 9 * * *')
    }
    environment {
        BASE_URL = 'https://opensource-demo.orangehrmlive.com/'
        CI = 'true'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out OrangeHRM project from GitHub'
                git branch: 'main',
                    url: 'https://github.com/Nishi122018/Practice_repository.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browser') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npm run test:chrome'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'reports/html/**, test-results/**',
                             allowEmptyArchive: true
        }
    }
}
