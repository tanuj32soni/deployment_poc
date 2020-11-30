pipeline {
  node {
    docker {
      image 'tanujdocker/docker-in-docker'
      args '-p 3000:3000 -p 5000:5000' 
    }
  }
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
