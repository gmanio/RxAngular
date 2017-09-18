
stage('npm_install') {
  node('master') {
    checkout scm
    sh "npm install"
  }
}

stage('npm_build') {
  node('master') {
    sh "npm run build"
  }
}

stage('archiving') {
  node('master') {
    sh "zip dist.zip ${WORKSPACE}/dist/*"
  }
}
