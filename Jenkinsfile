pipeline {
  agent {
    label 'docker' 
  }
  stages {
    stage('Test') {
      agent {
        docker {
          // Set both label and image
          label 'docker'
          image 'node:7-alpine'
        }
      }
      steps {
          sh 'npm install'
          sh './jenkins/scripts/test.sh'
      }
    }
    stage('Build Image') {
      agent {
        docker {
          // Set both label and image
          label 'docker'
          image 'node:7-alpine'
        }
      }
      steps {
        sh 'docker build . -t test-app:${BUILD_NUMBER}' 
      }
    }
  }
}
