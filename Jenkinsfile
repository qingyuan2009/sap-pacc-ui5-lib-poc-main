@Library(['piper-lib','piper-lib-os']) _

def status = ''

try {
    sapPiperPipeline script: this
    status = 'SUCCESS'
} catch (error) {
    status = 'FAILURE'
    throw error
} 