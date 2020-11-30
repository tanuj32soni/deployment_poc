pipeline {
  agent any
  environment {
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install dependencies') {
      steps {
          sh 'npm install'
      }
    }
    stage('Test') {
      steps {
          sh './jenkins/scripts/test.sh'
      }
    }
    // stage('Build Image') {
    //   steps {
    //       sh './jenkins/scripts/build-image.sh'
    //   }
    // }
  }
}
