pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('Start') {
      steps {
        slackSend (color: '#D4DADF', channel: '#deploy', message: "STARTED: '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
      }
    }
    stage('Clone repo') {
      steps {
        git 'https://github.com/vladimir04/expense-tracker/'
      }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Lint files') {
      steps {
        sh 'npm run lint'
      }
    } 
    stage('Run unit tests') {
      steps {
        sh 'npm run test'
      }
    }
    stage("Build the project") {
      steps {
        sh "npm run build"
      }
    }
    stage("Deploy project") {
      when {
          branch 'master'
      }
      steps {
        sh "/script/deploy.sh"
      }
    }
  }
  post {
    success {
        slackSend (color: '#BDFFC3', channel: '#deploy', message: "SUCCESSFUL: '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
    }
    failure {
        slackSend (color: '#FF9FA1', channel: '#deploy', message: "FAILED: '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        // maybe email integration too on fail?
        // emailext (
        //   subject: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
        //   body: """<p>FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
        //     <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>""",
        //   recipientProviders: []
        // )
    }
  }  
}