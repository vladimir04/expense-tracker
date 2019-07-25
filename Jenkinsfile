pipeline {
  agent any
  tools {nodejs "node"}
  stages {    
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
        sh 'npm test'
      }
    } 
    stage('Run unit tests') {
      steps {
        sh 'npm test'
      }
    }
    stage("Build the project") {
      steps {
        sh "npm run build"
      }
    }
  }     
}