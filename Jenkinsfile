pipeline {
  agent {
    docker {
      image 'node:12-alpine'
      args '-p 3000:3000 -p 5000:5000' 
    }
  }
    environment {
      npm_config_cache = 'npm-cache'
    }
  stages {
    stage('Build') {
      steps {
          sh 'npm install'
      }
    }
    stage('Test') {
      steps {
          sh './jenkins/scripts/test.sh'
      }
    }
  }
}
