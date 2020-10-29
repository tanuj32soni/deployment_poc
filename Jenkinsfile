pipeline {
  agent {
    docker {
      image 'node:12-alpine'
      args '-p 3000:3000 -p 5000:5000 -u root:sudo -v $HOME/workspace/deployment_poc:/deployment_poc' 
    }
  }
  environment {
    CI = 'true'
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
