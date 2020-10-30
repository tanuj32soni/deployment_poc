pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000 -p 5000:5000' 
        }
    }
    environment {
      CI = 'true' 
      HOME = '.'
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
    stage('Build Image') {
      steps {
        sh 'docker build . -t test-app:${BUILD_NUMBER} . ' 
        // script {
        //   def dockerTool = tool name: 'docker', type: 'org.jenkinsci.plugins.docker.commons.tools.DockerTool'
        //   withEnv(["DOCKER=${dockerTool}/bin"]) {
        //       sh "${DOCKER}/docker build . -t test-build"
        //   }
        // }
      }
    }
  }
}
