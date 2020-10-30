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
