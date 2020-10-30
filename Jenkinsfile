pipeline {
  agent {
    docker {
      image 'node:12'
      args '-p 3000:3000 -p 5000:5000' 
    }
  }
    environment {
      npm_config_cache = 'npm-cache'
    }
  stages {
    stage('Install dependencies') {
      steps {
        script {
          def dockerTool = tool name: 'docker', type: 'org.jenkinsci.plugins.docker.commons.tools.DockerTool'
          withEnv(["DOCKER=${dockerTool}/bin"]) {
              //stages
              //here we can trigger: sh "sudo ${DOCKER}/docker ..."
          }
        }
      }
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
          sh './jenkins/scripts/build-image.sh'
      }
    }
  }
}
